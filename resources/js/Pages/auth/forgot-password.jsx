import { PublicLayout } from '@/Layouts/PublicLayout/public-layout.jsx'
import Logo from '@assets/logo.svg'
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
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <Head title="Recuperar contraseña" />
      {status && (
        <Callout title="Correo electrónico enviado" color="green" className="w-full mb-4">
          <p>{status}</p>
        </Callout>
      )}

      <Card onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
        <img src={Logo} alt="Logo" className="h-28 mx-auto mb-4" />
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
  )
}

ForgotPassword.layout = page => <PublicLayout>{page}</PublicLayout>
