import { SidebarLink } from '@/Layouts/Partials/SidebarLink.jsx'
import { IconHome, IconX } from '@tabler/icons-react'
import clsx from 'clsx'

export function Sidebar({ mobileOpen, setMobileOpen }) {
  return (
    <nav
      id="page-sidebar"
      className={clsx(
        'lg:translate-x-0 fixed bottom-0 start-0 top-0 z-50 flex h-full w-full flex-col border-gray-200 bg-white transition-transform duration-300 ease-out dark:border-gray-700/75 dark:bg-gray-900 lg:w-64 ltr:border-r rtl:border-l',
        [
          {
            '-translate-x-full': !mobileOpen,
            'translate-x-0': mobileOpen,
          },
        ],
      )}
      aria-label="Main Sidebar Navigation"
    >
      <button
        type="button"
        className="ms-3 inline-flex items-center justify-center leading-5 text-gray-800 hover:text-rose-600 focus:outline-none active:text-rose-800 dark:text-gray-200 dark:hover:text-rose-300 dark:active:text-rose-200 lg:hidden absolute top-4 right-4"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <IconX />
      </button>
      <div className="w-full h-16">{/* Logo */}</div>
      <div className="overflow-y-auto mb-auto">
        <div className="w-full">
          <nav className="flex flex-col gap-1">
            <div className="text-xs font-medium uppercase tracking-wider text-gray-400 p-4">Menú</div>
            <SidebarLink href={route('home')} text="Home" icon={<IconHome />} active={route().current('home')} />
          </nav>
        </div>
      </div>
    </nav>
  )
}
