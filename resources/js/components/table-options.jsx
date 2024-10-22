import { Menu, Transition } from '@headlessui/react'
import { IconDots } from '@tabler/icons-react'
import { clsx } from 'clsx'
import { Fragment } from 'react'

export const TableOptions = ({ children, as }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button
        as={as}
        className="inline-flex items-center text-gray-400 focus:outline-none dark:hover:text-slate-200 transition-colors duration-100"
      >
        <span className="sr-only">Opciones</span>
        <IconDots />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          anchor="bottom end"
          className="origin-top-right absolute bg-tremor-background dark:bg-slate-800 right-0 mt-2 w-56 rounded-md shadow-lg focus:outline-none"
        >
          <div className="py-1">{children}</div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export const TableOption = ({ children, disabled, onClick }) => {
  function handleClick(e) {
    e.stopPropagation()
    if (onClick) onClick(e)
  }

  return (
    <Menu.Item as="span">
      {({ active }) => (
        <button
          disabled={disabled}
          onClick={handleClick}
          className={clsx(
            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700 dark:text-dark-tremor-content-emphasis',
            'group flex items-center px-4 py-2 text-sm w-full text-left dark:hover:bg-slate-700 dark:hover:text-dark-tremor-content-strong disabled:text-gray-400 disabled:hover:bg-transparent',
          )}
        >
          {children}
        </button>
      )}
    </Menu.Item>
  )
}
