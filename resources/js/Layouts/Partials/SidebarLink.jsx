import { Link } from '@inertiajs/react'
import clsx from 'clsx'

export function SidebarLink({ text, href = '', active = false, icon }) {
  return (
    <Link
      href={href}
      className={clsx(
        'group px-4 py-2 flex items-center gap-2 text-sm font-medium text-gray-700 hover:bg-rose-50 hover:text-rose-900 active:bg-gray-50 dark:text-gray-200 dark:hover:bg-rose-800 dark:hover:text-rose-200',
        [
          {
            'border-r-4 border-rose-400 bg-rose-50 dark:bg-rose-800': active,
          },
        ],
      )}
    >
      <span className="flex flex-none items-center opacity-75">{icon}</span>
      <span>{text}</span>
    </Link>
  )
}
