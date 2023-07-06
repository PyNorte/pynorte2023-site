import thumbnail1 from '../assets/patrocinadores/patrocinadores1.png'
import thumbnail2 from '../assets/patrocinadores/patrocinadores2.png'
import thumbnail3 from '../assets/patrocinadores/patrocinadores3.png'
import thumbnail4 from '../assets/patrocinadores/patrocinadores4.png'

export function Patrocinadores() {
  const ouro = [thumbnail1, thumbnail2, thumbnail3, thumbnail4]
  const prata = [thumbnail1, thumbnail2, thumbnail3, thumbnail4]
  const bronze = [thumbnail1, thumbnail2, thumbnail3, thumbnail4]

  return (
    <>
      <h2 className="mb-6 text-4xl font-bold">Patrocinadores</h2>
      <div className=" grid gap-16 text-lg leading-loose md:grid-cols-3">
        {/* Ouro */}
        <div className="flex flex-col items-center justify-start">
          <span className="text-md mb-4 rounded-full bg-custom-gold px-6 py-2 font-semibold text-black">
            OURO
          </span>
          {ouro.map((thumbnail, index) => (
            <img
              key={index}
              src={thumbnail}
              alt="Patrocinador Ouro"
              className="mb-4 h-32 w-32"
            />
          ))}
        </div>

        {/* Prata */}
        <div className="flex flex-col items-center justify-start">
          <span className="text-md mb-4 rounded-full bg-custom-silver px-6 py-2 font-semibold text-black">
            PRATA
          </span>
          {prata.map((thumbnail, index) => (
            <img
              key={index}
              src={thumbnail}
              alt="Patrocinador Prata"
              className="mb-4 h-32 w-32"
            />
          ))}
        </div>

        {/* Bronze */}
        <div className="flex flex-col items-center justify-start">
          <span className="text-md mb-4 rounded-full bg-custom-bronze px-6 py-2 font-semibold text-black">
            BRONZE
          </span>
          {bronze.map((thumbnail, index) => (
            <img
              key={index}
              src={thumbnail}
              alt="Patrocinador Bronze"
              className="mb-4 h-32 w-32"
            />
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <a
          className="text-md inline-block w-full rounded-full bg-green-600 px-28 py-4 font-bold text-zinc-800 transition-colors hover:bg-green-500 md:inline-block md:w-auto"
          href="#"
        >
          <span>Seja um Patrocinador</span>
        </a>
      </div>
    </>
  )
}
