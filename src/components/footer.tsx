import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className=" text-black py-8">
      {/* Upper Footer */}
      <div className="container mx-auto flex flex-wrap justify-between items-center py-8 px-6 pb-8 border-b bg-gray-100 border-gray-700">
        {/* Logo */}
        <div className="text-lg font-semibold">Bandage</div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Lower Footer */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 px-6 pt-8">
        {/* Column 1 */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Company Info</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/about-us" className="hover:text-gray-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/career" className="hover:text-gray-400">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/hiring" className="hover:text-gray-400">
                We Are Hiring
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gray-400">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/help-center" className="hover:text-gray-400">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="/returns" className="hover:text-gray-400">
                Returns
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="hover:text-gray-400">
                Shipping
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-gray-400">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Resources</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy-policy" className="hover:text-gray-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-gray-400">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/sitemap" className="hover:text-gray-400">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/new-arrivals" className="hover:text-gray-400">
                New Arrivals
              </Link>
            </li>
            <li>
              <Link href="/best-sellers" className="hover:text-gray-400">
                Best Sellers
              </Link>
            </li>
            <li>
              <Link href="/offers" className="hover:text-gray-400">
                Offers
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
          <form>
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-lg bg-gray-700 text-white placeholder-gray-400 outline-none w-full"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
