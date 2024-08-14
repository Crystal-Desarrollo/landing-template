import { IconX } from '@tabler/icons-react'
import { Card } from '@tremor/react'
import { clsx } from 'clsx'
import PropTypes from 'prop-types'
import { useEffect, useRef } from 'react'

export const Sheet = ({ open, children, onClose, className }) => {
  const sheetRef = useRef(null)

  const handleClickOutside = event => {
    if (sheetRef.current && !sheetRef.current.contains(event.target)) {
      onClose()
    }
  }

  useEffect(() => {
    // Añade el evento al hacer clic
    document.addEventListener('mousedown', handleClickOutside)

    // Limpia el evento al desmontar el componente
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <Card
      ref={sheetRef}
      className={clsx(
        'h-screen z-50 fixed left-0 top-0 w-full max-w-full sm:max-w-sm md:max-w-sm lg:max-w-md translate-x-[-100%]  transition-transform duration-300 ease-in-out shadow-xl overflow-hidden',
        className,
        {
          'translate-x-0': open,
        },
      )}
    >
      <button onClick={onClose} className="fixed top-4 right-4">
        <IconX className="text-slate-500" />
      </button>
      {children}
    </Card>
  )
}

Sheet.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
}
