import { Link, router } from '@inertiajs/react'
import { IconChevronLeft, IconChevronRight, IconChevronsLeft, IconChevronsRight } from '@tabler/icons-react'
import { Select, SelectItem, Text } from '@tremor/react'

export const TablePagination = ({ paginator }) => {
  const isEmpty = !paginator?.data || paginator?.data?.length === 0

  function handleNavigation(page) {
    router.get(
      route(route().current()),
      {
        ...route().params,
        page,
      },
      {
        replace: true,
        preserveScroll: true,
      },
    )
  }

  function handleChangePerPage(perPage) {
    router.get(
      route(route().current()),
      {
        ...route().params,
        per_page: perPage,
      },
      {
        replace: true,
        preserveScroll: true,
      },
    )
  }

  if (isEmpty || !paginator.links) {
    return null
  }

  return (
    <div className="w-full flex flex-col-reverse sm:flex-row items-center justify-between mt-4 gap-2">
      <Text className="text-nowrap">
        Mostrando desde {paginator.from || 0} - {paginator.to || 0} de {paginator.total || 0} resultados
      </Text>

      <div className="flex flex-row items-center w-full justify-center sm:justify-end gap-4">
        <div className="hidden md:flex items-center gap-2">
          <label className="text-tremor-default text-nowrap">Página actual</label>
          <Select
            placeholder="Página"
            defaultValue={paginator.current_page}
            className="w-2 !min-w-16"
            onValueChange={handleNavigation}
          >
            {Array.from({ length: paginator.last_page }, (_, i) => i + 1).map(page => (
              <SelectItem key={page} value={page} />
            ))}
          </Select>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <label className="text-tremor-default text-nowrap">Filas por página</label>
          <Select
            placeholder="Filas por página"
            defaultValue={paginator.per_page.toString()}
            className="w-2 !min-w-16"
            onValueChange={handleChangePerPage}
          >
            <SelectItem value="15" />
            <SelectItem value="25" />
            <SelectItem value="50" />
            <SelectItem value="100" />
          </Select>
        </div>

        <div className="flex justify-between items-center rounded-tremor-small shadow-tremor-input ring-tremor-ring ring-1 dark:shadow-dark-tremor-input dark:ring-dark-tremor-ring">
          <Link href={paginator.first_page_url} className="px-2 py-1.5">
            <span className="sr-only">Next</span>
            <IconChevronsLeft className="text-slate-500 hover:text-slate-900" />
          </Link>
          <Link href={paginator.prev_page_url} className="px-2 py-1.5">
            <span className="sr-only">Next</span>
            <IconChevronLeft className="text-slate-500 hover:text-slate-900" />
          </Link>
          <Link href={paginator.next_page_url} className="px-2 py-1.5">
            <span className="sr-only">Next</span>
            <IconChevronRight className="text-slate-500 hover:text-slate-900" />
          </Link>
          <Link href={paginator.last_page_url} className="px-2 py-1.5">
            <span className="sr-only">Next</span>
            <IconChevronsRight className="text-slate-500 hover:text-slate-900" />
          </Link>
        </div>
      </div>
    </div>
  )
}
