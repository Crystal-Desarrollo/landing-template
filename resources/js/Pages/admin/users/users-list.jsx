import { TableContent } from '@/Components/Table/TableContent'
import { AdminLayout } from '@/Layouts/AdminLayout/AdminLayout.jsx'
import UsersTableRow from '@/Pages/admin/users/partials/users-table-row.jsx'
import { Link } from '@inertiajs/react'
import { IconPlus } from '@tabler/icons-react'
import { Button, Card } from '@tremor/react'

export const USERS_COLUMNS = [
  { id: 'name', label: 'Nombre' },
  { id: 'email', label: 'Email' },
  { id: 'roles', label: 'Roles' },
  { id: 'created_at', label: 'Fecha de Creación' },
  { id: 'actions', label: '' },
]

export default function UsersList({ users }) {
  return (
    <Card>
      <TableContent
        columns={USERS_COLUMNS}
        paginator={users}
        row={<UsersTableRow />}
        resourceName="users"
        hasStatusFilter={false}
        renderAside={
          <Link href={route('users.create')}>
            <Button icon={IconPlus}>Crear usuario</Button>
          </Link>
        }
      />
    </Card>
  )
}

UsersList.layout = page => <AdminLayout title="Usuarios" children={page} />
