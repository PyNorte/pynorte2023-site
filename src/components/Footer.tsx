import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'

import logo from '../assets/logo.svg'
import { AnchorCustom } from './AnchorCustom'

export function Footer() {
  return (
    <footer className="bg-footer_background w-full px-6 py-10 flex flex-col justify-between items-start gap-10 sm:px-12 md:px-24 lg:px-36 md:flex-row md:items-center">
      <div className="max-w-sm flex flex-col items-start gap-5">
        <img src={logo} alt="" className="max-h-16" />

        <p className="text-gray-400 text-base">
          Python Brasil é uma conferência sem fins lucrativos dirigida por
          voluntários para promover a linguagem de programação Python de código
          aberto. É apoiado pela Associação Python Brasil (APyB).
        </p>

        <nav className="flex gap-5">
          <AnchorCustom
            href="#"
            title="Acessar nossa página no Twitter"
            variant="white"
          >
            <BsTwitter className="text-xl" />
          </AnchorCustom>

          <AnchorCustom
            href="#"
            title="Acessar nossa página no Instagram"
            variant="white"
          >
            <BsInstagram className="text-xl" />
          </AnchorCustom>

          <AnchorCustom
            href="#"
            title="Acessar nossa página no LinkedIn"
            variant="white"
          >
            <BsLinkedin className="text-xl" />
          </AnchorCustom>
        </nav>
      </div>

      <div className="flex flex-col items-start gap-5 mb-10">
        <h2 className="text-white text-xl font-bold">Link Rápidos</h2>

        <nav className="flex flex-col gap-2">
          <AnchorCustom variant="gray" href="#about">
            About us
          </AnchorCustom>
          <AnchorCustom variant="gray" href="#questions">
            Questions
          </AnchorCustom>
          <AnchorCustom variant="gray" href="#contact-us">
            Contact us
          </AnchorCustom>
          <AnchorCustom variant="gray" href="#legal">
            Legal
          </AnchorCustom>
        </nav>
      </div>
    </footer>
  )
}
