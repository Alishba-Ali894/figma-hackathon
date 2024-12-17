import React from "react";

const Hero4: React.FC = () => {
  return (
    <section className="flex items-center justify-around my-24 py-0 px-6 bg-green-600">
      {/* Left Side Content */}
      <div className="flex flex-col justify-start w-full md:w-1/2 space-y-4">
        {/* "SUMMER 2020" Text */}
        <p className="text-lg font-semibold text-gray-600">SUMMER 2020</p>

        {/* Product Name */}
        <h1 className="text-4xl font-bold text-gray-800">Vita Classic</h1>
        <h1 className="text-4xl font-bold text-gray-800">Product</h1>

        {/* Descriptive Text */}
        <p className="text-lg text-gray-700">
          We know how large objects will act, We know
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          How are objects will act we know
        </p>

        {/* Price and Button */}
        <div className="flex items-center space-x-4">
          <h3 className="text-2xl font-semibold text-gray-800">$16.6</h3>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            ADD TO CART
          </button>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="w-full md:w-1/2">
        <img
          src="/assets/shop-hero-2-png-picture-1.png" // Replace with your image URL
          alt="Vita Classic Product"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </section>
  );
};

export default Hero4;
