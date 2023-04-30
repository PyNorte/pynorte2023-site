import { BsTwitter, BsInstagram, BsLinkedin, BsFacebook } from 'react-icons/bs'

import logo from '../assets/logo.svg'

export function Footer() {
  return (
    <footer className="bg-zinc-800 w-full px-6 py-10 flex flex-col justify-between items-start gap-10 sm:px-12 md:px-24 lg:px-36 md:flex-row md:items-center">
      <div className="max-w-sm flex flex-col items-start gap-5">
        <img src={logo} alt="" className="max-h-16" />

        <p className="text-gray-400 text-base">
          Python Brasil é uma conferência sem fins lucrativos dirigida por
          voluntários para promover a linguagem de programação Python de código
          aberto. É apoiado pela Associação Python Brasil (APyB).
        </p>

        <nav className="flex gap-5">
          <a
            href="https://twitter.com/pynorte"
            title="Acessar nossa página no Twitter"
            className="text-md transition-all duration-150 text-white  hover:text-green-500"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter className="text-xl" />
          </a>

          <a
            href="https://www.instagram.com/pynorteoficial/"
            title="Acessar nossa página no Instagram"
            className="text-md transition-all duration-150 text-white  hover:text-green-500"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram className="text-xl" />
          </a>

          <a
            href="https://www.linkedin.com/company/pynorte/"
            title="Acessar nossa página no LinkedIn"
            className="text-md transition-all duration-150 text-white  hover:text-green-500"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="text-xl" />
          </a>

          <a
            href="https://www.facebook.com/pynorte"
            title="Acessar nossa página no Facebook"
            className="text-md transition-all duration-150 text-white  hover:text-green-500"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook className="text-xl" />
          </a>
        </nav>
      </div>

      <div className="flex flex-col items-start gap-5 mb-10">
        <h2 className="text-white text-xl font-bold">Link Rápidos</h2>

        <nav className="flex flex-col gap-2">
          <a
            className="text-md transition-all duration-150 text-gray-400 hover:text-green-500"
            href="#about"
          >
            About us
          </a>
          <a
            className="text-md transition-all duration-150 text-gray-400 hover:text-green-500"
            href="#questions"
          >
            Questions
          </a>
          <a
            className="text-md transition-all duration-150 text-gray-400 hover:text-green-500"
            href="#questions"
          >
            Contact us
          </a>
          <a
            className="text-md transition-all duration-150 text-gray-400 hover:text-green-500"
            href="#questions"
          >
            Legal
          </a>
        </nav>
      </div>
    </footer>
  )
}
