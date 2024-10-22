import { Sheet } from '@/components/sheet.jsx'
import { TableHeader } from '@/components/table/table-header.jsx'
import { TablePagination } from '@/components/table/table-pagination.jsx'
import { router, useForm } from '@inertiajs/react'
import { IconFilter, IconSearch } from '@tabler/icons-react'
import {
  Button,
  Col,
  Grid,
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextInput,
  Title,
} from '@tremor/react'
import PropTypes from 'prop-types'
import React, { useDeferredValue, useEffect, useState } from 'react'

export const TableContent = props => {
  const {
    columns,
    paginator,
    row,
    emptyText,
    filtersPanel,
    renderAside,
    resourceName,
    hasStatusFilter = true,
    showPagination = true,
    showToolbar = true,
  } = props
  const filtersForm = useForm({
    ...route().params.filters,
  })
  const [openFilters, setOpenFilters] = useState(false)
  const [query, setQuery] = useState(route().params.filters?.query || null)
  const deferredQuery = useDeferredValue(query)
  const isEmpty = !paginator?.data || paginator?.data?.length === 0

  const FiltersPanel = filtersPanel?.type

  useEffect(() => {
    if (deferredQuery === null) return

    router.reload({
      data: {
        ...route().params,
        filters: {
          ...route().params.filters,
          query: deferredQuery,
        },
      },
      replace: true,
      preserveState: true,
      preserveScroll: true,
      only: [resourceName],
    })
  }, [deferredQuery, resourceName])

  function handleStatusFilter(statusValue) {
    router.reload({
      data: {
        ...route().params,
        filters: {
          ...route().params.filters,
          status: statusValue,
        },
      },
      replace: true,
      preserveState: true,
      preserveScroll: true,
      only: [resourceName],
    })
  }

  function handleFilter(e) {
    e.preventDefault()

    router.get(
      route(route().current()),
      {
        ...route().params,
        filters: {
          ...route().params.filters,
          ...filtersForm.data,
        },
      },
      {
        replace: true,
        preserveState: true,
        preserveScroll: true,
        only: [resourceName],
        onSuccess: () => {
          setOpenFilters(false)
        },
      },
    )
  }

  function handleClearFilters() {
    filtersForm.reset()
    router.get(
      route(route().current()),
      {
        ...route().params,
        filters: [],
      },
      {
        replace: true,
        preserveState: true,
        preserveScroll: true,
        only: [resourceName],
        onSuccess: () => {
          setOpenFilters(false)
        },
      },
    )
  }

  return (
    <section className="flex flex-col">
      {showToolbar && (
        <Grid numItems={1} numItemsSm={1} numItemsMd={3} className="gap-y-2 mb-2">
          <Col numColSpanMd={2} className="flex flex-col sm:flex-row gap-2">
            <TextInput
              className="lg:max-w-md"
              placeholder="Buscar..."
              icon={IconSearch}
              value={query || ''}
              onChange={e => setQuery(e.target.value)}
            />
            {hasStatusFilter && (
              <div>
                <Select
                  placeholder="Estado"
                  value={route().params.filters?.status || 'active'}
                  onChange={handleStatusFilter}
                >
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="active">Activos</SelectItem>
                  <SelectItem value="inactive">Inactivos</SelectItem>
                </Select>
              </div>
            )}
            {filtersPanel && (
              <form onSubmit={handleFilter}>
                <Button type="button" variant="secondary" onClick={() => setOpenFilters(!openFilters)}>
                  <IconFilter className="h-5 w-5 inline-flex" /> Filtros
                </Button>
                <Sheet open={openFilters} onClose={() => setOpenFilters(false)}>
                  <Title className="mb-4">Filtros</Title>
                  <FiltersPanel form={filtersForm} />
                  <div className="flex flex-row items-center gap-2 mt-4">
                    <Button type="button" variant="secondary" onClick={handleClearFilters}>
                      Quitar
                    </Button>
                    <Button>Aplicar</Button>
                  </div>
                </Sheet>
              </form>
            )}
          </Col>
          <Col numColSpan={2} numColSpanMd={1} className="w-full flex flex-row items-center justify-end">
            {renderAside && renderAside}
          </Col>
        </Grid>
      )}

      <Table>
        <TableHeader columns={columns} />
        <TableBody>
          {isEmpty && (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center text-md">
                {emptyText || 'No se encontraron resultados'}
              </TableCell>
            </TableRow>
          )}

          {paginator?.data?.map(item => {
            return React.cloneElement(row, {
              key: item.key || item.id,
              data: item,
            })
          })}
        </TableBody>
      </Table>

      {showPagination && <TablePagination paginator={paginator} />}
    </section>
  )
}

TableContent.propTypes = {
  columns: PropTypes.array.isRequired,
  paginator: PropTypes.object.isRequired,
  row: PropTypes.element.isRequired,
  resourceName: PropTypes.string.isRequired, // Used for partial reloads when filtering
  emptyText: PropTypes.string,
  filtersPanel: PropTypes.element,
  renderAside: PropTypes.element,
  hasStatusFilter: PropTypes.bool,
  showPagination: PropTypes.bool,
  showToolbar: PropTypes.bool,
}
