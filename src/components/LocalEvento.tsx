import local from "../assets/local-envento.jpg";

export function LocalEvento() {
  const info = [
    {
      text: "UNINORTE - Unidade Djalma Batista. Endereço: Av. Djalma Batista, 2056 - Parque Dez de Novembro, Manaus - AM, 69050-010",
      mobile:
        "UNINORTE - Unidade Djalma Batista. Endereço: Av. Djalma Batista, 2056 - Parque Dez de Novembro, Manaus - AM, 69050-010",
    },
  ];

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
            className="mx-auto h-64 w-64 rounded"
          />
        </div>
        <p className="text-center text-lg leading-loose">{info[0].mobile}</p>
      </div>

      {/* Button */}
      <div className="mt-12 text-center">
        <a
          target="_blank"
          rel="noreferrer"
          className="text-md inline-block w-full rounded-full bg-green-600 px-28 py-4 font-bold text-zinc-800 transition-colors hover:bg-green-500 md:inline-block md:w-auto"
          href="https://goo.gl/maps/QauwFqoaa1qmuNKg8"
        >
          <span className="">Google Maps</span>
        </a>
      </div>
    </>
  );
}
