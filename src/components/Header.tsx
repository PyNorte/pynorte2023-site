import { FiMenu } from 'react-icons/fi'
import logo from '../assets/logo.svg'

export function Header() {
  return (
    <header className="bg-transparent p-8">
        <div className="flex justify-between items-center">
            <img src={logo} alt="Python Norte 2023 Logo" className="max-h-16" />
            <button className='hover:bg-zinc-800 rounded-2xl w-12 h-12 flex justify-center items-center'>
              <FiMenu className='text-white text-3xl'/>
            </button>
        </div>
    </header>
  )
}
