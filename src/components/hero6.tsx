import React from "react";
import { FaClock, FaCommentDots, FaArrowLeft } from "react-icons/fa"; // For clock and comment icons
import Link from "next/link";

const Hero6: React.FC = () => {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto text-center">
        {/* Practice Advise and Features Posts */}
        <p className="text-sm text-gray-600">Practice Advise</p>
        <h2 className="text-3xl font-semibold mt-4">Features Posts</h2>
        <p className="text-sm text-gray-600 mt-4">Problem trying to resolve the conflict between</p>
        <p className="text-sm text-gray-600">The two major realms of Classical Physics Newtonian Mechanics</p>

        {/* Product Cards */}
        <div className="mt-8 flex flex-wrap gap-8 justify-center">
          {/* Product Card 1 */}
          <div className="relative bg-white w-72 shadow-md overflow-hidden">
            <img
              src="/assets/unsplash_hHdHCfAifHU.png" // Replace with your image URL
              alt="Product 1"
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs font-semibold">
              New
            </div>
            <div className="p-4 text-left"> {/* Text aligned to the left */}
              <div className="flex justify-between text-sm text-gray-600">
                <a href="#" className="hover:underline">Google Trending New</a>
              </div>
              <p className="text-md font-light mt-2">hello world how #1</p>
              <p className="text-md font-light text-gray-500">(H'Helllooo)</p>
              <p className="text-sm text-gray-500 mt-2">
                Random paragraph with some content about 15 to 16 words here.
              </p>
              {/* Flexbox for clock and comment */}
              <div className="flex justify-between mt-4">
                <div className="flex items-center text-sm text-gray-500">
                  <FaClock className="mr-2" /> 22 April 2021
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <FaCommentDots className="mr-2" /> 10 Comments
                </div>
              </div>
              <div className="mt-4">
                <Link href="#" className="text-blue-600 flex items-center">
                  Learn More <FaArrowLeft className="ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="relative bg-white w-72  shadow-md overflow-hidden">
            <img
              src="/assets/unsplash_tVEqStC2uz8.png" // Replace with your image URL
              alt="Product 2"
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs font-semibold">
              New
            </div>
            <div className="p-4 text-left"> {/* Text aligned to the left */}
              <div className="flex justify-between text-sm text-gray-600">
                <a href="#" className="hover:underline">Google Trending New</a>
              </div>
              <p className="text-md font-light mt-2">hello world how #1</p>
              <p className="text-md font-light text-gray-500">(H'Helllooo)</p>
              <p className="text-sm text-gray-500 mt-2">
                Random paragraph with some content about 15 to 16 words here.
              </p>
              {/* Flexbox for clock and comment */}
              <div className="flex justify-between mt-4">
                <div className="flex items-center text-sm text-gray-500">
                  <FaClock className="mr-2" /> 22 April 2021
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <FaCommentDots className="mr-2" /> 10 Comments
                </div>
              </div>
              <div className="mt-4">
                <a href="#" className="text-blue-600 flex items-center">
                  Learn More <FaArrowLeft className="ml-2" />
                </a>
              </div>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="relative bg-white w-72  shadow-md overflow-hidden">
            <img
              src="/assets/unsplash_dEGu-oCuB1Y.png" // Replace with your image URL
              alt="Product 3"
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs font-semibold">
              New
            </div>
            <div className="p-4 text-left"> {/* Text aligned to the left */}
              <div className="flex justify-between text-sm text-gray-600">
                <a href="#" className="hover:underline">Google Trending New</a>
              </div>
              <p className="text-md font-light mt-2">hello world how #1</p>
              <p className="text-md font-light text-gray-500">(H'Helllooo)</p>
              <p className="text-sm text-gray-500 mt-2">
                Random paragraph with some content about 15 to 16 words here.
              </p>
              {/* Flexbox for clock and comment */}
              <div className="flex justify-between mt-4">
                <div className="flex items-center text-sm text-gray-500">
                  <FaClock className="mr-2" /> 22 April 2021
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <FaCommentDots className="mr-2" /> 10 Comments
                </div>
              </div>
              <div className="mt-4">
                <a href="#" className="text-blue-600 flex items-center">
                  Learn More <FaArrowLeft className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero6;
