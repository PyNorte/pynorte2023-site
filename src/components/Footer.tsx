import { BsTwitter, BsInstagram, BsLinkedin, BsFacebook } from 'react-icons/bs'

import logo from '../assets/logo.svg'

export function Footer() {
  return (
    <footer className="flex w-full flex-col items-start justify-between gap-10 bg-zinc-800 px-6 py-10 sm:px-12 md:flex-row md:items-center md:px-24 lg:px-36">
      <div className="flex max-w-sm flex-col items-start gap-5">
        <img src={logo} alt="" className="max-h-16" />

        <p className="text-base text-gray-400">
          Python Brasil é uma conferência sem fins lucrativos dirigida por
          voluntários para promover a linguagem de programação Python de código
          aberto. É apoiado pela Associação Python Brasil (APyB).
        </p>

        <nav className="flex gap-5">
          <a
            href="https://twitter.com/pynorte"
            title="Acessar nossa página no Twitter"
            className="text-md text-white transition-all duration-150  hover:text-green-500"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter className="text-xl" />
          </a>

          <a
            href="https://www.instagram.com/pynorteoficial/"
            title="Acessar nossa página no Instagram"
            className="text-md text-white transition-all duration-150  hover:text-green-500"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram className="text-xl" />
          </a>

          <a
            href="https://www.linkedin.com/company/pynorte/"
            title="Acessar nossa página no LinkedIn"
            className="text-md text-white transition-all duration-150  hover:text-green-500"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="text-xl" />
          </a>

          <a
            href="https://www.facebook.com/pynorte"
            title="Acessar nossa página no Facebook"
            className="text-md text-white transition-all duration-150  hover:text-green-500"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook className="text-xl" />
          </a>
        </nav>
      </div>

      <div className="mb-10 flex flex-col items-start gap-5">
        <h2 className="text-xl font-bold text-white">Link Rápidos</h2>

        <nav className="flex flex-col gap-2">
          <a
            className="text-md text-gray-400 transition-all duration-150 hover:text-green-500"
            href="#about"
          >
            About us
          </a>
          <a
            className="text-md text-gray-400 transition-all duration-150 hover:text-green-500"
            href="#questions"
          >
            Questions
          </a>
          <a
            className="text-md text-gray-400 transition-all duration-150 hover:text-green-500"
            href="#questions"
          >
            Contact us
          </a>
          <a
            className="text-md text-gray-400 transition-all duration-150 hover:text-green-500"
            href="#questions"
          >
            Legal
          </a>
        </nav>
      </div>
    </footer>
  )
}
