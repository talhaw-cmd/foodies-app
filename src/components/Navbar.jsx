import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../public/logo.png"
import { pass } from './Context'
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar = () => {
  const {cart, setcart} = useContext(pass)

  const [items] = useState(["Home", "About", "Services"])
  // Mobile menu open/close karne ki logic
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className='z-50 top-0 fixed bg-white shadow-md flex justify-between px-6 md:px-10 items-center w-full h-16'>
        
        {/* Logo */}
        <div className='flex items-center gap-1'>
          <img className='h-7' src={logo} alt={logo} />
          <div className='font-bold text-[#ed0b5e] text-2xl tracking-tight'>Foodies</div>
        </div>

        {/* Desktop Links */}
        <ul className='hidden md:flex gap-8 items-center'>
          {items.map(item => (
            <li key={item}>
              <Link
                className='text-gray-600 font-medium transition-all duration-200 hover:text-[#ed0b5e]'
                to={item === 'Home' ? "/" : `/${item}`}
              >
                {item}
              </Link>
            </li>
          ))}
          <li className='flex items-center'>
            <span className='absolute z-10 text-sm bg-[#ed0b5e] text-white rounded-2xl px-2 mt-[-15px] ml-[15px]'>{cart.length}</span>
            <Link
              onClick={() => setIsOpen(false)} // Link click hone par menu band ho jaye
              className='bi bi-bag-fill text-xl text-gray-600 font-medium transition-all duration-200 hover:text-[#ed0b5e]'
              to={"/cart"}
            >
              
            </Link>
          </li>
          <li>
            <Link 
              className='bg-[#ed0b5e] px-6 py-2 border-2 border-[#ed0b5e] text-white font-semibold rounded-full hover:bg-white hover:text-[#ed0b5e] transition-all' 
              to={"/Contact"}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button (Toggle) */}
        <div className='md:hidden flex items-center'>
           <button 
             onClick={() => setIsOpen(!isOpen)} 
             className='text-[#ed0b5e] text-3xl focus:outline-none hover:cursor-pointer'
           >
             {isOpen ? '✕' : '☰'}
           </button>
        </div>

        {/* Mobile Menu Sidebar/Drawer */}
        <div className={`fixed top-16 left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out md:hidden flex flex-col items-center gap-6 py-8 border-t border-gray-100 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
          {items.map(item => (
            <Link
              key={item}
              onClick={() => setIsOpen(false)} // Link click hone par menu band ho jaye
              className='text-gray-700 font-semibold text-xl hover:text-[#ed0b5e]'
              to={item === 'Home' ? "/" : `/${item}`}
            >
              {item}
            </Link>
          ))}

          <div className='flex items-center'>
            <span className='absolute z-10 text-sm bg-[#ed0b5e] text-white rounded-2xl px-2 mt-[-15px] ml-[15px]'>{cart.length}</span>
            <Link
              onClick={() => setIsOpen(false)} // Link click hone par menu band ho jaye
              className='bi bi-bag-fill text-xl text-gray-600 font-medium transition-all duration-200 hover:text-[#ed0b5e]'
              to={"/cart"}
            >
              
            </Link>
          </div>

          <Link 
            onClick={() => setIsOpen(false)}
            className='bg-[#ed0b5e] px-10 py-3 text-white font-bold rounded-full shadow-lg shadow-pink-100' 
            to={"/Contact"}
          >
            Contact
          </Link>
        </div>

      </nav>
      <div className='h-16'></div>
    </>
  )
}

export default Navbar