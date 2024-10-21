import logo from '@assets/crystal-logo.png'

export const CrystalFooter = () => {
  return (
    <section className="px-4 py-[24px] text-white flex flex-col items-center gap-8 bg-black w-full mt-auto">
      <div className="max-w-screen-xl w-full mx-auto flex flex-col-reverse md:flex-row justify-between border-t border-white/20 py-8">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <p className="text-xl">
            <img src={logo} alt="Logo de CrystalFooter Desarrollo" className="h-[32px] inline-block" />
            Crystal Desarrollo
          </p>
          <p className="text-sm ml-3 text-font-light">Innovando desde Jujuy, Argentina &#x1f1e6;&#x1f1f7; &#x2764;</p>
          <p className="text-sm text-font-light ml-3">Copyright &copy; {new Date().getFullYear()}</p>
        </div>
        <div className="flex justify-center space-x-6 md:order-2 mb-8">
          <a
            href="https://twitter.com/CrystalDevelop_"
            target="_blank"
            className="text-white hover:text-white/50"
            rel="noreferrer"
          >
            <span className="sr-only">X</span>
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/crystal-desarrollo/"
            target="_blank"
            className="text-white hover:text-white/50"
            rel="noreferrer"
          >
            <span className="sr-only">Linkedin</span>
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/crystaldesarrollo"
            target="_blank"
            className="text-white hover:text-white/50"
            rel="noreferrer"
          >
            <span className="sr-only">Instagram</span>
            <svg className="h-6 w-6" viewBox="0 0 50 50" fill="currentColor" aria-hidden="true">
              <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
            </svg>
          </a>
          <a href="mailto:contacto@crystal-desarrollo.com" className="text-white hover:text-white/50">
            <span className="sr-only">Email</span>
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path d="M15.61 12c0 1.99-1.62 3.61-3.61 3.61-1.99 0-3.61-1.62-3.61-3.61 0-1.99 1.62-3.61 3.61-3.61 1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024-1.617-1.879-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93 6.076 6.076 0 0 0 5.93 12 6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792 3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821.719-.547 1.256-1.336 1.553-2.285.047-.154.086-.318.086-.486C24 5.383 18.617 0 12 0z"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
