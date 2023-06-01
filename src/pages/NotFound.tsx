import { Link } from 'react-router-dom'

import logo from '../assets/logo.svg'
import notFoundImg from '../assets/not-found.png'

export function NotFound() {
  return (
    <div className="flex min-h-screen flex-col p-8">
      <header>
        <Link className="block w-fit" to="/">
          <img className="h-14" src={logo} alt="" />
        </Link>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center gap-12">
        <p className="text-center text-lg font-bold md:text-4xl">
          Ops! Página não encontrada.
        </p>

        <img
          className="w-96 md:w-[426px] lg:w-[680px]"
          src={notFoundImg}
          alt="Recurso não encontrado"
        />

        <Link
          className="rounded-full bg-green-600 px-6 py-3 text-sm font-bold text-zinc-800 transition-colors hover:bg-green-500 md:px-8 md:py-4 md:text-base"
          to="/"
        >
          Voltar para o início
        </Link>
      </main>
    </div>
  )
}
