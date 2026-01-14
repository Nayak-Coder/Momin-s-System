import React from 'react';
import { FaShoppingCart, FaMoon, FaSun, FaHeart } from 'react-icons/fa';
import { useCart } from '../Context/CartContext';
import { useWishlist } from '../Context/WishlistContext';
import { useTheme } from '../Context/ThemeContext';
import logo from '../assets/logo.jpg';

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <header className="bg-gradient-to-r from-green-900 via-green-700 to-amber-200 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="TechLaptop Store Logo" className="h-12 w-12 rounded-full shadow-md border-2 border-white" />
          <span className="text-2xl font-extrabold text-white tracking-wide drop-shadow-lg">TechLaptop Store</span>
        </a>
        <nav className="hidden md:flex gap-8 text-lg font-semibold">
          <a href="/" className="text-white hover:text-amber-200 transition">Home</a>
          <a href="/products" className="text-white hover:text-amber-200 transition">Products</a>
          <a href="/tech" className="text-white hover:text-amber-200 transition">Tech</a>
          <a href="/marketplace" className="text-white hover:text-amber-200 transition">Marketplace</a>
          <a href="/aboutus" className="text-white hover:text-amber-200 transition">About Us</a>
          <a href="/contact" className="text-white hover:text-amber-200 transition">Contact</a>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition text-white"
            title="Toggle dark mode"
          >
            {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
          <a href="/wishlist" className="relative inline-flex items-center text-white/90 hover:text-white" title="Wishlist">
            <FaHeart size={20} />
            <WishlistCount />
          </a>
          <a href="/login" className="bg-white text-green-700 px-6 py-2 rounded-full font-bold shadow hover:bg-amber-100 transition">Log in</a>
          {/* Cart icon with count */}
          <CartStatus />
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

const CartStatus = () => {
  try {
    const { totalCount } = useCart();
    return (
      <a href="/cart" className="relative inline-flex items-center text-white/90 hover:text-white">
        <FaShoppingCart className="text-green-50" />
        {totalCount > 0 && (
          <span className="absolute -right-2 -top-2 inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold leading-none text-white bg-green-600 rounded-full">
            {totalCount}
          </span>
        )}
      </a>
    );
  } catch (e) {
    // If used outside provider, show fallback
    return (
      <a href="/cart" className="relative inline-flex items-center text-white/90 hover:text-white">
        <FaShoppingCart className="text-green-50" />
      </a>
    );
  }
};

const WishlistCount = () => {
  try {
    const { wishlist } = useWishlist();
    return wishlist.length > 0 ? (
      <span className="absolute -right-2 -top-2 inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
        {wishlist.length}
      </span>
    ) : null;
  } catch (e) {
    return null;
  }
};

export default Header;