import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='z-10 relative bottom-0 flex flex-wrap bg-[#1a1a1a] py-12 px-6 w-full justify-around items-start gap-10 border-t-4 border-[#ed0b5e]'>
        
        {/* Brand Section */}
        <ul className='flex flex-col gap-5'>
            <li><h1 className='text-[#ed0b5e] font-bold text-3xl tracking-tight'>FOODIES</h1></li>
            <li><p className='text-gray-300 text-[15px] font-light w-48 leading-relaxed'>Flavor in every bite, happiness in every meal.</p></li>
            
            {/* Social Icons - Round style like the image */}
            <li className='flex gap-4'> 
              <a className='bi bi-facebook w-10 h-10 flex items-center justify-center rounded-full bg-[#ed0b5e] text-white hover:bg-white hover:text-[#ed0b5e] transition-all' href="#"></a>
              <a className='bi bi-instagram w-10 h-10 flex items-center justify-center rounded-full bg-[#ed0b5e] text-white hover:bg-white hover:text-[#ed0b5e] transition-all' href="#"></a>
              <a className='bi bi-twitter-x w-10 h-10 flex items-center justify-center rounded-full bg-[#ed0b5e] text-white hover:bg-white hover:text-[#ed0b5e] transition-all' href="#"></a>
            </li>
        </ul>

        {/* Links Section */}
        <ul className='flex flex-col gap-3'>
            <li className='text-white text-xl mb-2 font-semibold border-b-2 border-[#ed0b5e] w-fit'>Quick Links</li>
            <li className='text-gray-400 hover:text-[#ed0b5e] transition-colors cursor-pointer'><Link to={"/"}>Home</Link></li>
            <li className='text-gray-400 hover:text-[#ed0b5e] transition-colors cursor-pointer'><Link to={"/About"}>About</Link></li>
            <li className='text-gray-400 hover:text-[#ed0b5e] transition-colors cursor-pointer'><Link to={"/Contact"}>Contact</Link></li>
            <li className='text-gray-400 hover:text-[#ed0b5e] transition-colors cursor-pointer'><Link to={"/Services"}>Services</Link></li>
        </ul>

        {/* Contact Section */}
        <ul className='flex flex-col gap-3'>
            <li><h1 className='text-white font-semibold text-xl mb-2 border-b-2 border-[#ed0b5e] w-fit'>Contact Us</h1></li>
            <li className='flex items-center gap-2 text-gray-400 font-light'>
              <span className='text-[#ed0b5e]'>📍</span> 402 US Street
            </li>
            <li className='flex items-center gap-2 text-gray-400 font-light'>
              <span className='text-[#ed0b5e]'>📞</span> +461 (000 1299 3)
            </li>
            <li className='flex items-center gap-2 text-gray-400 font-light'>
              <span className='text-[#ed0b5e]'>✉️</span> info@foodies.com
            </li>
        </ul>

        {/* Newsletter Section - Styled according to the pink envelope input style */}
        <ul className='w-full max-w-xs'>
            <div className='flex flex-col gap-4 p-6 rounded-2xl bg-[#252525] border border-gray-800'>
                <h1 className='text-white font-medium'>Subscribe to Our Newsletter</h1>
                <div className='flex overflow-hidden rounded-lg'>
                  <input 
                    type="text" 
                    placeholder='Your Email...' 
                    className='bg-[#333] text-white px-4 py-2 w-full outline-none focus:ring-1 focus:ring-[#ed0b5e]'
                  />
                  <button className='bg-[#ed0b5e] text-white px-4 py-2 font-bold hover:bg-[#c4094d] transition-colors'>
                    →
                  </button>
                </div>
            </div>
        </ul>
      </div>
      
      {/* Copyright line */}
      <div className='bg-[#111] py-4 text-center text-gray-600 text-sm'>
        © 2026 Foodies. All rights reserved.
      </div>
    </>
  )
}

export default Footer