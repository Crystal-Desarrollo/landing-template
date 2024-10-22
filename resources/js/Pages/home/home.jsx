import { PublicLayout } from '@/layouts/public-layout/public-layout.jsx'
import { Head } from '@inertiajs/react'

const Home = () => {
  return (
    <PublicLayout>
      <Head title="Landing Page" />

      <h1>Hello World</h1>
    </PublicLayout>
  )
}

export default Home
