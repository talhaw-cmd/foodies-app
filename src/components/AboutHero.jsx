import React from 'react'
import Food from "./images/Chef.png"

const AboutHero = () => {
    const data = [
        {id:0, img: "https://images.pexels.com/photos/7601437/pexels-photo-7601437.jpeg", h1: "Fresh Ingredients", p: "Only the best and freshest ingredients"},
        {id:1, img: "https://images.pexels.com/photos/21790794/pexels-photo-21790794.jpeg", h1: "Delicious Recipies", p: "Tasty and authentic recipies with love"},
        {id:2, img: "https://images.pexels.com/photos/35505245/pexels-photo-35505245.jpeg", h1: "Cozy Dinning", p: "A warm welcoming atmosphere"},
    ]

  return (
    <>
      {/* Hero Section */}
      <div className='flex flex-col md:flex-row items-center justify-center px-6 md:px-20 w-full min-h-screen bg-white gap-10'>
        <div className='flex flex-col gap-6 md:w-1/2'>
            <h1 className='font-extrabold text-5xl md:text-7xl text-gray-900 leading-tight'>
              About <span className='text-[#ed0b5e]'>Foodies</span> <br /> Restaurant
            </h1>
            <h2 className='text-xl md:text-2xl font-semibold text-gray-700 italic border-l-4 border-[#ed0b5e] pl-4'>
              Discover our story and passion for food
            </h2>
            <p className='max-w-lg text-gray-600 leading-relaxed text-lg'>
              At Foodies, we turn fresh ingredients into extraordinary flavors that speak to the soul. 
              It’s not just a meal; it’s a celebration of taste in every single bite.
            </p>
        </div>

        <div className='md:w-1/2 flex justify-center'>
            {/* Image height adjusted to be responsive instead of fixed h-screen */}
            <img src={Food} className='max-h-[80vh] w-auto object-contain' alt='Chef Image'/>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='flex flex-col items-center justify-center w-full py-20 bg-pink-50/30'>
        <h1 className='font-extrabold text-4xl md:text-5xl text-gray-900 mb-2'>
          Why <span className='text-[#ed0b5e]'>Choose</span> Us?
        </h1>
        <div className='h-1.5 w-24 bg-[#ed0b5e] rounded-full mb-12'></div>

        <ul className='flex flex-wrap justify-center items-center gap-10 px-6'>
          {data.map(e => {
            return (
              <li key={e.id} className='group flex flex-col items-center w-full sm:w-80 bg-white p-4 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300'>
                <div className='overflow-hidden h-64 w-full rounded-2xl'>
                  <img 
                    src={e.img} 
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' 
                    alt={e.h1} 
                  />
                </div>
                <div className='text-center mt-6 mb-4 px-2'>
                  <h1 className='font-bold text-2xl text-gray-800 mb-2 group-hover:text-[#ed0b5e] transition-colors'>
                    {e.h1}
                  </h1>
                  <p className='text-gray-500 leading-relaxed italic'>
                    "{e.p}"
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default AboutHero