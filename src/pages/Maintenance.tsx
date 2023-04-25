import logo from '../assets/logo-with-dark-year.svg'
import comeHere from '../assets/come-here.svg'

export function Maintenance() {
  return (
    <main className="min-h-screen bg-background bg-desktop-presentation bg-no-repeat bg-cover bg-center flex justify-center items-center py-6 px-11">
      <div className="flex flex-col gap-6 items-center">
        <img
          className="w-28 sm:w-44 md:w-52 self-start"
          src={comeHere}
          alt="Vem aí"
        />
        <img className="w-full md:w-[680px]" src={logo} alt="" />

        <div className="text-white mt-8 font-bold sm:text-lg md:text-2xl lg:text-4xl w-full max-w-[660px] flex items-center justify-between bg-gradient-to-r from-[#2C2C2CB2] to-[#2C2C2CB2] rounded-full">
          <span className="bg-gradient-to-r from-[#282828B2] to-[#2C2C2CB2] px-8 py-5 rounded-full text-center">
            MANAUS
          </span>
          <span className="flex-1 text-center px-8">OUTUBRO DE 2023</span>
        </div>

        <a
          className="text-white text-sm sm:text-base underline hover:text-zinc-200 transition-colors text-center leading-relaxed"
          href="https://forms.gle/u3FoYoygUyZphb6K7"
          target="_blank"
          rel="noreferrer"
        >
          Quer ajudar na construção do evento? Seja um voluntário
        </a>
      </div>
    </main>
  )
}
