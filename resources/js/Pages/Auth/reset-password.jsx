import { PublicLayout } from '@/Layouts/PublicLayout/PublicLayout.jsx'
import Logo from '@assets/logo.svg'
import { Head, useForm } from '@inertiajs/react'
import { Button, Card, TextInput } from '@tremor/react'
import { toast } from 'sonner'

export default function ResetPassword({ token, email }) {
  const { setData, data, errors, processing, post } = useForm({
    token: token,
    email: email,
    password: '',
    password_confirmation: '',
  })

  function handleSubmit(e) {
    e.preventDefault()

    post(route('password.store'), {
      onSuccess: () => toast.success('Contraseña actualizada correctamente'),
    })
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <Head title="Cambiar contraseña" />

      <Card onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
        <img src={Logo} alt="Logo" className="h-28 mx-auto mb-4" />

        <TextInput
          required
          placeholder="Correo electrónico"
          onValueChange={value => setData('email', value)}
          value={data.email}
          error={errors.email}
          errorMessage={errors.email}
        />
        <TextInput
          required
          placeholder="Nueva contraseña"
          type="password"
          autoComplete="password"
          onValueChange={value => setData('password', value)}
          value={data.password}
          error={errors.password}
          errorMessage={errors.password}
        />
        <TextInput
          placeholder="Confirmar contraseña"
          type="password"
          autoComplete="password_confirmation"
          onValueChange={value => setData('password_confirmation', value)}
          value={data.password_confirmation}
          error={errors.password_confirmation}
          errorMessage={errors.password_confirmation}
        />
        <Button className="w-full" disabled={processing} loading={processing}>
          Guardar nueva contraseña
        </Button>
      </Card>
    </form>
  )
}

ResetPassword.layout = page => <PublicLayout>{page}</PublicLayout>
