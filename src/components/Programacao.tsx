// Troque o nome pelo nome da imagem que você quer usar
import thumbnail1 from '../assets/programacao/1.png'
import thumbnail2 from '../assets/programacao/2.png'
import thumbnail3 from '../assets/programacao/3.png'
import thumbnail4 from '../assets/programacao/4.png'

export function Programacao() {
  // Altere as informações abaixo
  const infos = [
    {
      alt: 'Keynotes | Palestras',
      text: 'Keynotes | Palestras',
    },
    {
      alt: 'Palestras Relâmpago',
      text: 'Palestras Relâmpago',
    },
    {
      alt: 'JobFair',
      text: 'JobFair',
    },
    {
      alt: 'Tutoriais',
      text: 'Tutoriais',
    },
  ]

  const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4]

  return (
    <>
      <h2 className="mb-6 text-4xl font-bold">Programação</h2>
      <div className="grid gap-16 text-lg leading-loose md:grid-cols-2">
        {infos.map((info, index) => (
          <div key={index} className="flex items-center gap-8 space-x-4">
            <img src={thumbnails[index]} alt={info.alt} className="h-32 w-32" />
            <p className="max-w-xs">{info.text}</p>
          </div>
        ))}
      </div>

      {/* <div className="mt-12 text-center">
        <a
          className="text-md inline-block w-full rounded-full bg-green-600 px-28 py-4 font-bold text-zinc-800 transition-colors hover:bg-green-500 md:inline-block md:w-auto"
          href="#"
        >
          <span className="">Cronograma</span>
        </a>
      </div> */}
    </>
  )
}
