import { formatDate } from '@/utils/dates'
import { router } from '@inertiajs/react'
import { Button, Dialog, DialogPanel, Subtitle, TableCell, TableRow, Title } from '@tremor/react'
import { useState } from 'react'
import { toast } from 'sonner'

export const ARTICLES_COLUMNS = [
  { id: 'title', label: 'Título' },
  { id: 'created_at', label: 'Fecha de Creación' },
  { id: 'updated_at', label: 'Última Actualización' },
  { id: 'actions', label: '' },
]

export default function ArticlesTableRow({ data }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Dialog open={!!isOpen} onClose={() => setIsOpen(false)}>
        <DialogPanel>
          <Title className="mb-2">Eliminar Noticia</Title>
          <Subtitle>La noticia será eliminada de manera irreversible. ¿Estás seguro?</Subtitle>
          <div className="mt-6 flex justify-end gap-4">
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Cancelar
            </Button>
            <Button
              color="red"
              onClick={() => {
                router.delete(route('admin.articles.destroy', data.id), {})
                toast.success('Noticia eliminada exitosamente.')
              }}
            >
              Si, eliminar noticia
            </Button>
          </div>
        </DialogPanel>
      </Dialog>

      <TableRow>
        <TableCell>{data.title}</TableCell>
        <TableCell>{formatDate(data.created_at, 'dd/MM/yyyy')}</TableCell>
        <TableCell>{formatDate(data.updated_at, 'dd/MM/yyyy')}</TableCell>
        {/* <TableCell>
                <Badge color={data.status === "Publicado" ? "green" : "gray"}>
                {data.status}
                </Badge>
                </TableCell> */}
        <TableCell className="flex flex-row justify-end gap-4">
          <Button variant="light" onClick={() => router.get(route('admin.articles.show', data.id), {})}>
            Ver
          </Button>
          <Button
            color="orange"
            variant="light"
            onClick={() => router.get(route('admin.articles.edit', { id: data.id }))}
          >
            Modificar
          </Button>
          <Button color="red" variant="light" onClick={() => setIsOpen(true)}>
            Eliminar
          </Button>
        </TableCell>
      </TableRow>
    </>
  )
}
