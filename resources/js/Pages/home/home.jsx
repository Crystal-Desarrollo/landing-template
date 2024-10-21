import { PublicLayout } from '@/Layouts/PublicLayout/PublicLayout.jsx'
import { Head } from '@inertiajs/react'
import { useEffect, useState } from 'react'

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isSidebarOpen])

  return (
    <PublicLayout>
      <Head title="Landing Page" />

      <h1>Hello World</h1>
    </PublicLayout>
  )
}

export default Home
