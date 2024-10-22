import { AdminLayout } from '@/layouts/admin-layout/admin-layout.jsx'
import { Link } from '@inertiajs/react'
import { IconUsersGroup } from '@tabler/icons-react'
import { Card, Grid, Subtitle, Title } from '@tremor/react'

export default function Dashboard() {
  return (
    <>
      <Title>Bienvenido al panel de administración</Title>
      <Subtitle>Acá podrás gestionar todo lo relacioado con tu página web</Subtitle>

      <Grid numItemsSm={2} numItemsMd={3} className="gap-4 mt-4">
        <Link href={route('users.index')}>
          <Card>
            <Title className="flex items-center gap-2 mb-2">
              <IconUsersGroup /> Usuarios
            </Title>
            <p>Administrá quienes tienen acceso a este panel y a que recursos pueden acceder</p>
          </Card>
        </Link>
      </Grid>
    </>
  )
}

Dashboard.layout = page => <AdminLayout title="Dashboard" children={page} />
