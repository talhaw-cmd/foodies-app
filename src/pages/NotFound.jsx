import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 text-center">
      
      {/* 404 Text with Pink Glow */}
      <div className="relative">
        <h1 className="text-[10rem] md:text-[15rem] font-black text-gray-100 leading-none">
          404
        </h1>
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl md:text-6xl font-extrabold text-[#ed0b5e] w-full">
          Hungry?
        </h2>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Oops! This page was eaten.</h3>
        <p className="text-gray-500 mt-3 text-lg max-w-md mx-auto italic">
          Looks like you're looking for a recipe that doesn't exist. Let's get you back to the main menu!
        </p>
      </div>

      {/* Action Button - Image Style Rounded */}
      <Link 
        to="/" 
        className="mt-10 px-10 py-4 bg-[#ed0b5e] text-white font-bold rounded-full shadow-lg shadow-pink-200 hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        Go Back to Kitchen
      </Link>

      {/* Decorative dots inspired by the branding */}
      <div className="mt-16 flex gap-3">
        <div className="w-3 h-3 bg-pink-100 rounded-full"></div>
        <div className="w-3 h-3 bg-[#ed0b5e] rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-pink-100 rounded-full"></div>
      </div>
    </div>
  )
}

export default NotFound