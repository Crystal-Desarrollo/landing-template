import { Footer } from '@/Components/Footer/Footer'
import { Header } from '@/Components/Header/Header'
import clsx from 'clsx'

export const GuestLayout = ({ children, className }) => {
  return (
    <>
      <Header />
      <main
        className={clsx(
          'flex gap-32 w-full grow min-h-[calc(100dvh-208px)] flex-col items-center p-4 pt-10 pb-20 overflow-clip dark:bg-[#1f2937]',
          className,
        )}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}
