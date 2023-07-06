import local from '../assets/local-evento.png'

export function LocalEvento() {
  const info = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra suspendisse potenti nullam ac tortor vitae. Orci a scelerisque purus semper eget duis at tellus at. Volutpat odio facilisis mauris sit amet massa. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Nibh cras pulvinar mattis nunc sed. Lobortis feugiat vivamus at augue. Dictum non consectetur a erat nam at lectus. Sit amet nisl suscipit adipiscing bibendum est. Massa id neque aliquam vestibulum. Eget dolor morbi non arcu risus.',
      mobile: 'O evento ocorrerá no espaço X, dia X, em X horario',
    },
  ]

  return (
    <>
      <h2 className="mb-6 text-4xl font-bold">Local do evento</h2>

      {/* Web */}
      <div className="hidden items-center gap-16 xl:flex">
        <img src={local} alt="local do evento" className="h-42 w-42" />
        <p className="text-lg leading-loose">{info[0].text}</p>
      </div>

      {/* Mobile */}
      <div className="grid items-center gap-8 xl:hidden">
        <div className="text-center">
          <img
            src={local}
            alt="local do evento"
            className="mx-auto h-64 w-64"
          />
        </div>
        <p className="text-center text-lg leading-loose">{info[0].mobile}</p>
      </div>

      {/* Button */}
      <div className="mt-12 text-center">
        <a
          className="text-md inline-block w-full rounded-full bg-green-600 px-28 py-4 font-bold text-zinc-800 transition-colors hover:bg-green-500 md:inline-block md:w-auto"
          href="#"
        >
          <span className="">Google Maps</span>
        </a>
      </div>
    </>
  )
}
