// Troque o nome pelo nome da imagem que você quer usar
import thumbnail1 from "../assets/keynotes/1juliany.png";
import thumbnail2 from "../assets/keynotes/2eliane.png";
// import thumbnail3 from "../assets/keynotes/3.png";
// import thumbnail4 from "../assets/keynotes/4.png";

export function Keynotes() {
  // Altere as informações abaixo
  const infos = [
    {
      alt: "Juliany Raiol",
      title: "Juliany Raiol: ",
      text: "Amazonense, engenheira de software e participante das comunidades Python de Manaus. Foi big kahuna da Python Brasil 2022, tem interesse em Sistemas Distribuídos, Open Source e livros de ficção científica.",
    },
    {
      alt: "Eliane Collins",
      title: "Eliane Collins: ",
      text: "Possui 18 anos de experiência profissional nas áreas de engenharia de software e teste de software, atualmente é Gerente Técnica no Instituto de Desenvolvimento INDT, Co-Fundadora da startup de treinamento Testing and Play e Professora de pós-graduação na UFAM e Cesar School. É doutora em ciência da computação pela USP.",
    },
  ];

  const titleColors = [
    "#2AAE2A", // Cor para o título 1
    "#2AAE2A", // Cor para o título 2    
    "#2AAE2A", // Cor para o título 3
    "#2AAE2A", // Cor para o título 4
  ];

  const thumbnails = [thumbnail1, thumbnail2];

  return (
    <>
      <h2 className="mb-6 text-4xl font-bold">Keynotes</h2>
      <div className="grid gap-16 text-lg leading-loose lg:grid-cols-2">
        {infos.map((info, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-8 space-x-4 lg:flex-row"
          >
            <img src={thumbnails[index]} alt={info.alt} className="h-32 w-32" />

            <p className="max-w-xs">
              <b style={{ color: titleColors[index] }}>{info.title}</b>
              {info.text}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
