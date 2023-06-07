import { clsx } from 'clsx'

import { useScrollPosition } from '../hooks/useScrollPosition'

import brandImg from '../assets/brand.svg'

export function Header() {
  const scrollPosition = useScrollPosition()

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 flex items-center justify-between px-8 py-4 sm:bg-zinc-900/40 sm:backdrop-blur-sm md:px-28 lg:px-40',
        {
          'bg-zinc-900/30 backdrop-blur-sm transition-all':
            scrollPosition >= 20,
        },
      )}
    >
      <img className="h-10 md:h-14" src={brandImg} alt="Python Norte 2023" />

      <nav></nav>
    </header>
  )
}
