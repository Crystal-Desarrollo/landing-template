import { formatDate } from '@/utils/dates'
import { router, usePage } from '@inertiajs/react'
import { Button, Dialog, DialogPanel, Subtitle, TableCell, TableRow, Title } from '@tremor/react'
import { useState } from 'react'
import { toast } from 'sonner'

export default function UsersTableRow({ data }) {
  const {
    auth: { user: currentUser },
  } = usePage().props
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogPanel>
          <Title className="mb-2">Eliminar Usuario</Title>
          <Subtitle>El usuario será eliminado de manera irreversible. ¿Desea continuar?</Subtitle>
          <div className="mt-6 flex justify-end gap-4">
            <Button color="slate" variant="secondary" onClick={() => setIsOpen(false)}>
              Cancelar
            </Button>
            <Button
              color="red"
              onClick={() => {
                router.delete(route('users.destroy', data.id))
                toast.success('Usuario eliminado correctamente.')
              }}
            >
              Si, eliminar usuario
            </Button>
          </div>
        </DialogPanel>
      </Dialog>

      <TableRow>
        <TableCell>{data.name}</TableCell>
        <TableCell>{data.email}</TableCell>
        <TableCell>{formatDate(data.created_at, 'dd/MM/yyyy')}</TableCell>
        <TableCell className="flex flex-row justify-end gap-4">
          <Button color="orange" variant="light" onClick={() => router.get(route('users.edit', { user: data.id }))}>
            Modificar
          </Button>
          {data.id !== currentUser.id && (
            <Button color="red" variant="light" onClick={() => setIsOpen(true)}>
              Eliminar
            </Button>
          )}
        </TableCell>
      </TableRow>
    </>
  )
}
