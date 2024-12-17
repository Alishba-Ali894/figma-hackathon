import React from "react";

const Hero3: React.FC = () => {



    let array = ["/assets/filter.png","./assets/product-cover-5.png","./assets/filter (1).png"]
  return (
    <section className="py-12">
      {/* Heading and Paragraph */}
      <div className="text-center mb-8">
        <h5 className="text-2xl font-semibold text-gray-600">Featured Prodcuts</h5>
        <h2 className="text-2xl font-bold mt-4">BESTSELLER PRODUCTS</h2>
        <p className="mt-4 text-lg text-gray-700">
          Problem trying to resolve the conflict between
        </p>
      </div>

      {/* Product Cards Section */}
      <div className="flex flex-wrap justify-center gap-6 h-full">
        {/* First Product Card */}
        {array.map((item)=>{
          return   <div className="w-full md:w-1/3 lg:w-1/4 bg-white rounded-lg p-6">
          <img
            src={`${item}`} // Replace with your image URL
            alt="Product 1"
            className="w-full h-1/2 rounded-sm"
          />
          <div className="text-center mt-4">
            <h4 className="text-xl font-semibold">Product Name 1</h4>
            <span className="block text-gray-500 mt-2">Collection Name 1</span>
            {/* Price and Discount on the Same Line */}
            <div className="flex justify-center gap-4 mt-2">
              <span className="text-gray-600 font-bold">$16.7</span>
              <span className="text-green-500 font-bold">$6.5</span>
            </div>
          </div>
          {/* Small Circles */}
          <div className="flex gap-2 mt-4 justify-center">
            <span className="w-4 h-4 rounded-full bg-red-500"></span>
            <span className="w-4 h-4 rounded-full bg-blue-500"></span>
            <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
            <span className="w-4 h-4 rounded-full bg-green-500"></span>
          </div>
        </div>
        })}

      </div>
    </section>
  );
};

export default Hero3;
