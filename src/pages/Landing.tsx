import comeHereImg from "../assets/come-here.svg";

import { Countdown } from "../components/Countdown";

import { Programacao } from "../components/Programacao";
import { Patrocinadores } from "../components/Patrocinadores";
import { LocalEvento } from "../components/LocalEvento";
import { FAQ } from "../components/FAQ";
import { Contatos } from "../components/Contatos";
import { SubmissaoDeAtividades } from "../components/SubmissaoDeAtividades";

export function Landing() {
  return (
    <div>
      <div className="flex items-center justify-between gap-8">
        <div className="flex flex-col items-start gap-4">
          <img
            className="h-9"
            src={comeHereImg}
            alt="Logo descrevendo a palavra vem aí anunciando a proximidade do evento"
          />

          <h1 className="text-5xl font-bold">29 e 30 de Setembro de 2023</h1>

          <span className="text-2xl text-red-500">#PythonNorte2023</span>

          <p className="max-w-lg text-base leading-relaxed">
            A Python Norte 2023 nasceu com a tarefa de promover o máximo de
            diversidade e inclusão durante os 02 dias do evento em setembro.
            Inscreva-se, para participar desse momento sobre tecnologia e
            pessoas.
          </p>

          <a
            target="_blank"
            className="rounded-full bg-green-600 px-8 py-3 text-sm font-bold text-zinc-800 transition-colors hover:bg-green-500 md:px-12 md:py-4 md:text-base"
            href="https://www.sympla.com.br/python-norte-2023__2069918"
          >
            Adquira seu ingresso
          </a>
        </div>

        {/* Countdown */}
        <div className="mb-16 hidden lg:block">
          <Countdown />
        </div>
      </div>

      {/* Countdown Mobile*/}
      <div className="mt-20 block lg:hidden">
        <Countdown />
      </div>

      {/* Submissão de Atividades */}
      <div className="mt-32">
        <SubmissaoDeAtividades />
      </div>

      <div className="mt-32">
        <h2 className="text-4xl font-bold">Sobre a Python Norte</h2>
        <p className="mt-6 text-lg leading-loose">
          Nossa organização, durante todo o processo de criação do evento (desde
          a escolha da equipe organizadora, definição do local, esquema de
          palestras, convites de keynotes) se preocupou ao máximo com a entrega
          de uma PyN onde realmente fosse possível promover a conexão entre
          pessoas muito além da entrega de conhecimentos em tecnologia. Temos
          muito orgulho em dizer a todas as pessoas que a PyN23 é uma edição da
          comunidade, para a comunidade, pois, somos uma edição 100% pautada em
          pluralidade, diversidade, respeito e inclusão.
        </p>
      </div>

      {/* Programação - DESABILITADO POR ENQUANTO */}
      <div className="mt-32">
        <Programacao />
      </div>

      {/* Patrocinadores */}
      <div className="mt-32">
        <Patrocinadores />
      </div>

      {/* Local */}
      <div className="mt-32">
        <LocalEvento />
      </div>

      {/* FAQ */}
      <div className="mt-32" id="faq">
        <FAQ />
      </div>

      {/* Contatos */}
      <div className="my-32">
        <Contatos />
      </div>
    </div>
  );
}
