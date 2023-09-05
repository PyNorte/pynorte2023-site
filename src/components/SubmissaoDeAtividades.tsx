export function SubmissaoDeAtividades() {
  return (
  // Altere as informações abaixo
  <div className="flex flex-col items-start gap-1">
    <h2 className="text-4xl font-bold">Submissão de atividades</h2>
    <p className="mt-6 text-lg leading-loose"> Tem interesse em palestrar na Python Norte 2023? Está aberta a submissão de atividades pela comunidade! </p>
    <p className="mt-2 text-base leading-loose "> <b>Palestras:</b> Apresentações teóricas de 40 (quarenta) minutos que serão realizadas no auditório ou salas específicas para a atividade. </p>
    <p className="mt-2 text-base leading-loose"> <b>Tutoriais:</b> apresentações com teoria e prática com duração de 90(noventa) minutos e 
    tem como objetivo o crescimento da comunidade, promovendo aprendizado para pessoas com diferentes níveis de experiência em programação, 
    Python, entre outras áreas.</p>
    <p className="mt-2 text-base"> <b>Observações:</b></p>
    <p className="mt-0 text-base"> - Submissões de atividades abertas até 10/09/2023.</p>
    <p className="mt-0 text-base"> - Não é necessário enviar a apresentação completa no formulário de submissões, apenas um resumo sobre o conteúdo.</p>
    <p className="mt-0 text-base"> - Palestrantes aprovados irão receber 25% de desconto no valor do ingresso.</p>
    <p className="mt-6 text-base"> Mais informações no link de inscrição abaixo </p>

        <a 
        target="_blank"
        className="mt-2 rounded-full bg-green-600 px-8 py-3 text-sm font-bold text-zinc-800 transition-colors hover:bg-green-500 md:px-12 md:py-4 md:text-base"
        href="https://docs.google.com/forms/d/e/1FAIpQLSf8Pxk2xj7bqjadFxrXfl1JP0g9EXKjdNEy7Zz-Gas07tlCYA/viewform?pli=1">
            Submeta sua atividade
          </a>
  </div>
  )
}
