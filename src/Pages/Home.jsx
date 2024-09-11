import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io"

const Home = () => {
  // localStorage.setItem('user',JSON.stringify(false))
  return (
    <>
      <div className="container flex flex-col items-center my-5">
        <div className="heading flex">
          <h1 className='text-3xl'>What do you wanna buy?</h1>
        </div>
        <main className='w-1/2 flex flex-wrap justify-center'>
          <button className='py-5 text-2xl m-2 bg-red-600 text-white border-0 focus:ring-2 ring-slate-700 rounded-lg border-black hover:text-3xl transition-all duration-300 w-1/3 font-bold'><Link to={'/computer'}>Computer</Link></button>  
          <button className='py-5 text-2xl m-2 bg-red-600 text-white border-0 focus:ring-2 ring-slate-700 rounded-lg border-black hover:text-3xl transition-all duration-300 w-1/3'><Link to={'/mobile'}>Mobiles</Link></button>  
          <button className='py-5 text-2xl m-2 bg-red-600 text-white border-0 focus:ring-2 ring-slate-700 rounded-lg border-black hover:text-3xl transition-all duration-300 w-1/3'><Link to={'watch'}>Watches</Link></button>  
          <button className='py-5 text-2xl m-2 bg-red-600 text-white border-0 focus:ring-2 ring-slate-700 rounded-lg border-black hover:text-3xl transition-all duration-300 w-1/3'><Link to={'accessories'}>Accessories</Link></button>
          <button className='py-5 text-2xl m-2 bg-red-600 text-white border-0 focus:ring-2 ring-slate-700 rounded-lg border-black hover:text-3xl transition-all duration-300 w-1/3'><Link to={'laptop'}>laptops</Link></button>    
          </main>
          <div className="all-button my-16 w-full flex justify-center">
          <button className='py-5 text-2xl m-2 bg-red-600 text-white border-0 focus:ring-2 ring-slate-700 rounded-lg border-black hover:text-3xl transition-all duration-300 w-1/2'><Link to={'all'}>Show All</Link></button>    
          </div>
      </div>
    </>
  )
}

export default Home