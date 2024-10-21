import { SidebarLink } from '@/Layouts/AdminLayout/Partials/SidebarLink.jsx'
import logo from '@assets/logo.svg'
import { IconDashboard } from '@tabler/icons-react'
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
      <div className="flex w-full flex-none items-center justify-between px-5 shadow-sm py-4">
        <img alt="Logo" src={logo} className="h-10 dark:hidden" />

        <div className="flex items-center">
          <button
            type="button"
            className="ms-3 inline-flex items-center justify-center leading-5 text-gray-800 hover:text-rose-600 focus:outline-none active:text-rose-800 dark:text-gray-200 dark:hover:text-rose-300 dark:active:text-rose-200 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="hi-solid hi-x-mark inline-block h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      <div className="overflow-y-auto">
        <div className="w-full py-4">
          <nav className="space-y-1">
            <div className="px-5 pb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Menú</div>
            <SidebarLink
              href={route('admin.dashboard')}
              text="Dashboard"
              icon={<IconDashboard />}
              active={route().current('admin.dashboard')}
            />
          </nav>
        </div>
      </div>
      <div className="flex flex-col mt-auto"></div>
    </nav>
  )
}
