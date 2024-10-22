import InputLabel from '@/Components/input-label.jsx'
import { AdminLayout } from '@/layouts/admin-layout/admin-layout.jsx'
import { useForm } from '@inertiajs/react'
import { Button, Card, Col, Grid, MultiSelect, MultiSelectItem, TextInput, Title } from '@tremor/react'
import { toast } from 'sonner'

export default function CreateUser({ user, roles = [] }) {
  const isEditing = !!user?.id
  const form = useForm({
    name: user?.name || '',
    email: user?.email || '',
    roles: user?.roles.map(role => role.name) || [],
  })

  const handleInputChange = e => {
    form.setData(e.target.name, e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (isEditing) {
      form.put(route('users.update', user.id), {
        preserveState: true,
        preserveScroll: true,
        onSuccess: () => {
          toast.success('Usuario actualizado correctamente')
        },
      })

      return
    }

    form.post(route('users.store'), {
      preserveState: true,
      preserveScroll: true,
      onSuccess: () => {
        form.reset()
        toast.success('Usuario creado correctamente')
      },
    })
  }

  return (
    <Card>
      <Title>{isEditing ? 'Editar usuario' : 'Crear usuario'}</Title>
      <form onSubmit={handleSubmit}>
        <Grid className="gap-4" numItemsMd={2}>
          <Col>
            <InputLabel htmlFor="name" value="Nombre completo" />
            <TextInput
              name="name"
              placeholder="Nombre del usuario"
              value={form.data.name}
              onChange={handleInputChange}
              error={form.errors.name}
              errorMessage={form.errors.name}
              disabled={form.processing}
            />
          </Col>
          <Col>
            <InputLabel htmlFor="email" value="Correo electrónico" />
            <TextInput
              type="email"
              name="email"
              placeholder="Email del usuario"
              value={form.data.email}
              onChange={handleInputChange}
              error={form.errors.email}
              errorMessage={form.errors.email}
              disabled={form.processing}
            />
          </Col>
          <Col>
            <InputLabel htmlFor="roles" value="Roles" />
            <MultiSelect
              placeholder="Seleccionar"
              placeholderSearch="Buscar..."
              value={form.data.roles}
              onValueChange={value => form.setData('roles', value)}
            >
              {roles.map(role => (
                <MultiSelectItem key={role.name} value={role.name}>
                  {role.display_name}
                </MultiSelectItem>
              ))}
            </MultiSelect>
          </Col>
          <Col numColSpanMd={2} className="flex justify-end">
            <Button type="submit" disabled={form.processing} loading={form.processing}>
              {isEditing ? 'Actualizar usuario' : 'Crear usuario'}
            </Button>
          </Col>
        </Grid>
      </form>
    </Card>
  )
}

CreateUser.layout = page => <AdminLayout title={page.props.user ? 'Editar usuario' : 'Crear usuario'} children={page} />
