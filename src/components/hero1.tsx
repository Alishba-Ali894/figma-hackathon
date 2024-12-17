import React from "react";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image on the Left */}
      <div
        className="absolute inset-0 w-full md:w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/shop-hero-1-product-slide-1.jpg')", // Replace with your background image URL
        }}
      >
        {/* Left Section with Text */}
        <div className="flex flex-col justify-center items-start text-white p-6 h-full ml-40">
  <span className="text-xl font-semibold">Summer 2020</span>
  <h2 className="text-4xl font-bold mt-6">New Collection</h2> {/* Increased spacing */}
  <p className="mt-6">We know how large objects will act.</p> {/* Increased spacing */}
  <p className="">But things on a small scale.</p> {/* Increased spacing */}
  <Link href="/shop">
    <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
      Shop Now
    </button>
  </Link>
</div>

      </div>

      {/* Right Section (Optional) */}
      <div className="absolute inset-0 w-full md:w-1/2 h-full bg-white bg-opacity-60">
        {/* Optional content */}
      </div>
    </section>
  );
};

export default HeroSection;
