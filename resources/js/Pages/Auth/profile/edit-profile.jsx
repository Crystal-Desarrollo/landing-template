import { useTabs } from '@/Hooks/useTabs.jsx'
import { AuthenticatedLayout } from '@/Layouts/AuthenticatedLayout/AuthenticatedLayout.jsx'
import { Subtitle, Tab, TabGroup, TabList, TabPanel, TabPanels, Title } from '@tremor/react'
import UpdatePasswordForm from './Partials/update-password-form.jsx'
import UpdateProfileInformationForm from './Partials/update-profile-information-form.jsx'

export default function EditProfile() {
  const { tab, handleChangeTab } = useTabs()

  return (
    <AuthenticatedLayout title="Perfil">
      <Title>Mi perfil</Title>
      <Subtitle>Administrá tu información personal, la seguridad de tu cuenta y más</Subtitle>

      <TabGroup className="mt-4" defaultIndex={tab} onIndexChange={handleChangeTab}>
        <TabList>
          <Tab>Información personal</Tab>
          <Tab>Seguridad</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <UpdateProfileInformationForm />
          </TabPanel>
          <TabPanel>
            <UpdatePasswordForm />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </AuthenticatedLayout>
  )
}
