import { Link } from 'react-router-dom'

import logo from '../assets/logo.svg'

export function NotFound() {
  return (
    <main className="bg-background bg-desktop-dark flex min-h-screen flex-col items-center justify-center bg-cover bg-no-repeat px-11 py-6">
      <img className="w-full md:w-80" src={logo} alt="" />

      <span className="mt-5 text-center text-sm text-white md:text-lg">
        O conteúdo que você tentou acessar não foi encontrado
      </span>

      <Link
        className="text-md mt-6 text-white transition-all  duration-150 hover:text-green-500"
        to="/"
      >
        Voltar para o início 🐍
      </Link>
    </main>
  )
}
