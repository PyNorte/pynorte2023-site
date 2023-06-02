import brandImg from '../assets/brand.svg'

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-zinc-900/5 px-8 py-8 backdrop-blur-sm md:bg-zinc-900/40 md:px-28 lg:px-40">
      <img className="h-10 md:h-16" src={brandImg} alt="Python Norte 2023" />

      <nav></nav>
    </header>
  )
}
