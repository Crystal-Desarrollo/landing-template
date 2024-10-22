import { Link } from '@inertiajs/react'
import { IconBrandFacebook, IconBrandInstagram, IconBrandTiktok } from '@tabler/icons-react'

export const Sidebar = ({ isSidebarOpen }) => {
  return (
    <aside
      className={`fixed top-[72px] left-0 w-full max-w-md h-[calc(100dvh-72px)] bg-white z-50 p-4 pb-8 transform transition-transform duration-300 block md:hidden ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col gap-4">
          <Link href="">Link 1</Link>
          <Link href="">Link 2</Link>
          <Link href="">Link 3</Link>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center gap-4">
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
          <a className="text-center hover:underline" href="https://www.crystal-desarrollo.com/">
            Desarrollado por Crystal Desarrollo
          </a>
        </div>
      </div>
    </aside>
  )
}
