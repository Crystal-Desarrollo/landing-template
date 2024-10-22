import InputLabel from '@/Components/InputLabel.jsx'
import { useForm } from '@inertiajs/react'
import { Button, Card, Col, Grid, TextInput } from '@tremor/react'
import { useRef } from 'react'
import { toast } from 'sonner'

export default function UpdatePasswordForm() {
  const passwordInput = useRef()
  const currentPasswordInput = useRef()

  const { data, setData, errors, put, reset, processing } = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
  })

  const updatePassword = e => {
    e.preventDefault()

    put(route('password.update'), {
      preserveScroll: true,
      onSuccess: () => {
        reset()
        toast.success('Su contraseña ha sido actualizada.')
      },
      onError: errors => {
        if (errors.password) {
          reset('password', 'password_confirmation')
          passwordInput.current.focus()
        }

        if (errors.current_password) {
          reset('current_password')
          currentPasswordInput.current.focus()
        }
      },
    })
  }

  return (
    <Card className="max-w-md">
      <header>
        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Actualizar contraseña</h2>

        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Asegúrate de que tu cuenta esté utilizando una contraseña larga y aleatoria para mantenerla segura
        </p>
      </header>

      <form onSubmit={updatePassword} className="mt-4">
        <Grid numItems={1} className="gap-4">
          <Col>
            <InputLabel htmlFor="current_password" value="Contraseña actual" />
            <TextInput
              id="current_password"
              ref={currentPasswordInput}
              value={data.current_password}
              onChange={e => setData('current_password', e.target.value)}
              type="password"
              autoComplete="current-password"
              error={errors.current_password}
              errorMessage={errors.current_password}
              placeholder="Contraseña actual"
            />
          </Col>
          <Col>
            <InputLabel htmlFor="password" value="Nueva contraseña" />
            <TextInput
              id="password"
              ref={passwordInput}
              value={data.password}
              onChange={e => setData('password', e.target.value)}
              type="password"
              autoComplete="new-password"
              error={errors.password}
              errorMessage={errors.password}
              placeholder="Nueva contraseña"
            />
          </Col>
          <Col>
            <InputLabel htmlFor="password_confirmation" value="Repite la nueva contraseña" />
            <TextInput
              id="password_confirmation"
              value={data.password_confirmation}
              onChange={e => setData('password_confirmation', e.target.value)}
              type="password"
              autoComplete="new-password"
              error={errors.password_confirmation}
              errorMessage={errors.password_confirmation}
              placeholder="Repite la nueva contraseña"
            />
          </Col>
          <Col>
            <Button disabled={processing}>Guardar</Button>
          </Col>
        </Grid>
      </form>
    </Card>
  )
}
