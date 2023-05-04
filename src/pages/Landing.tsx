import logo from '../assets/logo.svg'

export function Landing() {
  return (
    <div className="bg-background min-h-screen">
      <div>
        <img src={logo} alt="Logo" />

        <div className="text-white">
          <h1>15 e 16 de Outubro de 2023</h1>

          <span>#PythonNorte2023</span>

          <p>
            A PyNorte 2023 nasceu com a tarefa de promover o máximo de
            diversidade e inclusão durante os 02 dias / Outubro do evento.
          </p>
        </div>
      </div>
    </div>
  )
}
