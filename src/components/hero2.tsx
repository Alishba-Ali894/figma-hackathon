import React from "react";
import Link from "next/link";

const Hero2: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      {/* Heading and Paragraph */}
      <div className="text-center mb-8">
        <h3 className="text-3xl font-semibold">EDITOR'S PICK</h3>
        <p className="mt-4 text-lg text-gray-700">
          Problem trying to resolve the conflict between
        </p>
      </div>

      {/* Images Section */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* First Image */}
        <div className="relative w-full md:w-1/2 lg:w-1/3  ">
          <img
            src="./assets/filter.png" // Replace with your image URL
            alt="Men's"
            className="w-full h-80 rounded-lg"
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
            <Link href="/men">
              <span className="text-lg font-semibold cursor-pointer">Men's</span>
            </Link>
          </div>
        </div>

        {/* Second Image */}
        <div className="relative w-full md:w-1/2 lg:w-1/4">
          <img
            src="/assets/filter (1).png" // Replace with your image URL
            alt="Women's"
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
            <Link href="/women">
              <span className="text-lg font-semibold cursor-pointer">Women's</span>
            </Link>
          </div>
        </div>

        {/* Fourth Image */}
        <div className="relative w-full md:w-1/2 lg:w-1/4">
          <img
            src="/assets/product-cover-5.png" // Replace with your image URL
            alt="Kids"
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
            <Link href="/kids">
              <span className="text-lg font-semibold cursor-pointer">Kids</span>
            </Link>
          </div>
        </div>
        

        {/* Third Image */}
        <div className="relative w-full md:w-1/2 lg:w-1/4">
          <img
            src="/assets/product-cover-5.png" // Replace with your image URL
            alt="Accessories"
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
            <Link href="/accessories">
              <span className="text-lg font-semibold cursor-pointer">Accessories</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
