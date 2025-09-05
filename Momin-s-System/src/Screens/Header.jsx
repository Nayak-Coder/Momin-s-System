import React from 'react';
import logo from '../assets/logo.jpg';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="TechLaptop Store Logo" className="h-12 w-12 rounded-full shadow-md border-2 border-white" />
          <span className="text-2xl font-extrabold text-white tracking-wide drop-shadow-lg">TechLaptop Store</span>
        </a>
        <nav className="hidden md:flex gap-8 text-lg font-semibold">
          <a href="/" className="text-white hover:text-blue-200 transition">Home</a>
          <a href="/products" className="text-white hover:text-blue-200 transition">Products</a>
          <a href="/tech" className="text-white hover:text-blue-200 transition">Tech</a>
          <a href="/marketplace" className="text-white hover:text-blue-200 transition">Marketplace</a>
          <a href="/aboutus" className="text-white hover:text-blue-200 transition">About Us</a>
          <a href="/contact" className="text-white hover:text-blue-200 transition">Contact</a>
        </nav>
        <div className="hidden md:flex">
          <a href="/login" className="bg-white text-blue-700 px-6 py-2 rounded-full font-bold shadow hover:bg-blue-100 transition">Log in</a>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button type="button" className="text-white focus:outline-none">
            <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;