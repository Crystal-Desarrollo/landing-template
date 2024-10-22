import { Link } from '@inertiajs/react'
import clsx from 'clsx'

export function SidebarLink({ text, href = '', active = false, icon }) {
  return (
    <Link
      href={href}
      className={clsx(
        'group flex items-center gap-2 px-5 py-0.5 text-sm font-medium text-gray-700 hover:bg-tremor-brand-faint hover:text-tremor-brand-emphasis active:bg-gray-50 dark:text-gray-200 dark:hover:bg-dark-tremor-brand-subtle/10 dark:hover:text-dark-tremor-brand-emphasis',
        [
          {
            'border-r-4 border-tremor-brand !bg-tremor-brand-muted/40 dark:border-dark-tremor-brand-subtle dark:!bg-dark-tremor-brand-subtle/20':
              active,
          },
        ],
      )}
    >
      <span className="flex flex-none items-center opacity-75">{icon}</span>
      <span className="grow py-2">{text}</span>
    </Link>
  )
}
