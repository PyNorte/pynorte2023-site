//Troque o nome pelo nome da imagem que você quer usar
import thumbnail1 from "../assets/programacao/thumbnail-programacao1.png";
import thumbnail2 from "../assets/programacao/thumbnail-programacao2.png";
import thumbnail3 from "../assets/programacao/thumbnail-programacao3.png";
import thumbnail4 from "../assets/programacao/thumbnail-programacao4.png";

export function Programacao() {
  //Altere as informações abaixo
  const infos = [
    {
      alt: "Descrição da imagem 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.",
    },
    {
      alt: "Descrição da imagem 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.",
    },
    {
      alt: "Descrição da imagem 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.",
    },
    {
      alt: "Descrição da imagem 4",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.",
    },
  ];

  const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];

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

      <div className="mt-12 text-center">
        <a
          className="text-md inline-block w-full rounded-full bg-green-600 px-28 py-4 font-bold text-zinc-800 transition-colors hover:bg-green-500 md:inline-block md:w-auto"
          href="#"
        >
          <span className="">Cronograma</span>
        </a>
      </div>
    </>
  );
}
