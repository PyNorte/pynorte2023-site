import { Link } from 'react-router-dom'

import logo from '../assets/logo.svg'

export function NotFound() {
  return (
    <main className="min-h-screen bg-background bg-desktop-dark bg-no-repeat bg-cover flex flex-col justify-center items-center py-6 px-11">
      <img className="w-full md:w-80" src={logo} alt="" />

      <span className="text-white text-center text-sm md:text-lg mt-5">
        O conteúdo que você tentou acessar não foi encontrado
      </span>

      <Link
        className="text-md transition-all duration-150 text-white  hover:text-green-500 mt-6"
        to="/"
      >
        Voltar para o início 🐍
      </Link>
    </main>
  )
}
