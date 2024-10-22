import { Sidebar } from '@/layouts/public-layout/partials/sidebar.jsx'
import logo from '@assets/logo.svg'
import { Link } from '@inertiajs/react'
import { IconBrandFacebook, IconBrandInstagram, IconBrandTiktok, IconMenu2 } from '@tabler/icons-react'

export const Header = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <header className="shadow-lg w-full flex items-center justify-center p-4 sticky z-50 top-0 bg-white">
      <div className="max-w-screen-xl w-full flex items-center justify-between">
        <Link href={route('home')}>
          <img className="h-10" src={logo} alt="Logo" />
        </Link>
        <div className="items-center justify-center gap-4 hidden md:flex">
          <Link href="" className="hover:font-semibold">
            Link 1
          </Link>
          <Link href="" className="hover:font-semibold">
            Link 2
          </Link>
          <Link href="" className="hover:font-semibold">
            Link 3
          </Link>

          <a href="" target="_blank">
            <IconBrandInstagram />
          </a>
          <a href="" target="_blank">
            <IconBrandFacebook />
          </a>
          <a href="" target="_blank">
            <IconBrandTiktok />
          </a>
        </div>
        <IconMenu2 className="block md:hidden cursor-pointer" onClick={toggleSidebar} />
      </div>

      <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
    </header>
  )
}
