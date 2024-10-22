import { format } from 'date-fns'

export function getMonthName(monthNumber) {
  const date = new Date()
  date.setMonth(monthNumber)
  date.setMonth(date.getMonth() - 1)

  const monthName = date.toLocaleString('es-ES', { month: 'long' })
  const firstLetter = monthName.charAt(0).toUpperCase()

  return monthName.replace(monthName.charAt(0), firstLetter)
}

export function formatDate(date, stringFormat) {
  if (!date) {
    return null
  }

  return format(date, stringFormat)
}
