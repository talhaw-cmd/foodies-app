import React from "react"
import Food from "./images/Food.png"
import { Link } from "react-router-dom"
const Hero = () => {
  return (
    <>
      <div className='pt-10 flex flex-col md:flex-row items-center justify-center px-8 md:px-20 w-full min-h-screen bg-white'>
        
        {/* Text Side */}
        <div className='flex flex-col gap-6 md:w-1/2'>
            <h1 className='font-extrabold text-5xl md:text-6xl text-gray-900 leading-tight'>
              Delicious <span className='text-[#ed0b5e]'>Food</span> <br /> 
              Delivered To Your <br /> 
              <span className='text-[#ed0b5e]'> Doorstep </span>
            </h1>
            
            <p className='max-w-md text-gray-600 text-lg leading-relaxed'>
              At Foodies, we turn fresh ingredients into extraordinary flavors that speak to the soul. 
              It’s not just a meal; it’s a celebration of taste in every single bite.
            </p>
            
            <div className='flex gap-4 mt-2'>
                {/* Order Now - Solid Pink like the icons */}
                <Link to={"/Services"}>
                  <button className='transition-all rounded-full border-2 border-[#ed0b5e] font-bold px-8 py-3 bg-[#ed0b5e] text-white hover:bg-white hover:text-[#ed0b5e] cursor-pointer shadow-lg shadow-pink-100'>
                    Order Now
                  </button>
                </Link>
                
                {/* View Menu - Outline style */}
                <button className='transition-all rounded-full border-2 border-gray-800 font-bold px-8 py-3 bg-transparent text-gray-800 hover:bg-gray-800 hover:text-white cursor-pointer'>
                  View Menu
                </button>
            </div>
        </div>

        {/* Image Side */}
        <div className='md:w-1/2 flex justify-center items-center mt-12 md:mt-0'>
            <div className='relative'>
              {/* Background decorative circle inspired by the image's round icons */}
              <div className='absolute -z-10 w-64 h-64 md:w-96 md:h-96 bg-pink-50 rounded-full blur-3xl opacity-70'></div>
              <img 
                src={Food} 
                className='w-full max-w-lg object-contain' 
                alt='Delicious Food'
              />
            </div>
        </div>

      </div>
    </>
  )
}

export default Hero