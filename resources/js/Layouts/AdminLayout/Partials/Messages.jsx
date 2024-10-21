import { usePage } from '@inertiajs/react'
import { Callout } from '@tremor/react'

export const Messages = () => {
  const { messages = null } = usePage().props

  if (!messages) {
    return null
  }

  return (
    <section className="mx-auto w-full max-w-7xl">
      {messages.error && (
        <Callout title="Error" color="red">
          {messages.error}
        </Callout>
      )}
      {messages.success && (
        <Callout title="Operación exitosa" color="green">
          {messages.success}
        </Callout>
      )}
    </section>
  )
}
