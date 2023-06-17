import {
  GrFacebookOption,
  GrInstagram,
  GrLinkedinOption,
  GrTwitter,
} from 'react-icons/gr'
import { MdOutlineInsertLink } from 'react-icons/md'

import brand from '../assets/brand-dark.svg'
import comeHere from '../assets/come-here-dark.svg'

export function Maintenance() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[url(../assets/bg-mobile-maintenance.png)] bg-cover bg-center bg-no-repeat sm:bg-[url(../assets/bg-desktop-maintenance.png)]">
      <section>
        <img
          className="w-[132px] md:w-48 xl:w-[252px]"
          src={comeHere}
          alt="vem aí"
        />
        <img
          className="mt-4 w-[300px] md:mt-6 md:w-[480px] xl:w-[590px]"
          src={brand}
          alt=""
        />
      </section>

      <div className="mt-4 flex rounded-full bg-gradient-to-r from-[#282828B2] to-[#2C2C2CB2] text-xl font-bold leading-none text-white md:mt-6 md:text-3xl xl:mt-8 xl:text-[36px]">
        <span className="rounded-full bg-gradient-to-r from-[#282828B2] to-[#2C2C2CB2] p-4 xl:px-8 xl:py-5">
          MANAUS
        </span>

        <span className="py-4 pl-5 pr-4 xl:py-5 xl:pr-8">SETEMBRO DE 2023</span>
      </div>

      <p className="mx-8 mt-6 text-center text-xl font-medium text-white xl:text-2xl">
        Quer vir com a gente fazer a Python Norte acontecer?
      </p>

      <section className="flex flex-col md:flex-row mt-10 gap-2 ">
        
        <a
          className="mt-4 rounded-full bg-rose-600 p-4 text-xl font-bold text-white transition-all hover:bg-rose-700 md:mt-5 xl:text-2xl"
          href="https://forms.gle/u3FoYoygUyZphb6K7"
          target="_blank"
          rel="noreferrer"
          title="Formulário de voluntários"
        >
          Seja um voluntário
        </a>

        <a
          className="mt-4 rounded-full bg-rose-600 p-4 text-xl font-bold text-white transition-all hover:bg-rose-700 md:mt-5 xl:text-2xl"
          href="https://drive.google.com/file/d/1c8QqrEY1hSABqX8F8ZeJtvWBxAzgZpI8/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          title="Seja um patrocinador"
        >
          Seja um patrocinador
        </a>
      </section>

      <section className="mt-10 flex gap-4 md:mt-8">
        <a
          className="rounded-full bg-[#343127] p-2 transition-all hover:opacity-80 md:p-3"
          href="https://www.instagram.com/pynorteoficial/"
          title="Instagram"
          target="_blank"
          rel="noreferrer"
        >
          <GrInstagram className="text-lg text-white   md:text-2xl" />
        </a>

        <a
          className="rounded-full bg-[#343127] p-2 transition-all hover:opacity-80 md:p-3"
          href="https://web.facebook.com/pynorte/"
          title="Facebook"
          target="_blank"
          rel="noreferrer"
        >
          <GrFacebookOption className="text-lg text-white md:text-2xl" />
        </a>

        <a
          className="rounded-full bg-[#343127] p-2 transition-all hover:opacity-80 md:p-3"
          href="https://twitter.com/pynorte"
          title="Twitter"
          target="_blank"
          rel="noreferrer"
        >
          <GrTwitter className="text-lg text-white md:text-2xl" />
        </a>

        <a
          className="rounded-full bg-[#343127] p-2 transition-all hover:opacity-80 md:p-3"
          href="https://www.linkedin.com/company/pynorte/"
          title="Linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <GrLinkedinOption className="text-lg text-white md:text-2xl" />
        </a>
        <a
          className="rounded-full bg-[#343127] p-2 transition-all hover:opacity-80 md:p-3"
          href="https://linktr.ee/pythonnorte"
          title="Linktr.ee"
          target="_blank"
          rel="noreferrer"
        >
          <MdOutlineInsertLink className="text-lg text-white md:text-2xl" />
        </a>
      </section>
    </main>
  )
}
