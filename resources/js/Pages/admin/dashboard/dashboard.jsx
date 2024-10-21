import { AdminLayout } from '@/Layouts/AdminLayout/AdminLayout.jsx'
import { Link } from '@inertiajs/react'
import { IconUsersGroup } from '@tabler/icons-react'
import { Card, Grid, Subtitle, Title } from '@tremor/react'

export default function Dashboard({ auth: { user } }) {
  return (
    <>
      <Title>Bienvenido al panel de administración</Title>
      <Subtitle>Acá podrás gestionar todo lo relaciado con tu página web</Subtitle>

      <Grid numItemsSm={2} numItemsMd={3} className="gap-4 mt-4">
        <Link>
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

Dashboard.layout = page => <AdminLayout header="Dashboard" children={page} />