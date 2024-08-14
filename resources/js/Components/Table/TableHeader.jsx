import { router } from '@inertiajs/react'
import { IconArrowDown, IconArrowUp, IconArrowsDownUp } from '@tabler/icons-react'
import { TableHead, TableHeaderCell, TableRow } from '@tremor/react'
import { clsx } from 'clsx'
import PropTypes from 'prop-types'

export const TableHeader = ({ columns }) => {
  const { field, direction } = route().params?.sort ?? {}

  function handleSort(columnId) {
    const newDirection = field === columnId && direction === 'asc' ? 'desc' : 'asc'

    router.get(
      route(route().current()),
      {
        ...route().params,
        sort: { field: columnId, direction: newDirection },
      },
      {
        replace: true,
        preserveState: true,
        preserveScroll: true,
      },
    )
  }

  return (
    <TableHead>
      <TableRow>
        {columns.map(column => (
          <TableHeaderCell
            key={column.id}
            onClick={() => column.isSortable && handleSort(column.id)}
            className={clsx(column.className, 'group', {
              'cursor-pointer': column.isSortable,
            })}
          >
            <div className="flex items-center gap-2">
              {column.label}
              {column.isSortable && (
                <>
                  <IconArrowsDownUp
                    className={clsx('h-3 w-3 transition-all duration-100 invisible group-hover:visible', {
                      '!hidden': field === column.id,
                    })}
                  />
                  <IconArrowUp
                    className={clsx('h-3 w-3', {
                      hidden: field !== column.id || direction === 'desc',
                    })}
                  />
                  <IconArrowDown
                    className={clsx('h-3 w-3', {
                      hidden: field !== column.id || direction === 'asc',
                    })}
                  />
                </>
              )}
            </div>
          </TableHeaderCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

TableHead.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      isSortable: PropTypes.bool,
    }),
  ),
}
