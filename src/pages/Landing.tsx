import comeHereImg from '../assets/come-here.svg'

export function Landing() {
  return (
    <div className="p-8 md:px-28 md:py-16 lg:px-40">
      <div className="flex max-w-xl flex-col items-start gap-4">
        <img
          className="h-9"
          src={comeHereImg}
          alt="Logo descrevendo a palavra vem aí anunciando a proximidade do evento"
        />

        <h1 className="text-5xl font-bold">15 e 16 de Outubro</h1>

        <span className="text-2xl text-red-500">#PythonNorte2023</span>

        <p className="max-w-lg text-base leading-relaxed">
          A PyNorte 2023 nasceu com a tarefa de promover o máximo de diversidade
          e inclusão durante os 02 dias/Outubro do evento. Inscreva-se, para
          participar desse momento sobre tecnologia e pessoas.
        </p>

        <a
          className="rounded-full bg-green-600 px-8 py-3 text-sm font-bold text-zinc-800 transition-colors hover:bg-green-500 md:px-12 md:py-4 md:text-base"
          href="#"
        >
          Inscreva-se
        </a>
      </div>

      <div className="mt-32">
        <h2 className="text-4xl font-bold">Sobre a PyNorte</h2>
        <p className="mt-6 text-lg leading-loose">
          A PyNorte 2023 nasceu com a tarefa de promover o máximo de diversidade
          e inclusão durante os três dias do evento. Nossa organização, durante
          todo o processo de criação do evento (desde a escolha da equipe
          organizadora, definição do local, esquema de palestras, convites de
          keynotes) se preocupou ao máximo com a entrega de uma PyN onde
          realmente fosse possível promover a conexão entre pessoas muito além
          da entrega de conhecimentos em tecnologia. Temos muito orgulho em
          dizer a todas as pessoas que a PyNE22 é uma edição da comunidade, para
          a comunidade, pois, somos uma edição 100% pautada em pluralidade,
          diversidade, respeito e inclusão.
        </p>
      </div>
    </div>
  )
}
