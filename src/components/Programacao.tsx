// Troque o nome pelo nome da imagem que você quer usar
import thumbnail1 from "../assets/programacao/1.png";
import thumbnail2 from "../assets/programacao/2.png";
import thumbnail3 from "../assets/programacao/3.png";
import thumbnail4 from "../assets/programacao/4.png";

export function Programacao() {
  // Altere as informações abaixo
  const infos = [
    {
      alt: "Palestras",
      title: "Palestras: ",
      text: "A maior parte das palestras ministradas são escolhidas pelas pessoas que compõem a comunidade. Essas abordam temáticas nas mais diversificadas áreas de conhecimento com uso da linguagem Python.",
    },
    {
      alt: "Keynotes",
      title: "Keynotes: ",
      text: "São pessoas de destaque convidadas para se apresentarem e exporem suas ideias no evento, assim como tendências para o futuro da linguagem Python com o intuito de alavancar o crescimento tecnológico regional.",
    },
    {
      alt: "Palestras Relâmpago",
      title: "Palestras Relâmpago: ",
      text: "Fugindo do modelo tradicional, ,objetivas e espontâneas dos participantes. Uma ótima oportunidade para incentivar o diálogo e compartilhar as experiências entre pessoas da comunidade.",
    },
    {
      alt: "Tutoriais",
      title: "Tutoriais: ",
      text: "São minicursos em diversos formatos que abordam o Python e tecnologias relacionadas, nos quais, quem participa pode desenvolver novas habilidades, colocando em prática o aprendizado adquirido.",
    },
  ];

  const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];

  return (
    <>
      <h2 className="mb-6 text-4xl font-bold">Programação</h2>
      <div className="grid gap-16 text-lg leading-loose lg:grid-cols-2">
        {infos.map((info, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-8 space-x-4 lg:flex-row"
          >
            <img src={thumbnails[index]} alt={info.alt} className="h-32 w-32" />

            <p className="max-w-xs">
              <b>{info.title}</b>
              {info.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 space-y-4 text-center md:space-x-8">
        <a
          target="_blank"
          className="text-md inline-block w-full rounded-full bg-green-600 px-28 py-4 font-bold text-zinc-800 transition-colors hover:bg-green-500 md:inline-block md:w-auto"
          href="https://drive.google.com/file/d/1B5uQHnI_B6lr2GZ9I7SmS26SE2h8lZhl/view?usp=sharing"
        >
          <span className="">Cronograma dia 1</span>
        </a>

        <a
          target="_blank"
          className="text-md inline-block w-full rounded-full bg-green-600 px-28 py-4 font-bold text-zinc-800 transition-colors hover:bg-green-500 md:inline-block md:w-auto"
          href="https://drive.google.com/file/d/1mBYSGMIozum897GU6G63leD6JRlZ-a4X/view?usp=sharing"
        >
          <span className="">Cronograma dia 2</span>
        </a>
      </div>
    </>
  );
}
