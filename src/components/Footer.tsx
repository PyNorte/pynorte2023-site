import { GrTwitter, GrInstagram } from "react-icons/gr";

import brandImg from "../assets/brand.svg";

export function Footer() {
  return (
    <footer className="flex flex-col items-start justify-between bg-zinc-900 px-8 py-12 md:flex-row md:px-28 lg:px-40">
      <div className="space-y-8 md:mr-16">
        <img className="h-10 md:h-16" src={brandImg} alt="Python Norte 2023" />

        <p className="max-w-md text-sm text-zinc-600 md:text-base">
          Python Norte é uma conferência sem fins lucrativos dirigida por
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

      {/* Links Rápidos */}
      <div className="mt-8 md:mt-6">
        <h3 className="text-md mb-4 font-normal text-white">Links Rápidos</h3>
        <ul className="space-y-2">
          <li>
            <a
              target="_blank"
              className="max-w-md text-sm text-zinc-600 hover:text-zinc-400 md:text-base"
              href="https://www.sympla.com.br/python-norte-2023__2069918"
            >
              Inscreva-se
            </a>
          </li>
          <li>
            <a
              target="_blank"
              className="max-w-md text-sm text-zinc-600 hover:text-zinc-400 md:text-base"
              href="https://drive.google.com/file/d/1VYom1rmasaF7T0cbKnCZ0lBmBfAdx4rt/view?usp=sharing"
            >
              Seja um Patrocinador
            </a>
          </li>
          <li>
            <a
              target="_blank"
              className="max-w-md text-sm text-zinc-600 hover:text-zinc-400 md:text-base"
              href="https://goo.gl/maps/QauwFqoaa1qmuNKg8"
            >
              Local do Evento
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
