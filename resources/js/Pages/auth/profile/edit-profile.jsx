import { Subtitle, Title } from '@tremor/react'
import UpdatePasswordForm from './Partials/update-password-form.jsx'
import UpdateProfileInformationForm from './Partials/update-profile-information-form.jsx'

export default function EditProfile() {
  return (
    <>
      <Title>Mi perfil</Title>
      <Subtitle>Administrá tu información personal, la seguridad de tu cuenta y más</Subtitle>

      <UpdateProfileInformationForm />

      <UpdatePasswordForm />
    </>
  )
}
