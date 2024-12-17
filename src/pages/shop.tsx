import React from 'react'
import DoubleNavbar from '@/components/header'
import Footer from '@/components/footer';
import Hero3 from '@/components/hero3';
import { url } from 'inspector';
const shop = () => {

  const images = [
   
    "./assets/col-md-1.png", 
    "./assets/col-md-2.png", 
    "./assets/col-md-3.png", 
    "./assets/col-md-5.png", 
    "./assets/col-md-4.png", 
    
  ];
  const logos = [
    "./assets/vector.png", 
    "./assets/vector (1).png", 
    "./assets/vector (2).png", 
    "./assets/vector (3).png", 
    "./assets/vector (4).png", 
    "./assets/vector (5).png", 
    "./assets/vector (6).png"
  ];
  return (
    <>
    <DoubleNavbar />
    <nav className="flex items-center justify-between flex-row p-4 bg-gray-200 text-black">
      {/* Left-hand side logo */}
      <div className="text-lg font-bold">
        <a href="/">MyLogo</a>
      </div>

      {/* Right-hand side links */}
      <div className="text-sm space-x-2">
        <a href="/home" className="hover:underline">Home</a>
        <span>&gt;</span>
        <a href="/shop" className="hover:underline text-gray-100">Shop</a>
      </div>
    </nav>
    <section className="flex flex-row items-center justify-between space-x-3 py-8 overflow-x-auto ">
      {images.map((item, index) => (
        <div
        style={{ backgroundImage: `url(${item})` }}
          key={index}
          
          className="w-full h-64 bg-cover bg-center"
        >
         
        </div>
      ))}
    </section>
    <section className="flex flex-wrap items-center justify-center gap-6 py-8 bg-gray-100">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center rounded-lg shadow-lg"
        >
          <img src={logo} alt={`Brand ${index + 1}`} className="max-w-full max-h-full" />
        </div>
      ))}
    </section>
    <Footer />
    <Hero3 />
    <div className="flex justify-center items-center space-x-2 py-4">
      {/* First Button */}
      <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
        First
      </button>

      {/* Page Numbers */}
      <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
        1
      </button>
      <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
        2
      </button>
      <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
        3
      </button>

      {/* Next Button */}
      <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
        Next
      </button>
    </div>
    </>
  )
}

export default shop