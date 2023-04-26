import logo from '../assets/logo-with-dark-year.svg'
import comeHere from '../assets/come-here.svg'

export function Maintenance() {
  return (
    <main className="min-h-screen bg-background bg-mobile-presentation sm:bg-desktop-presentation bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center">
      <section>
        <img className="md:w-48 xl:w-[272px]" src={comeHere} alt="vem aí" />
        <img
          className="mt-4 md:mt-8 md:w-[480px] xl:w-[678px]"
          src={logo}
          alt=""
        />
      </section>

      <div className="mt-4 text-white font-bold text-xl leading-none md:text-3xl md:mt-6 xl:mt-8 xl:text-[44px] flex bg-gradient-to-r from-[#282828B2] to-[#2C2C2CB2] rounded-full">
        <span className="p-4 xl:px-8 xl:py-5 bg-gradient-to-r from-[#282828B2] to-[#2C2C2CB2] rounded-full">
          MANAUS
        </span>

        <span className="pl-5 pr-4 py-4 xl:pr-8 xl:py-5">OUTUBRO DE 2023</span>
      </div>

      <p className="text-white text-xl font-medium mt-6 text-center mx-8 md:mt-8 xl:mt-12 xl:text-2xl">
        Quer vir com a gente fazer a Python Norte acontecer?
      </p>

      <a
        className="p-4 text-white text-xl font-bold mt-4 md:mt-5 xl:text-2xl xl:mt-7 bg-rose-600 hover:bg-rose-700 transition-all rounded-full"
        href="https://forms.gle/u3FoYoygUyZphb6K7"
        target="_blank"
        rel="noreferrer"
        title="Formulário de voluntários"
      >
        Seja um voluntário
      </a>
    </main>
  )
}
