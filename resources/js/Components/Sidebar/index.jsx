import { Link } from '@inertiajs/react'
import { IconBrandFacebook, IconBrandInstagram, IconBrandTiktok, IconFileDescription } from '@tabler/icons-react'
import { Button } from '@tremor/react'
import { ButtonBuy } from '../Button/Buy'

export const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const handleOptionClick = () => {
    setIsSidebarOpen()
  }

  return (
    <aside
      className={`fixed top-[72px] left-0 w-full h-[calc(100dvh-72px)] bg-white z-50 p-4 pb-8 transform transition-transform duration-300 block md:hidden ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col gap-4">
          <Link href="/#negocios" className="hover:font-semibold">
            Ronda de negocios
          </Link>
          <Link href="/#galeria" className="hover:font-semibold" onClick={handleOptionClick}>
            Galeria de fotos
          </Link>
          <Link href="/#ubicacion" className="hover:font-semibold" onClick={handleOptionClick}>
            ¿Dónde encontrarnos?
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <ButtonBuy className="w-full" />
          <div className="flex items-center justify-center gap-4">
            <a href="https://www.instagram.com/expojuy?igsh=bW1ybGo2OXUyY2lv" target="_blank">
              <IconBrandInstagram onClick={handleOptionClick} />
            </a>
            <a href="https://www.facebook.com/share/TQ1Lf37GyPGjK1SU/?mibextid=JRoKGi" target="_blank">
              <IconBrandFacebook onClick={handleOptionClick} />
            </a>
            <a href="https://www.tiktok.com/@expojuy?_t=8pxnedv4e9e&_r=1" target="_blank">
              <IconBrandTiktok onClick={handleOptionClick} />
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
