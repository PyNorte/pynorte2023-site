// Troque o nome pelo nome da imagem que você quer usar
import thumbnail1 from "../assets/keynotes/1juliany.png";
import thumbnail2 from "../assets/keynotes/2eliane.png";
import thumbnail3 from "../assets/keynotes/elloa.png";
import thumbnail4 from "../assets/keynotes/jessica.png";

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
    {
      alt: "Elloá B. Guedes",
      title: "Elloá B. Guedes: ",
      text: "Doutora em Ciência da Computação e professora associada da Universidade do Estado do Amazonas desde 2013. É co-fundadora do Laboratório de Sistemas Inteligentes da instituição, que visa desenvolver algoritmos inteligentes para problemas em diversos domínios, aprendendo com dados reais. É autora de dois livros técnico-científicos, sendo um deles publicado internacionalmente, e de mais de 50 artigos científicos em periódicos e conferências, principalmente na área de Ciência da Computação. É uma entusiasta da programação em Python e colaborou na criação do grupo PyLadies Manaus."
      },
    {
      alt: "Jéssica Oliveira",
      title: "Jéssica Oliveira: ",
      text:"A Professora Jéssica Oliveira é uma líder proeminente no campo da Tecnologia e Educação, ocupando o cargo de Coordenadora dos cursos de Tecnologia na Uninorte. Sua jornada acadêmica é marcada por diversas pós-graduações, incluindo Engenharia de Software, Gestão de Projetos e Governança em TI, refletindo seu comprometimento com a excelência nessas áreas essenciais. Com um Mestrado em Tecnologia da Informação, ela continua a aprimorar seu conhecimento e está atualmente envolvida em um doutorado em Educação, consolidando sua experiência na interseção entre tecnologia e aprendizado. "
      ,}
      ];

  const titleColors = [
    "#2AAE2A", // Cor para o título 1
    "#2AAE2A", // Cor para o título 2    
    "#2AAE2A", // Cor para o título 3
    "#2AAE2A", // Cor para o título 4
  ];

  const thumbnails = [thumbnail1, thumbnail2,thumbnail3,thumbnail4];

  return (
    <>
      <h2 className="mb-6 text-4xl font-bold">Keynotes</h2>
      <div className="flex grid gap-16 text-lg leading-loose lg:grid-cols-1">
        {infos.map((info, index) => (
          <div
            key={index}
            className="flex flex-col flex-center justify-center gap-8 space-x-4 lg:flex-row"
          >
            <img src={thumbnails[index]} alt={info.alt} className="h-40 w-40" />

            <p className="text-justify">
              <b style={{ color: titleColors[index] }}>{info.title}</b>
              {info.text}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
