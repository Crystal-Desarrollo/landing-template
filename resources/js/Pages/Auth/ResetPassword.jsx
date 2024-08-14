import { GuestLayout } from '@/Layouts/GuestLayout.jsx'
import { useForm } from '@inertiajs/react'
import { Button, Callout, Card, TextInput } from '@tremor/react'
import { toast } from 'sonner'

export default function ResetPassword({ token, email, status }) {
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
    <GuestLayout>
      <div className="mx-auto max-w-md w-full flex flex-col gap-8 items-center">
        {status && (
          <Callout title="Email enviado" color="green" className="w-full">
            <p>{status}</p>
          </Callout>
        )}
        <form onSubmit={handleSubmit} className="w-full">
          <Card onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
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
      </div>
    </GuestLayout>
  )
}
