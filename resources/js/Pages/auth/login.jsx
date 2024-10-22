import InputLabel from '@/Components/InputLabel'
import { PublicLayout } from '@/Layouts/PublicLayout/PublicLayout.jsx'
import Logo from '@assets/logo.svg'
import { Head, Link, useForm } from '@inertiajs/react'
import { Button, Card, TextInput } from '@tremor/react'
import { useEffect } from 'react'

export default function Login() {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  })

  useEffect(() => {
    return () => {
      reset('password')
    }
  }, [])

  const submit = e => {
    e.preventDefault()

    post(route('login'))
  }

  return (
    <Card className="max-w-md">
      <Head title="Ingresar" />

      <img src={Logo} alt="Logo" className="h-28 mx-auto mb-4" />

      <form onSubmit={submit}>
        <div>
          <InputLabel htmlFor="email" value="Email" />

          <TextInput
            id="email"
            type="email"
            placeholder="Correo electrónico"
            value={data.email}
            autoComplete="username"
            onChange={e => setData('email', e.target.value)}
            error={errors.email}
            errorMessage={errors.email}
          />
        </div>

        <div className="mt-4">
          <InputLabel htmlFor="password" value="Password" />

          <TextInput
            id="password"
            type="password"
            placeholder="Contraseña"
            value={data.password}
            autoComplete="current-password"
            onChange={e => setData('password', e.target.value)}
            error={errors.password}
            errorMessage={errors.password}
          />
        </div>

        <div className="flex flex-col items-center justify-end mt-4 gap-4">
          <Button disabled={processing} loading={processing} className="w-full">
            Ingresar
          </Button>

          <Link
            href={route('password.request')}
            className="underline text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
      </form>
    </Card>
  )
}

Login.layout = page => <PublicLayout>{page}</PublicLayout>
