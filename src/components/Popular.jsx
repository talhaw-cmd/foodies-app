import React from 'react'

const Popular = () => {
    const cards = [
        {index: 0, Name: "Margherita Pizza", Price: "$12.99", image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg"},
        {index: 1, Name: "Spaghetti Bolognese", Price: "$12.99", image: "https://images.pexels.com/photos/30392939/pexels-photo-30392939.jpeg"},
        {index: 2, Name: "Grilled Chicken", Price: "$22.99", image: "https://images.pexels.com/photos/34138804/pexels-photo-34138804.jpeg"},
    ]

  return (
    <>
      <div className='bg-pink-50/30 py-16 px-6 flex flex-col items-center justify-start w-full'>
        {/* Title Section */}
        <h1 className='text-[#ed0b5e] text-4xl md:text-5xl font-extrabold text-center'>Popular Dishes</h1>
        <div className='h-1 w-20 bg-[#ed0b5e] mt-4 rounded-full'></div>
        <h3 className='mb-12 mt-4 text-gray-500 text-lg font-medium'>Our Delicious Menu</h3>

        {/* Cards Grid */}
        <ul className='flex flex-wrap w-full justify-center gap-8 items-center'>
        {cards.map(card => {
            return(
                <li key={card.index} className='group transition-all duration-300 border border-gray-100 w-72 rounded-3xl bg-white flex flex-col hover:shadow-2xl hover:shadow-pink-100 hover:-translate-y-2 overflow-hidden'>
                  
                  {/* Image Container */}
                  <div className='h-56 overflow-hidden'> 
                    <img 
                        src={card.image} 
                        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' 
                        alt={card.Name} 
                    />
                  </div>

                  {/* Content Section */}
                  <div className='flex flex-col gap-3 px-5 py-6'>
                    <h1 className='font-bold text-xl text-gray-800'>{card.Name}</h1>
                    <p className='text-[#ed0b5e] text-2xl font-black'>{card.Price}</p>
                    
                    {/* Button - Image ke send icon jaisa color aur rounded style */}
                    <button className='bg-[#ed0b5e] w-full rounded-xl py-3 mt-2 transition-all font-bold text-white hover:bg-gray-900 shadow-md shadow-pink-200 active:scale-95'>
                        Order Now
                    </button>
                  </div>
                </li>
            )
        })}
        </ul>

        {/* Bottom Button - Outline style to balance the pink */}
        <button className='mt-16 transition-all rounded-full border-2 border-gray-800 font-bold px-12 py-3 bg-transparent text-gray-800 hover:bg-gray-800 hover:text-white cursor-pointer'>
            View Full Menu
        </button>
      </div>
    </>
  )
}

export default Popular