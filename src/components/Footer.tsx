import { GrTwitter, GrInstagram } from 'react-icons/gr'

import brandImg from '../assets/brand.svg'

export function Footer() {
  return (
    <footer className="flex items-center justify-between bg-zinc-900 px-8 py-12 md:px-28 lg:px-40">
      <div className="space-y-8">
        <img className="h-10 md:h-16" src={brandImg} alt="Python Norte 2023" />

        <p className="max-w-md text-sm text-zinc-600 md:text-base">
          Python Brasil é uma conferência sem fins lucrativos dirigida por
          voluntários para promover a linguagem de programação Python de código
          aberto. É apoiado pela Associação Python Brasil (APyB).
        </p>

        <section className="flex items-center gap-4">
          <a
            className="text-2xl"
            href="https://twitter.com/pynorte"
            target="_blank"
            rel="noreferrer"
          >
            <GrTwitter />
          </a>

          <a
            className="text-2xl"
            href="https://www.instagram.com/pynorteoficial/"
            target="_blank"
            rel="noreferrer"
          >
            <GrInstagram />
          </a>
        </section>
      </div>

      <div></div>
    </footer>
  )
}
