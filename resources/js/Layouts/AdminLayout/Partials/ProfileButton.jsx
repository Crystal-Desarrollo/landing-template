import { Link, usePage } from '@inertiajs/react'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

export function ProfileButton({ className }) {
  const {
    auth: { user },
  } = usePage().props
  const [userDropdownOpen, setUserDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const handleClickOutside = event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setUserDropdownOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className={clsx('relative inline-block', className)} ref={dropdownRef}>
      <button
        type="button"
        className="inline-flex items-center justify-center rounded border border-gray-300 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 shadow-sm hover:border-gray-300 hover:bg-gray-100 hover:text-gray-800 hover:shadow focus:outline-none focus:ring focus:ring-gray-500/25 active:border-white active:bg-white active:shadow-none dark:border-gray-700/75 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-gray-700 dark:hover:bg-gray-800 dark:hover:text-gray-200 dark:focus:ring-gray-700 dark:active:border-gray-900 dark:active:bg-gray-900"
        id="tk-dropdown-layouts-user"
        aria-haspopup="true"
        aria-expanded={userDropdownOpen}
        onClick={() => setUserDropdownOpen(!userDropdownOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="hi-solid hi-user-circle inline-block h-5 w-5 sm:hidden"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
            clipRule="evenodd"
          />
        </svg>
        <span className="hidden sm:inline">{user?.name}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="hi-solid hi-chevron-down ms-1 hidden h-5 w-5 opacity-50 sm:inline-block"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        role="menu"
        aria-labelledby="tk-dropdown-layouts-user"
        className={clsx('z-1 absolute end-0 mt-2 w-48 rounded shadow-xl ltr:origin-top-right rtl:origin-top-left', {
          hidden: !userDropdownOpen,
        })}
      >
        <div className="divide-y divide-gray-100 rounded bg-white ring-1 ring-black/5 dark:divide-gray-700 dark:bg-gray-900 dark:ring-gray-700">
          <div className="space-y-1 p-2">
            <Link
              href={route('profile.edit')}
              role="menuitem"
              className="flex w-full items-center gap-2 rounded px-3 py-2 text-start text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:bg-gray-100 focus:text-gray-700 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:focus:bg-gray-800 dark:focus:text-gray-100"
            >
              <span>Perfil</span>
            </Link>
            <Link
              as="button"
              method="POST"
              href={route('logout')}
              role="menuitem"
              className="flex w-full items-center gap-2 rounded px-3 py-2 text-start text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:bg-gray-100 focus:text-gray-700 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:focus:bg-gray-800 dark:focus:text-gray-100"
            >
              <span>Cerrar sesión</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
