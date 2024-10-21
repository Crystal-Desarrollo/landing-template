import { CrystalFooter } from '@/Layouts/PublicLayout/Partials/CrystalFooter.jsx'
import clsx from 'clsx'

export const PublicLayout = ({ children, className }) => {
  return (
    <main
      className={clsx(
        'flex gap-32 w-full h-[100dvh] flex-col items-center pt-10 overflow-clip bg-[#f5f5f5] dark:bg-[#1f2937]',
        className,
      )}
    >
      {children}
      <CrystalFooter />
    </main>
  )
}
