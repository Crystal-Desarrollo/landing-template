export const WhatsappButton = ({ size = 44 }) => (
  <a
    href="https://api.whatsapp.com/send?phone=543884804401&text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20sus%20servicios%20y%20c%C3%B3mo%20podr%C3%ADan%20ayudarme.%20%C2%A1Gracias!"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#25D366] fixed bottom-4 right-4 rounded-full h-14 w-14 grid place-items-center text-white cursor-pointer hover:bg-[#25D366] transition-colors shadow-lg z-50"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="h-10 w-10"
    >
      <title>WhatsApp icon</title>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
      <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
    </svg>
  </a>
)
