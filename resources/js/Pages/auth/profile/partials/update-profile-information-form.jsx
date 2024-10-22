import InputError from '@/Components/input-error.jsx'
import InputLabel from '@/Components/input-label.jsx'
import { useForm, usePage } from '@inertiajs/react'
import { Button, Card, Col, DatePicker, Grid, Select, SelectItem, TextInput } from '@tremor/react'
import { format, parse } from 'date-fns'
import { es } from 'date-fns/locale'
import { toast } from 'sonner'

export default function UpdateProfileInformation() {
  const user = usePage().props.auth.user

  const { data, setData, patch, errors, processing, transform } = useForm({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    phone_number: user.phone_number,
    gender: user.gender,
    dni: user.dni,
    birth_date: user.birth_date ? parse(user.birth_date, 'yyyy-MM-dd', new Date()) : null,
  })

  const submit = e => {
    e.preventDefault()

    patch(route('profile.update'), {
      onSuccess: () => {
        console.log('success')
        toast.success('Información de perfil actualizada.')
      },
    })
  }

  transform(data => ({
    ...data,
    birth_date: data.birth_date ? format(data.birth_date, 'yyyy-MM-dd') : null,
  }))

  return (
    <Card className="max-w-2xl">
      <header>
        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Información personal</h2>

        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Actualice la información de perfil y la dirección de correo electrónico de su cuenta.
        </p>
      </header>

      <form onSubmit={submit} className="mt-4">
        <Grid numItems={1} numItemsMd={4} className="gap-4">
          <Col numColSpan={1} numColSpanMd={2}>
            <InputLabel htmlFor="first_name" value="Nombre" />
            <TextInput
              id="first_name"
              value={data.first_name}
              onChange={e => setData('first_name', e.target.value)}
              required
              autoComplete="first_name"
              placeholder="Nombre"
              error={errors.first_name}
              errorMessage={errors.first_name}
            />
          </Col>
          <Col numColSpan={1} numColSpanMd={2}>
            <InputLabel htmlFor="last_name" value="Apellido" />
            <TextInput
              id="last_name"
              value={data.last_name}
              onChange={e => setData('last_name', e.target.value)}
              required
              autoComplete="last_name"
              placeholder="Apellido"
              error={errors.last_name}
              errorMessage={errors.last_name}
            />
          </Col>

          <Col numColSpan={1} numColSpanMd={2}>
            <InputLabel htmlFor="dni" value="Número de Documento" />
            <TextInput
              id="dni"
              value={data.dni}
              onChange={e => setData('dni', e.target.value)}
              required
              autoComplete="dni"
              placeholder="Número de Documento"
              error={errors.dni}
              errorMessage={errors.dni}
            />
          </Col>

          <Col numColSpan={1} numColSpanMd={2}>
            <InputLabel htmlFor="gender" value="Sexo que figura en tu DNI" />
            <Select
              required
              id="gender"
              onChange={e => setData('gender', e)}
              value={data.gender}
              placeholder="Elegir"
              error={errors.gender}
              errorMessage={errors.gender}
            >
              <SelectItem value="M">Masculino</SelectItem>
              <SelectItem value="F">Femenino</SelectItem>
              <SelectItem value="X">X</SelectItem>
            </Select>
          </Col>

          <Col numColSpan={1} numColSpanMd={2}>
            <InputLabel htmlFor="birth_date" value="Fecha de nacimiento" />
            <DatePicker
              id="birth_date"
              value={data.birth_date}
              onValueChange={e => setData('birth_date', e)}
              required
              autoComplete="birth_date"
              placeholder="Fecha de nacimiento"
              locale={es}
              enableYearNavigation
            />
            <InputError message={errors.birth_date} />
          </Col>

          <Col numColSpan={1} numColSpanMd={4}>
            <InputLabel htmlFor="email" value="Correo electrónico" />
            <TextInput
              id="email"
              type="email"
              value={data.email}
              onChange={e => setData('email', e.target.value)}
              required
              autoComplete="email"
              placeholder="Correo electrónico"
              error={errors.email}
              errorMessage={errors.email}
            />
          </Col>

          <Col numColSpan={1} numColSpanMd={2}>
            <InputLabel htmlFor="phone_number" value="Teléfono" />
            <TextInput
              id="phone_number"
              value={data.phone_number}
              onChange={e => setData('phone_number', e.target.value)}
              autoComplete="phone_number"
              placeholder="Teléfono"
              error={errors.phone_number}
              errorMessage={errors.phone_number}
            />
          </Col>

          <Col numColSpan={1} numColSpanMd={4}>
            <Button disabled={processing} className="">
              Guardar cambios
            </Button>
          </Col>
        </Grid>
      </form>
    </Card>
  )
}
