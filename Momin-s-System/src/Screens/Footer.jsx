import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 ">
            <a href="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-500">
                TechLaptop Store
              </span>
            </a>
            <p className="mt-4 max-w-xs text-gray-400">
              Your trusted partner for high-quality laptops and computing accessories. We offer the latest technology with competitive prices.
            </p>
           
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">Products</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Gaming Laptops</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Business Laptops</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Accessories</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Software</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">Company</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">About Us</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Careers</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Brand Center</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Blog</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">Support</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Contact Us</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Shipping Info</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Returns</a>
                </li>
                <li>
                  <a href="/UserTestimonials" className="hover:underline">User Feedbacks</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center">
            © 2025 <a href="/" className="hover:underline">TechLaptop Store™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook className="w-5 h-5" />
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram className="w-5 h-5" />
              <span className="sr-only">Instagram page</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter className="w-5 h-5" />
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn page</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaYoutube className="w-5 h-5" />
              <span className="sr-only">YouTube channel</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-gray-500">
          <p>Prices and specifications may change without notice. TechLaptop Store is not responsible for typographical errors.</p>
        </div>
      </div>  
    </footer>
  );
};

export default Footer;
