import logo from '../assets/logo.svg'
import { AnchorCustom } from '../components/AnchorCustom'

export function NotFound() {
  return (
    <main className="min-h-screen bg-background bg-desktop-dark bg-no-repeat bg-cover flex flex-col justify-center items-center py-6 px-11">
      <img className="w-full md:w-[20rem]" src={logo} alt="" />

      <span className="text-white text-center text-sm md:text-lg mt-5">
        Erro 404 - Essa página não foi encontrada
      </span>

      <AnchorCustom variant="green" className="mt-10" href="/">
        Volte para o início 🐍
      </AnchorCustom>
    </main>
  )
}
