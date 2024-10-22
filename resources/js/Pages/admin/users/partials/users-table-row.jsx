import { TableOption, TableOptions } from '@/Components/table-options.jsx'
import { formatDate } from '@/utils/dates'
import { router, usePage } from '@inertiajs/react'
import { IconPencil, IconTrash } from '@tabler/icons-react'
import { TableCell, TableRow } from '@tremor/react'

export default function UsersTableRow({ data, onDelete }) {
  const {
    auth: { user: currentUser },
  } = usePage().props

  return (
    <TableRow>
      <TableCell>{data.name}</TableCell>
      <TableCell>{data.email}</TableCell>
      <TableCell>{data.roles.map(role => role.display_name).join(', ')}</TableCell>
      <TableCell>{formatDate(data.created_at, 'dd/MM/yyyy')}</TableCell>
      <TableCell className="text-right">
        <TableOptions>
          <TableOption onClick={() => router.get(route('users.edit', data.id))}>
            <IconPencil className="h-4 w-4 mr-2" /> Modificar
          </TableOption>
          <TableOption disabled={data.id === currentUser.id} onClick={() => onDelete(data.id)}>
            <IconTrash className="h-4 w-4 mr-2" /> Eliminar
          </TableOption>
        </TableOptions>
      </TableCell>
    </TableRow>
  )
}
