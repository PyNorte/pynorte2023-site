import logo from '../assets/logo.svg'

export function Maintenance() {
  return (
    <main className="min-h-screen bg-background bg-desktop-dark bg-no-repeat bg-cover flex justify-center items-center py-6 px-11">
      <div className="flex flex-col gap-6">
        <img className="w-full md:w-[680px]" src={logo} alt="" />

        <span className="text-white text-center text-sm md:text-lg">
          Nosso site está em construção, logo teremos novidades 🐍
        </span>
      </div>
    </main>
  )
}
