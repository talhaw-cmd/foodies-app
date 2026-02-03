import React, { useEffect, useRef, useState, useContext } from 'react' // useContext add kiya
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom'; // redirect ki jagah useNavigate behtar hai
import { pass } from './Context'; // Context import karein

const Order = () => {
  const form = useRef()
  const navigate = useNavigate()
  
  // Context se cart update karne ke liye
  const { setcart } = useContext(pass);

  const [fetch, setfetch] = useState(() => {
    const saved = localStorage.getItem("FoodCart");
    return saved ? JSON.parse(saved) : [];
  })

  let sendEmail = (e) => {
    e.preventDefault()
    if(fetch.length > 0){
      const subtotal = fetch.reduce((acc, item) => acc + Number(item.price), 0);
      const tax = subtotal * 0.05;
      const total = subtotal + tax

      const templateParams = {
        customer_name: form.current.user_name.value,
        order_id: "ORD-" + Math.floor(Math.random() * 100000),
        orders: fetch,
        total: total.toFixed(2),
        email: form.current.user_email.value,
        address: form.current.address.value,
        subtotal: subtotal.toFixed(2),
        tax: tax.toFixed(2),
        phone_number: form.current.phone_number.value
      };

      emailjs.send(
        "service_mxhdb12",
        "template_xx7aald",
        templateParams,
        "EOAB2RCWbgaUQTj3n"
      )
      .then((result)=>{
        alert("🎉 Order Confirmed! Check your email.");
        
        // Context aur LocalStorage dono saaf karein taaki Navbar counter 0 ho jaye
        setfetch([]);
        setcart([]); 
        localStorage.removeItem("FoodCart")
        
        navigate("/"); // Home page par wapis bhejen
      })
      .catch((error)=>{
        alert("Error: " + error.text)
      })
    }
    else{
      alert("Your cart is empty!")
    }
  }

  return (
    <>
      <div className='w-full min-h-screen flex justify-center items-center bg-pink-50/30 px-6'>
        <form 
          ref={form} 
          onSubmit={sendEmail} 
          className='p-8 md:p-12 bg-white shadow-2xl shadow-pink-100 rounded-[2.5rem] flex flex-col justify-center items-center gap-6 w-full max-w-xl border border-gray-50'
        >
          <div className='text-center'>
            <h1 className='text-4xl font-extrabold text-gray-900'>Confirm <span className='text-[#ed0b5e]'>Order</span></h1>
            <p className='text-gray-500 mt-2'>Fill in your details to get your delicious food!</p>
          </div>

          <div className='w-full flex flex-col gap-4 mt-4'>
            <input 
              type="text" required name='user_name' placeholder='Full Name' 
              className='px-5 py-4 bg-gray-50 border-none focus:ring-2 focus:ring-[#ed0b5e] outline-none transition-all w-full rounded-2xl text-gray-700' 
            />
            
            <input 
              type="email" required name='user_email' placeholder='Email Address' 
              className='px-5 py-4 bg-gray-50 border-none focus:ring-2 focus:ring-[#ed0b5e] outline-none transition-all w-full rounded-2xl text-gray-700' 
            />

            <input 
              type="number" required name='phone_number' placeholder='Phone Number (Example 0300 1234567)' 
              className='px-5 py-4 bg-gray-50 border-none focus:ring-2 focus:ring-[#ed0b5e] outline-none transition-all w-full rounded-2xl text-gray-700' 
            />

            <textarea 
              required name='address' placeholder='Delivery Address' rows="3"
              className='resize-none px-5 py-4 bg-gray-50 border-none focus:ring-2 focus:ring-[#ed0b5e] outline-none transition-all w-full rounded-2xl text-gray-700' 
            />
          </div>

          <div className='w-full bg-gray-50 p-4 rounded-2xl border border-dashed border-gray-200'>
             <div className='flex justify-between font-bold text-gray-700'>
                <span>Items in Cart:</span>
                <span>{fetch.length}</span>
             </div>
          </div>

          <button 
            type="submit" 
            className='font-bold px-4 py-4 bg-[#ed0b5e] text-white hover:bg-gray-900 transition-all cursor-pointer shadow-lg shadow-pink-200 w-full rounded-2xl active:scale-95'
          >
            Place Order Now
          </button>
          
          <button 
            type="button"
            onClick={() => navigate("/Cart")}
            className='text-gray-400 font-medium hover:text-[#ed0b5e] transition-colors'
          >
            Back to Cart
          </button>
        </form>
      </div>
    </>
  )
}

export default Order