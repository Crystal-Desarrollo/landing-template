import { router } from '@inertiajs/react'
import { Button, Dialog, DialogPanel, Subtitle, Title } from '@tremor/react'
import { toast } from 'sonner'

export const DeleteUserAlert = ({ open, onClose, userId }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogPanel>
        <Title className="mb-2">Eliminar Usuario</Title>
        <Subtitle>El usuario será eliminado de manera irreversible. ¿Desea continuar?</Subtitle>
        <div className="mt-6 flex justify-end gap-4">
          <Button color="slate" variant="secondary" onClick={onClose}>
            Cancelar
          </Button>
          <Button
            color="red"
            onClick={() => {
              router.delete(route('users.destroy', userId))
              toast.success('Usuario eliminado correctamente.')
              onClose()
            }}
          >
            Si, eliminar usuario
          </Button>
        </div>
      </DialogPanel>
    </Dialog>
  )
}
