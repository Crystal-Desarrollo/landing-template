import { CrystalFooter } from '@/Layouts/PublicLayout/Partials/crystal-footer.jsx'
import { Header } from '@/Layouts/PublicLayout/Partials/header.jsx'
import clsx from 'clsx'
import { useState } from 'react'

export const PublicLayout = ({ children, className }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <main
      className={clsx(
        'flex gap-32 w-full h-[100dvh] flex-col items-center overflow-clip bg-[#f5f5f5] dark:bg-[#1f2937]',
        className,
      )}
    >
      <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      {children}
      <CrystalFooter />
    </main>
  )
}
