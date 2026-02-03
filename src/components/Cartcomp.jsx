import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Cartcomp = () => {
  const [fetch, setfetch] = useState(() => {
    const saved = localStorage.getItem("FoodCart");
    return saved ? JSON.parse(saved) : [];
  })
  
  const subtotal = fetch.reduce((acc, item) => acc + Number(item.price), 0);  
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  let check = () => {
    alert("Cart is Empty")
  }

  let del = (index) => {
    const filt = fetch.filter((_, i) => i != index)
    localStorage.setItem("FoodCart", JSON.stringify(filt))
    setfetch(filt)
  }

  return (
    <>
      <Navbar />
      <div className='pt-10 pb-10 px-6 md:px-20 bg-white min-h-screen'>
        {/* Title */}
        <div className='mb-10'>
          <h1 className='text-4xl font-extrabold text-gray-900'>
            Shopping <span className='text-[#ed0b5e]'>Cart</span>
          </h1>
          <div className='h-1 w-20 bg-[#ed0b5e] mt-2 rounded-full'></div>
        </div>

        <div className='flex flex-col lg:flex-row gap-10 items-start'>
          
          {/* Cart Items List */}
          <ul className='flex-1 gap-4 flex flex-col w-full'>
            {fetch && fetch.length > 0 ?
              fetch.map((item, index) => {
                return (
                  <li key={index} className='flex items-center w-full justify-between p-4 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-all'>
                    <div className='flex gap-5 items-center'>
                      <div className='overflow-hidden h-20 w-20 rounded-2xl shadow-inner bg-gray-50'>
                        <img className='h-full w-full object-cover' src={item.image} alt={item.name} />
                      </div>

                      <div>
                        <h1 className='font-bold text-xl text-gray-800'>{item.name}</h1>
                        <p className='text-[#ed0b5e] font-medium'>⭐ {item.rating}</p>
                      </div>
                    </div>

                    <div className='flex items-center gap-6'>
                      <h2 className='text-xl font-black text-gray-900'>${item.price}</h2>
                      <button 
                        onClick={() => { del(index) }} 
                        className='bg-gray-50 text-gray-400 p-3 rounded-full hover:bg-red-50 hover:text-red-500 transition-all cursor-pointer'
                        title="Delete Item"
                      >
                        <i className="bi bi-trash3-fill"></i>
                      </button>
                    </div>
                  </li>
                )
              }) : (
                <div className='text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200'>
                  <h2 className='text-2xl font-bold text-gray-400'>Your cart feels lonely...</h2>
                  <Link to="/Services" className='text-[#ed0b5e] font-bold mt-2 inline-block'>Go add some food!</Link>
                </div>
              )
            }
          </ul>

          {/* Cart Summary Card */}
          <div className='w-full lg:w-96 bg-[#1a1a1a] p-8 rounded-[2.5rem] shadow-2xl text-white'>
            <h1 className='text-2xl font-bold mb-6 border-b border-gray-800 pb-4'>Order Summary</h1>
            
            <div className='flex flex-col gap-4 mb-8'>
              <div className='flex justify-between text-gray-400'>
                <span>Subtotal</span>
                <span className='text-white font-bold'>${subtotal.toFixed(2)}</span>
              </div>
              <div className='flex justify-between text-gray-400'>
                <span>Tax (5%)</span>
                <span className='text-white font-bold'>${tax.toFixed(2)}</span>
              </div>
              <div className='h-[1px] bg-gray-800 my-2'></div>
              <div className='flex justify-between text-xl font-extrabold italic'>
                <span>Total</span>
                <span className='text-[#ed0b5e]'>${total.toFixed(2)}</span>
              </div>
            </div>

            {fetch && fetch.length > 0 ? (
              <Link to={"/Checkout"}>
                <button className='w-full bg-[#ed0b5e] py-4 rounded-2xl font-bold text-white shadow-lg hover:cursor-pointer shadow-pink-900/20 hover:bg-[#c4094d] transition-all active:scale-95'>
                  Proceed to Checkout
                </button>
              </Link>
            ) : (
              <button 
                onClick={check} 
                className='w-full bg-gray-800 py-4 rounded-2xl font-bold text-gray-500 hover:cursor-pointer'
              >
                Proceed to Checkout
              </button>
            )}
            
            <p className='text-center text-xs text-gray-500 mt-4'>Secure Checkout Powered by Foodies</p>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Cartcomp