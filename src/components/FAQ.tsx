import { useState } from 'react'
import { RiArrowRightSLine, RiArrowDownSLine } from 'react-icons/ri'

export function FAQ() {
  const faq = [
    {
      pergunta: 'O que é a Python Norte 2023?',
      resposta:
        'Python Norte 2023 é o maior evento sobre a linguagem de programação Python da região Norte. É suportado por diversos eventos locais e regionais, culminando em um encontro amigável e itinerante dentro da região Norte.',
    },
    {
      pergunta: 'O evento será presencial ou on-line?',
      resposta:
        'A Python Norte 2023 será realizado na modalidade presencial, sem a possibilidade de transmissão ao vivo da programação.',
    },
    {
      pergunta: 'Preciso estar vacinado contra febre amarela?',
      resposta:
        'Segundo a Secretaria Municipal de Saúde (Semsa Manaus), a Região Amazônica é endêmica para Febre Amarela, por isso, o turista deverá ser vacinado contra esta doença com pelo menos 10 dias de antecedência da viagem. Mais informações aqui GUIA DE SAÚDE PARA O TURISTA - SEMSA',
    },
    {
      pergunta: 'Preciso estar vacinado para participar do evento?',
      resposta:
        'De acordo com a OMS, a pandemia foi declarada finalizada no dia 05 de Maio de 2023. No entanto, reforçamos a importância de manter o cartão de vacinação atualizado pelo fato do evento ser presencial.',
    },
    {
      pergunta: 'Onde e quando será realizado o Python Norte 2023?',
      resposta:
        'O evento irá ocorrer presencialmente na cidade de Manaus, no Amazonas, nos dias 29 e 30 de Setembro de 2023, na UNINORTE UNIDADE DJALMA BATISTA.',
    },
    {
      pergunta: 'Qual a programação do evento?',
      resposta:
        'A programação do evento estará disponível nas redes sociais assim que possível. Acompanhe-nos.',
    },
    {
      pergunta: 'O evento é apenas em português?',
      resposta:
        'A priori sim, pois não houve nenhum tipo de demanda de outras linguagens até o momento.',
    },
    {
      pergunta: 'O que é Job Fair?',
      resposta:
        'Job Fair é uma feira de empregos, onde as empresas mostram como e onde elas atuam, além de conversar sobre vagas e o que esperam de quem submete.',
    },
    {
      pergunta: 'Como participar do Job Fair?',
      resposta:
        'Basta conferir o horário da empresa que você deseja participar e participar da apresentação na sala específica de Job Fair.',
    },
]


  const [openIndexes, setOpenIndexes] = useState<number[]>([0])

  const toggleIndex = (index: number) => {
    setOpenIndexes(
      openIndexes.includes(index)
        ? openIndexes.filter((i) => i !== index)
        : [...openIndexes, index],
    )
  }

  return (
    <div>
      <h2 className="mb-6 text-4xl font-bold">FAQ</h2>
      {faq.map((item, index) => (
        <div key={index}>
          <div
            className={`flex w-auto flex-grow items-center justify-between gap-4 p-8 ${
              index === 0 ? 'rounded-t-lg' : ''
            } ${
              index === faq.length - 1 && !openIndexes.includes(index)
                ? 'rounded-b-lg'
                : ''
            } cursor-pointer bg-custom-gray bg-opacity-95 backdrop-blur-2xl transition-all duration-500 ease-in-out`}
            onClick={() => toggleIndex(index)}
          >
            <span className="font-semibold leading-loose">{item.pergunta}</span>
            <span className="mx-4">
              {openIndexes.includes(index) ? (
                <RiArrowDownSLine size={24} />
              ) : (
                <RiArrowRightSLine size={24} />
              )}
            </span>
          </div>
          <div
            className={`overflow-hidden transition-all duration-200 ease-in-out ${
              openIndexes.includes(index) ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            <div
              className={`flex flex-grow items-center justify-center gap-32 bg-zinc-900/70 p-6 leading-loose backdrop-blur-sm ${
                index === faq.length - 1 ? 'rounded-b-lg' : ''
              }`}
            >
              {item.resposta}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
