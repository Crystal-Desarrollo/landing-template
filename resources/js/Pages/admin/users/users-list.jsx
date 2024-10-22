import { DeleteUserAlert } from '@/Pages/admin/users/partials/delete-user-alert.jsx'
import UsersTableRow from '@/Pages/admin/users/partials/users-table-row.jsx'
import { TableContent } from '@/components/table/table-content.jsx'
import { AdminLayout } from '@/layouts/admin-layout/admin-layout.jsx'
import { Link } from '@inertiajs/react'
import { IconPlus } from '@tabler/icons-react'
import { Button, Card } from '@tremor/react'
import { useState } from 'react'

export const USERS_COLUMNS = [
  { id: 'name', label: 'Nombre' },
  { id: 'email', label: 'Email' },
  { id: 'roles', label: 'Roles' },
  { id: 'created_at', label: 'Fecha de Creación' },
  { id: 'actions', label: '' },
]

export default function UsersList({ users }) {
  const [deleteAlert, setDeleteAlert] = useState({ open: false, userId: null })

  const openDeleteAlert = userId =>
    setDeleteAlert({
      open: true,
      userId,
    })

  const closeDeleteAlert = () =>
    setDeleteAlert({
      open: false,
      userId: null,
    })

  return (
    <Card>
      <DeleteUserAlert open={deleteAlert.open} onClose={closeDeleteAlert} userId={deleteAlert.userId} />
      <TableContent
        columns={USERS_COLUMNS}
        paginator={users}
        row={<UsersTableRow onDelete={openDeleteAlert} />}
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
