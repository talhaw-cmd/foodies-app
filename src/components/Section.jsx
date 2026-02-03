import React, { useContext } from 'react'
import { pass } from './Context';

const Section = ({aboutH1, aboutH3, aboutp}) => {
  const context = useContext(pass);
  if (!context) return null;
  const { data } = context;
  
  return (
    <>
      <div className='py-16 px-6 md:px-20 w-full min-h-screen flex flex-wrap justify-center items-center gap-12 bg-white'>
        
        {/* Image Side - Styled like a framed card */}
        <div className='relative group'>
          {/* Decorative background element inspired by the pink envelope */}
          <div className='absolute -top-4 -left-4 w-full h-full border-2 border-[#ed0b5e] rounded-3xl -z-10 group-hover:top-0 group-hover:left-0 transition-all duration-300'></div>
          
          <div className='overflow-hidden rounded-3xl h-[400px] w-full max-w-[500px] shadow-xl'> 
            <img 
              className='w-full h-full object-cover transform hover:scale-105 transition-transform duration-500' 
              src="https://images.pexels.com/photos/239975/pexels-photo-239975.jpeg" 
              alt="Restaurant Interior" 
            />
          </div>
        </div>

        {/* Text Side */}
        <div className='flex flex-col gap-6 max-w-lg'>
            <h1 className='text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight'>
              {aboutH1 || data.h1}
            </h1>
            
            {/* Tagline with image color */}
            <h2 className='text-xl md:text-2xl font-bold text-[#ed0b5e] tracking-wide uppercase italic'>
              {data.h2}
            </h2>
            
            <h3 className='font-semibold text-xl text-gray-800 italic'>
              {aboutH3 || data.h3}
            </h3>
            
            <p className='text-gray-600 leading-relaxed text-lg'>
              {aboutp || data.p}
            </p>
            
            {/* Action Button - Image style rounded */}
            <button className='w-fit transition-all rounded-full border-2 border-[#ed0b5e] font-bold px-10 py-3 bg-[#ed0b5e] text-white hover:bg-white hover:text-[#ed0b5e] hover:shadow-lg hover:shadow-pink-100 cursor-pointer'>
              Learn More
            </button>
        </div>

      </div>
    </>
  )
}

export default Section