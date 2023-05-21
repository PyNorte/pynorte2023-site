import { FiMenu } from 'react-icons/fi'
import { TfiClose } from 'react-icons/tfi'
import logo from '../assets/logo.svg'
import { useState } from 'react'
import { useReadingScroll } from '../hooks/useReadingScroll.js'


export function Header() {
  const [ menuIsOn, setMenuIsOn ] = useState(false)

  return (
    <div>
      <section 
        className={`${menuIsOn ? 'translate-y-0' : '-translate-y-96'} lg:hidden top-1.5 my-28 bg-transparent left-0 absolute h-screen w-full duration-200`}>
          <div className='bg-zinc-900 top-0 h-min text-white '>
            <ul className=''>
              <li className="py-2 "><a href="#" className="ml-4">Home</a></li>
              <li className="py-2 "><a href="#" className="ml-4">Código de conduta</a></li>
              <li className="py-2 "><a href="#" className="ml-4">Keynotes</a></li>
              <li className="py-2 "><a href="#" className="ml-4">Nossa Equipe</a></li>
              <li className="py-2 "><a href="#" className="ml-4">FAQ</a></li>
            </ul>
          </div>
        <div className='min-h-full w-full' onClick={() => setMenuIsOn(!menuIsOn)}></div>
      </section>
      <header className="lg:bg-black bg-black p-8 relative">
        <div className="flex justify-between items-center">
            <img src={logo} alt="Python Norte 2023 Logo" className="max-h-16 lg:mr-52 xl:mr-72 2xl:mr-96"/>
            <nav className="text-white w-full hidden lg:flex font-normal text-base">
              <ul className="flex justify-between xl:justify-around w-full">
                <li><a href="#" className="hover:text-green-400">Home</a></li>
                <li><a href="#" className="hover:text-green-400">Código de conduta</a></li>
                <li><a href="#" className="hover:text-green-400">Keynotes</a></li>
                <li><a href="#" className="hover:text-green-400">Nossa Equipe</a></li>
                <li><a href="#" className="hover:text-green-400">FAQ</a></li>
              </ul>
            </nav>
            <button className='lg:hidden hover:bg-zinc-800 rounded-2xl w-12 h-12 flex justify-center items-center' 
            onClick={() => setMenuIsOn(!menuIsOn)}>
              { menuIsOn ? <TfiClose className='text-white text-3xl'/> : <FiMenu className='text-white text-3xl'/> }
            </button>
          </div>
      </header>
    </div>
  )
}
