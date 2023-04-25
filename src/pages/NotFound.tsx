import logo from '../assets/logo.svg'

export function NotFound() {
  return (
    <main className="min-h-screen bg-background bg-desktop-dark bg-no-repeat bg-cover flex flex-col justify-center items-center py-6 px-11">
      <img className="w-full md:w-[20rem]" src={logo} alt="" />

      <span className="text-white text-center text-sm md:text-lg mt-5">
        Erro 404 - Essa página não foi encontrada
      </span>

      <a
        href="/"
        className="text-green-700 transition-all duration-150 hover:text-green-900 text-center text-sm md:text-lg mt-10"
      >
        Volte para o início 🐍
      </a>
    </main>
  )
}
