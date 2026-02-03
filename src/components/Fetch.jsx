import React, { useContext, useEffect, useState } from 'react'
import data from "./data.js"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { pass } from './Context.jsx';

const Fetch = () => {
    const {cart, setcart} = useContext(pass)

    const [val, setval] = useState("")
    const [items, setitems] = useState([])
    const [isloading, setisloading] = useState(false)
    const [tabs] = useState(["All", "Pizza", "Burger", "Chicken", "Fast food", "Main Course", "Pasta", "Salads", "Dessert", "Beverages"])


    let add = (item) => {
        setcart([...cart, item])
    }

    let fun = (val) => {
        if (val === "all" || val === "") {
            setitems(data)
        } else {
            const filtereditems = data.filter((item) => 
                item.name.toLowerCase().includes(val) || 
                item.category.toLowerCase().includes(val)
            )
            setitems(filtereditems)
        }
        setisloading(true)
    }

    useEffect(() => {
        setisloading(true)
        setitems(data)
    }, [])

    useEffect(() => {
        fun(val)
    }, [val])

    useEffect(() => {
        localStorage.setItem("FoodCart", JSON.stringify(cart));
    }, [cart]);

    return (
        <>
            <div className='pt-24 pb-16 px-6 md:px-12 bg-white'>
                {/* Header & Search */}
                <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
                    <div>
                        <h1 className='text-4xl md:text-5xl font-extrabold text-gray-900'>
                            Order <span className='text-[#ed0b5e]'>Delicious Food</span>
                        </h1>
                        <p className='text-gray-500 mt-2 text-lg italic'>Choose from a wide range of tasty dishes.</p>
                    </div>

                    {/* Search Input - Image style rounded bar */}
                    <div className='relative w-full md:w-80'>
                        <i className="absolute left-4 top-1/2 -translate-y-1/2 bi bi-search text-[#ed0b5e]"></i>
                        <input 
                            type="text"
                            className='w-full rounded-full pl-12 pr-6 py-3 border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-[#ed0b5e] outline-none transition-all shadow-sm'
                            placeholder='Search your craving...'
                            onChange={(e) => { setval(e.target.value.toLowerCase()) }}
                        />
                    </div>
                </div>

                {/* Categories Tabs */}
                <div className='mt-10 flex flex-wrap gap-3 justify-center'>
                    {tabs.map((item, index) => (
                        <button
                            key={index}
                            value={item} 
                            onClick={(e) => {
                                setisloading(false)
                                setval(e.target.value.toLowerCase() === "all" ? "" : e.target.value.toLowerCase())
                            }} 
                            className={`px-6 py-2 rounded-full font-bold transition-all cursor-pointer border-2 
                                ${val === (item.toLowerCase() === "all" ? "" : item.toLowerCase()) 
                                    ? 'bg-[#ed0b5e] border-[#ed0b5e] text-white shadow-lg shadow-pink-200' 
                                    : 'bg-white border-gray-100 text-gray-600 hover:border-[#ed0b5e] hover:text-[#ed0b5e]'}`}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Food Grid */}
                <ul className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                    {!isloading ? (
                        <div className='col-span-full text-center py-20'>
                            <div className='rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ed0b5e] mx-auto'></div>
                            <h2 className='mt-4 font-bold text-gray-400'>Preparing Menu...</h2>
                        </div>
                    ) : (
                        items.map((item, index) => (
                            <li key={index} className='group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300'>
                                {/* Image Wrapper */}
                                <div className='h-52 overflow-hidden relative'>
                                    <img className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' src={item.image} alt={item.name} />
                                    <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[#ed0b5e] font-bold text-sm shadow-sm'>
                                        ⭐ {item.rating}
                                    </div>
                                </div>

                                {/* Content Wrapper */}
                                <div className='p-6 flex flex-col gap-3'>
                                    <div className='flex justify-between items-start'>
                                        <h1 className='text-xl font-bold text-gray-800 leading-tight'>{item.name}</h1>
                                        <p className='text-[#ed0b5e] font-black text-xl'>${item.price}</p>
                                    </div>
                                    <h2 className='text-gray-400 font-medium uppercase tracking-widest text-xs'>{item.category}</h2>
                                    
                                    <button
                                        onClick={() => add(item)} 
                                        className='hover:cursor-pointer mt-4 w-full bg-[#ed0b5e] text-white font-bold py-3 rounded-2xl hover:bg-gray-900 transition-colors shadow-md shadow-pink-100 active:scale-95'
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </>
    )
}

export default Fetch