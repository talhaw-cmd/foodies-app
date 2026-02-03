import React, { useRef } from 'react'
import Food from './images/email.png'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';

const ContactHero = () => {
  const form = useRef();
  
  let sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(
      'service_mxhdb12',
      'template_3hcmkf9',
      form.current,
      'EOAB2RCWbgaUQTj3n'
    )
    .then((result) => {
      alert("Message has been sent successfully!");
      e.target.reset();
    }, (error) => {
      alert("Failed to send message: " + error.text);
    });
  }

  return (
    <>
      {/* Contact Hero Section */}
      <div className='pt-28 flex flex-col md:flex-row items-center justify-center px-6 md:px-20 w-full min-h-[80vh] bg-white gap-10'>
        <div className='flex flex-col gap-6 md:w-1/2'>
          <h1 className='font-extrabold text-5xl md:text-6xl text-gray-900'>
            Contact <span className='text-[#ed0b5e]'>Foodies</span>
          </h1>
          <p className='max-w-md text-gray-600 text-lg leading-relaxed'>
            Have a question or feedback? We'd love to hear from you. Add your favourites to the cart and enjoy fast delivery at your home.
          </p>
          <div className='flex gap-4'>
            <Link to={"/Services"}>
              <button className='transition-all rounded-full border-2 border-[#ed0b5e] font-bold px-8 py-3 bg-[#ed0b5e] text-white hover:bg-white hover:text-[#ed0b5e] cursor-pointer shadow-lg shadow-pink-100'>
                Order Now
              </button>
            </Link>
            <button className='transition-all rounded-full border-2 border-gray-800 font-bold px-8 py-3 bg-transparent text-gray-800 hover:bg-gray-800 hover:text-white cursor-pointer'>
              View Menu
            </button>
          </div>
        </div>
        <div className='md:w-1/2 flex justify-center'>
          <img src={Food} className='w-full max-w-md object-contain' alt='Email Illustration' />
        </div>
      </div>

      {/* Info & Form Section */}
      <section className='flex flex-wrap px-6 md:px-20 py-20 justify-center gap-12 bg-pink-50/30'>
        
        {/* Contact Information Cards - Inspired by image icons */}
        <div className='w-full lg:w-96 flex flex-col gap-6'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-2 h-8 bg-[#ed0b5e] rounded-full'></div>
            <h1 className='text-3xl font-extrabold text-gray-900'>Get In Touch</h1>
          </div>

          {[
            { icon: 'bi-geo-alt-fill', title: '402 NewYork US', sub: 'Location' },
            { icon: 'bi-telephone-fill', title: '461(000 1298 3)', sub: 'Call us Anytime' },
            { icon: 'bi-envelope-fill', title: 'info@Foodies.com', sub: 'Email Us' }
          ].map((item, idx) => (
            <div key={idx} className='group flex gap-5 items-center p-6 bg-white rounded-3xl shadow-sm border border-gray-100 hover:border-[#ed0b5e] transition-all duration-300'>
              <div className='w-14 h-14 flex items-center justify-center rounded-full bg-pink-50 text-[#ed0b5e] text-2xl group-hover:bg-[#ed0b5e] group-hover:text-white transition-all'>
                <i className={item.icon}></i>
              </div>
              <div>
                <h1 className='font-bold text-gray-800 text-lg'>{item.title}</h1>
                <p className='text-gray-500 text-sm uppercase tracking-wider font-medium'>{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form - Styled like the card in image */}
        <form ref={form} onSubmit={sendEmail} className='p-8 md:p-10 bg-white shadow-2xl shadow-pink-100 rounded-[2.5rem] flex flex-col gap-5 w-full max-w-xl border border-gray-50'>
          <h1 className='text-3xl font-extrabold text-gray-900 mb-2'>Send Us a Message</h1>
          
          <div className='flex flex-col gap-4'>
            <input type="text" required name='user_name' placeholder='Your Name' 
              className='px-5 py-4 bg-gray-50 border-none focus:ring-2 focus:ring-[#ed0b5e] outline-none transition-all w-full rounded-2xl text-gray-700' />
            
            <input type="email" required name='user_email' placeholder='Your Email' 
              className='px-5 py-4 bg-gray-50 border-none focus:ring-2 focus:ring-[#ed0b5e] outline-none transition-all w-full rounded-2xl text-gray-700' />
            
            <select name="subject" 
              className='px-5 py-4 bg-gray-50 border-none focus:ring-2 focus:ring-[#ed0b5e] outline-none transition-all w-full rounded-2xl text-gray-700 appearance-none cursor-pointer'>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Support">Support</option>
              <option value="Feedback">Feedback</option>
            </select>
            
            <textarea required name='message' placeholder='Your Message' rows="4" 
              className='resize-none px-5 py-4 bg-gray-50 border-none focus:ring-2 focus:ring-[#ed0b5e] outline-none transition-all w-full rounded-2xl text-gray-700' />
          </div>

          <button type="submit" 
            className='mt-2 px-8 py-4 bg-[#ed0b5e] text-white font-bold text-lg rounded-2xl hover:bg-gray-900 transition-all shadow-lg shadow-pink-200 active:scale-95 flex items-center justify-center gap-2'>
            Send Message <i className="bi bi-send-fill text-sm"></i>
          </button>
        </form>
      </section>

      {/* Social Follow Section */}
      <section className='py-20 flex flex-col justify-center items-center bg-white'>
        <h1 className='text-4xl font-extrabold text-gray-900 mb-10'>Follow <span className='text-[#ed0b5e]'>Our Journey</span></h1>
        <div className='flex gap-6 justify-center items-center'>
          {['facebook', 'instagram', 'twitter-x'].map((social) => (
            <a key={social} href='#' 
              className={`text-2xl bi bi-${social} w-16 h-16 flex items-center justify-center rounded-full border-2 border-gray-100 text-gray-400 hover:border-[#ed0b5e] hover:text-[#ed0b5e] hover:-translate-y-2 transition-all duration-300 shadow-sm`}>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}

export default ContactHero