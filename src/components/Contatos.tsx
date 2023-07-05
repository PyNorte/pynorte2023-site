import { GrTwitter, GrInstagram } from "react-icons/gr";

export function Contatos() {

  return (
    <div className="p-16 max-w-2xl md:max-w-2xl lg:max-w-2xl xl:max-w-2xl mx-auto shadow-xl rounded-3xl bg-custom-gray overflow-hidden">
      {/* Top */}
      <div className="flex flex-col items-center justify-center">
        <h3 className="mb-6 text-3xl font-bold text-white">Nossos Contatos</h3>
        <section className="flex gap-8 text-white">
          <a
            className="text-4xl"
            href="https://twitter.com/pynorte"
            target="_blank"
            rel="noreferrer"
          >
            <GrTwitter />
          </a>

          <a
            className="text-4xl"
            href="https://www.instagram.com/pynorteoficial/"
            target="_blank"
            rel="noreferrer"
          >
            <GrInstagram />
          </a>
        </section>
      </div>

      {/* Bottom */}
      <div className="mt-16 flex flex-col items-center justify-center text-white">
        <p className="text-center text-lg font-semibold text-gray-300 leading-loose uppercase">
          EMAIL
        </p>
        <a href="mailto:contato@pynorte.com">
          <p className="text-center text-2xl font-bold leading-loose text-green-600 underline">
            contato@pynorte.com
          </p>
        </a>
      </div>
    </div>
  );
}
