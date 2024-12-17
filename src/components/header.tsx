import React, { useState } from "react";
import Link from "next/link";
import {
  FaBars,
  FaTimes,
  FaUser,
  FaShoppingCart,
  FaHeart,
  FaSearch,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const DoubleNavbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      {/* Upper Header */}
      <div className="bg-gray-900 text-white text-sm">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          {/* Left */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <FaPhoneAlt />
              <span>+123-456-7890</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaEnvelope />
              <span>info@bandage.com</span>
            </div>
          </div>

          {/* Center */}
          <div className="hidden md:block text-center">
            <span className="font-semibold">
              Follow Up and Get Chance to Win 80% Off
            </span>
          </div>

          {/* Right */}
          <div className="flex items-center space-x-4">
            <span>Follow us:</span>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Lower Header */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          {/* Left: Logo */}
          <div className="text-lg font-bold">
            <Link href="/">Bandage</Link>
          </div>

          {/* Right: Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} aria-label="Toggle menu">
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Center Menu (Desktop Only) */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
           
                <Link href="/shop">Shop</Link>
              
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/pages">Pages</Link>
          </nav>

          {/* Right: Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FaUser />
              <Link href="/login">Login/Register</Link>
            </div>
            <FaSearch />
            <FaShoppingCart />
            <FaHeart />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-100">
            <nav className="space-y-4 py-4 px-4">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <div className="relative">
                <button className="w-full text-left hover:text-gray-700">
                  Shop
                </button>
                {/* Dropdown for Shop */}
                <div className="pl-4 mt-2">
                  <Link href="/shop/category1">Category 1</Link>
                  <Link href="/shop/category2">Category 2</Link>
                </div>
              </div>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/pages">Pages</Link>
              <div className="flex items-center space-x-4 pt-4 border-t">
                <div className="flex items-center space-x-2">
                  <FaUser />
                  <Link href="/login">Login/Register</Link>
                </div>
                <FaSearch />
                <FaShoppingCart />
                <FaHeart />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default DoubleNavbar;
