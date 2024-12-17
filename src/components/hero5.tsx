import React from "react";

const Hero5: React.FC = () => {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto flex gap-8 items-center justify-around space-x-6">
        {/* Left Side Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/assets/asian-woman-man-with-winter-clothes 1.png" // Replace with your image URL
            alt="Neural Universe"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-lg text-gray-500">Summer 2020</h2>
          <h1 className="text-4xl font-bold text-gray-800 mt-4">Part of the Neural</h1>
          <h1 className="text-4xl font-bold text-gray-800 mt-2">Universe</h1>
          <p className="text-lg text-gray-700 mt-4">We know how large objects will act,</p>
          <p className="text-lg text-gray-700 mt-2">but things on a small scale</p>

          {/* Buttons */}
          <div className="flex space-x-4 mt-6">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              BUY NOW
            </button>
            <button className="px-8 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero5;
