import { FiMenu } from 'react-icons/fi'
import logo from '../assets/logo.svg'

export function Header() {
  return (
    <header className="bg-transparent p-8">
        <div className="flex justify-between items-center">
            <img src={logo} alt="Python Norte 2023 Logo" className="max-h-16" />
            <FiMenu className='text-white text-3xl'/>
        </div>
    </header>
  )
}
