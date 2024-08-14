import { clsx } from 'clsx'

export default function InputLabel({ value, className = '', children, ...props }) {
  return (
    <label className={clsx(`text-tremor-default dark:text-tremor-content-subtle `, className)} {...props}>
      {value ? value : children}
    </label>
  )
}
