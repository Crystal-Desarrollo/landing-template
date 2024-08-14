import { ProfileButton } from '@/Layouts/Partials/ProfileButton.jsx'
import { Sidebar } from '@/Layouts/Partials/Sidebar.jsx'
import { useDarkMode } from '@/Layouts/Partials/useDarkMode.jsx'
import { Head } from '@inertiajs/react'
import { IconMoon, IconSun } from '@tabler/icons-react'
import { Button } from '@tremor/react'
import clsx from 'clsx'
import { useState } from 'react'

export function AuthenticatedLayout({ children, title }) {
  const { darkMode, setDarkMode } = useDarkMode()
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  return (
    <div>
      <Head title={title} />
      <div
        id="page-container"
        className={clsx(
          'mx-auto flex min-h-screen w-full min-w-[320px] flex-col bg-gray-100 transition-all duration-300 ease-out dark:bg-gray-800 dark:text-gray-200 lg:ps-64',
        )}
      >
        <Sidebar mobileOpen={mobileSidebarOpen} setMobileOpen={setMobileSidebarOpen} />
        <header
          className={clsx(
            'fixed end-0 start-0 top-0 z-30 flex h-16 flex-none items-center bg-white shadow-sm transition-all duration-300 ease-out dark:bg-gray-900 lg:ps-64',
            [],
          )}
        >
          <div className="mx-auto flex w-full justify-between px-4">
            <div className="flex items-center">
              <div className="me-2 lg:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded border border-gray-300 bg-white px-3 py-2 font-semibold leading-6 text-gray-800 shadow-sm hover:border-gray-300 hover:bg-gray-100 hover:text-gray-800 hover:shadow focus:outline-none focus:ring focus:ring-gray-500/25 active:border-white active:bg-white active:shadow-none dark:border-gray-700/75 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-gray-700 dark:hover:bg-gray-800 dark:hover:text-gray-200 dark:focus:ring-gray-700 dark:active:border-gray-900 dark:active:bg-gray-900"
                  onClick={() => setMobileSidebarOpen(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="hi-solid hi-menu-alt-1 inline-block h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button color="slate" variant="light" onClick={() => setDarkMode(!darkMode)}>
                <span className="grid place-items-center">{darkMode ? <IconSun /> : <IconMoon />}</span>
              </Button>
              <ProfileButton />
            </div>
          </div>
        </header>
        <main id="page-content" className="flex flex-col pt-16">
          <div className="p-10">
            {/*
                        <div className="flex flex-row items-center mb-5 gap-4">
                        <Button
                        color="dark:white"
                        variant="light"
                        onClick={() => history.back()}
                        className="transition duration-200 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 p-1 rounded-full flex items-center justify-center"
                        >
                        <IconChevronLeft />
                        </Button>
                        <Title className="mt-1">{title}</Title>

                        </div> */}

            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
