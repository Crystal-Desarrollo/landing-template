import { GuestLayout } from '@/Layouts/GuestLayout'
import { Head, Link, useForm } from '@inertiajs/react'
import { Button, Callout, Card, Subtitle, TextInput } from '@tremor/react'

export default function ForgotPassword({ status }) {
  const { data, setData, errors, processing, post } = useForm({
    email: '',
  })

  function handleSubmit(e) {
    e.preventDefault()

    post(route('password.email'))
  }

  return (
    <GuestLayout>
      <Head title="Recuperar contraseña" />
      <div className="mx-auto max-w-md w-full flex flex-col gap-8 items-center">
        {status && (
          <Callout title="Email enviado" color="green" className="w-full">
            <p>{status}</p>
          </Callout>
        )}
        <form onSubmit={handleSubmit} className="w-full">
          <Card onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
            <Subtitle>Ingresá el correo electrónico asociado a tu usuario</Subtitle>
            <TextInput
              required
              placeholder="Direccion de email"
              autoComplete="username"
              onValueChange={value => setData('email', value)}
              value={data.email}
              error={errors.email}
              errorMessage={errors.email}
            />
            <Button className="w-full" disabled={processing} loading={processing}>
              Recuperar contraseña
            </Button>
            <Link className="text-tremor-brand" href={route('login')}>
              Iniciar sesion
            </Link>
          </Card>
        </form>
      </div>
    </GuestLayout>
  )
}
