import { Transition } from '@headlessui/react'
import { IconX } from '@tabler/icons-react'
import { Card } from '@tremor/react'
import { clsx } from 'clsx'
import PropTypes from 'prop-types'
import { Fragment, useEffect, useRef } from 'react'

export const Sheet = ({ open, children, onClose, className }) => {
  const sheetRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = event => {
      if (sheetRef.current && !sheetRef.current.contains(event.target)) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onClose])

  return (
    <Transition show={open} as={Fragment} appear={true}>
      <Transition.Child
        enter="ease-out duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="ease-in duration-200"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <Card
          ref={sheetRef}
          className={clsx(
            'shadow-xl fixed left-0 top-0 z-50 h-screen w-full max-w-full sm:max-w-xs md:max-w-sm lg:max-w-md',
            className,
          )}
        >
          <button onClick={onClose} className="fixed right-4 top-4">
            <IconX className="text-slate-500" />
          </button>
          {children}
        </Card>
      </Transition.Child>
    </Transition>
  )
}

Sheet.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
}
