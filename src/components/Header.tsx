import { FiMenu } from 'react-icons/fi'
import logo from '../assets/logo.svg'

export function Header() {
  return (
    <header className="bg-black p-8">
        <div className="flex justify-between items-center">
            <img src={logo} alt="Python Norte 2023 Logo" className="max-h-16 lg:mr-52 xl:mr-72 2xl:mr-96"/>
            <nav className="text-white w-full hidden lg:flex">
              <ul className="flex justify-between w-full text-base">
                <li>Home</li>
                <li>Código de conduta</li>
                <li>Keynotes</li>
                <li>Nossa Equipe</li>
                <li>FAQ</li>
              </ul>
            </nav>
            <button className='lg:hidden  hover:bg-zinc-800 rounded-2xl w-12 h-12 flex justify-center items-center'>
              <FiMenu className='text-white text-3xl'/>
            </button>
        </div>
    </header>
  )
}
