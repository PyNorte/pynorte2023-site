import {
  GrFacebookOption,
  GrInstagram,
  GrLinkedinOption,
  GrTwitter,
} from 'react-icons/gr'
import { MdOutlineInsertLink } from 'react-icons/md'

import logo from '../assets/logo-with-dark-year.svg'
import comeHere from '../assets/come-here.svg'

export function Maintenance() {
  return (
    <main className="min-h-screen bg-background bg-mobile-presentation sm:bg-desktop-presentation bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center">
      <section>
        <img className="md:w-48 xl:w-[252px]" src={comeHere} alt="vem aí" />
        <img
          className="mt-4 md:mt-8 md:w-[480px] xl:w-[590px]"
          src={logo}
          alt=""
        />
      </section>

      <div className="mt-4 text-white font-bold text-xl leading-none md:text-3xl md:mt-6 xl:mt-8 xl:text-[36px] flex bg-gradient-to-r from-[#282828B2] to-[#2C2C2CB2] rounded-full">
        <span className="p-4 xl:px-8 xl:py-5 bg-gradient-to-r from-[#282828B2] to-[#2C2C2CB2] rounded-full">
          MANAUS
        </span>

        <span className="pl-5 pr-4 py-4 xl:pr-8 xl:py-5">SETEMBRO DE 2023</span>
      </div>

      <p className="text-white text-xl font-medium mt-6 text-center mx-8 xl:text-2xl">
        Quer vir com a gente fazer a Python Norte acontecer?
      </p>

      <a
        className="p-4 text-white text-xl font-bold mt-4 md:mt-5 xl:text-2xl bg-rose-600 hover:bg-rose-700 transition-all rounded-full"
        href="https://forms.gle/u3FoYoygUyZphb6K7"
        target="_blank"
        rel="noreferrer"
        title="Formulário de voluntários"
      >
        Seja um voluntário
      </a>

      <section className="mt-10 md:mt-8 flex gap-4">
        <a
          className="p-2 md:p-3 bg-[#343127] rounded-full hover:opacity-80 transition-all"
          href="https://www.instagram.com/pynorteoficial/"
          title="Instagram"
          target="_blank"
          rel="noreferrer"
        >
          <GrInstagram className="text-white text-lg   md:text-2xl" />
        </a>

        <a
          className="p-2 md:p-3 bg-[#343127] rounded-full hover:opacity-80 transition-all"
          href="https://web.facebook.com/pynorte/"
          title="Facebook"
          target="_blank"
          rel="noreferrer"
        >
          <GrFacebookOption className="text-white text-lg md:text-2xl" />
        </a>

        <a
          className="p-2 md:p-3 bg-[#343127] rounded-full hover:opacity-80 transition-all"
          href="https://twitter.com/pynorte"
          title="Twitter"
          target="_blank"
          rel="noreferrer"
        >
          <GrTwitter className="text-white text-lg md:text-2xl" />
        </a>

        <a
          className="p-2 md:p-3 bg-[#343127] rounded-full hover:opacity-80 transition-all"
          href="https://www.linkedin.com/company/pynorte/"
          title="Linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <GrLinkedinOption className="text-white text-lg md:text-2xl" />
        </a>
        <a
          className="p-2 md:p-3 bg-[#343127] rounded-full hover:opacity-80 transition-all"
          href="https://linktr.ee/pythonnorte"
          title="Linktr.ee"
          target="_blank"
          rel="noreferrer"
        >
          <MdOutlineInsertLink className="text-white text-lg md:text-2xl" />
        </a>
      </section>
    </main>
  )
}
