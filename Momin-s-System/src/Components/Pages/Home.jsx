import React, { useEffect, useState } from "react";
import ChatWidget from '../Chat/ChatWidget';
import { useCart } from '../../Context/CartContext';

const fakeFetch = (data, delay = 600) =>
  new Promise((res) => setTimeout(() => res(data), delay));

const initialLaptops = [];
const initialBundles = [];
const initialTestimonials = [];

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [laptops, setLaptops] = useState(initialLaptops);
  const [bundles, setBundles] = useState(initialBundles);
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [selectedTab, setSelectedTab] = useState('New Arrivals');
  const tabs = ['New Arrivals', 'On Sale', 'Gaming Laptops'];

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      setLoading(true);
      const fetchedLaptops = await fakeFetch([
        {
          id: 1,
          name: "Lenovo LOQ 15IRX9",
          price: 250000,
          oldPrice: null,
          image: "https://via.placeholder.com/400x300?text=Lenovo+LOQ+15IRX9",
          badge: "New Arrival",
          category: 'new',
          categoryLabel: '13th Generation Laptops',
        },
        {
          id: 2,
          name: "Lenovo LOQ 15IRX10",
          price: 373000,
          oldPrice: 395000,
          image: "https://via.placeholder.com/400x300?text=Lenovo+LOQ+15IRX10",
          badge: "Gaming",
          category: 'gaming',
          categoryLabel: '144Hz Laptops in Pakistan',
        },
        {
          id: 3,
          name: "Lenovo LOQ 15IRX10 (i7)",
          price: 360000,
          oldPrice: null,
          image: "https://via.placeholder.com/400x300?text=Lenovo+LOQ+15IRX10+%28i7%29",
          badge: "Editor\'s Pick",
          category: 'gaming',
          categoryLabel: '144Hz Laptops in Pakistan',
        },
        {
          id: 4,
          name: "Lenovo LOQ 15IRX9 (i7)",
          price: 270000,
          oldPrice: null,
          image: "https://via.placeholder.com/400x300?text=Lenovo+LOQ+15IRX9+i7",
          badge: "New Arrival",
          category: 'new',
          categoryLabel: '13th Generation Laptops',
        },
        {
          id: 5,
          name: "MacBook Pro 14\"",
          price: 199900,
          oldPrice: 219900,
          image: "https://via.placeholder.com/400x300?text=MacBook+Pro+14",
          badge: "Premium",
          category: 'sale',
          categoryLabel: 'On Sale',
        },
      ]);

      const fetchedBundles = await fakeFetch([
        {
          id: 1,
          name: "Student Starter Pack",
          discountedPrice: 999,
          image: "https://via.placeholder.com/600x400?text=Student+Bundle",
        },
        {
          id: 2,
          name: "Gaming Excellence Pack",
          discountedPrice: 2499,
          image: "https://via.placeholder.com/600x400?text=Gaming+Bundle",
        },
      ]);

      const fetchedTestimonials = await fakeFetch([
        { id: 1, name: "Bora Najab", role: "Graphic Designer", image: "https://via.placeholder.com/80x80?text=Alice", rating: 5, text: "Absolutely love my MacBook Pro. Super smooth experience!", product: "MacBook Pro" },
        { id: 2, name: "Alay Alex", role: "Software Developer", image: "https://via.placeholder.com/80x80?text=James", rating: 5, text: "Dell XPS runs like a dream. Perfect for developers.", product: "Dell XPS" },
        { id: 3, name: "Mahreen Rind", role: "Content Initiator", image: "https://via.placeholder.com/80x80?text=Maria", rating: 4, text: "HP Spectre is lightweight and powerful. Great battery life!", product: "HP Spectre" },
      ]);

      setLaptops(fetchedLaptops);
      setBundles(fetchedBundles);
      setTestimonials(fetchedTestimonials);
      setLoading(false);
    };

    fetchData();
  }, []);

  const { addItem } = useCart();

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-900 via-green-700 to-amber-200 text-white py-5 px-6 flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide mb-3 md:mb-0">TechLaptop Store</h1>
        <nav className="space-x-4 text-sm">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/products" className="hover:text-gray-400">Products</a>
          <a href="/tech" className="hover:text-gray-400">Tech</a>
          <a href="/bundleoffers" className="hover:text-gray-400">Bundles</a>
          <a href="/user-testimonials" className="hover:text-gray-400">Testimonials</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-[url('https://via.placeholder.com/1600x600?text=Tech+Hero')] bg-cover bg-center text-white py-24 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Performance. Portability. Power.</h2>
        <p className="text-lg md:text-xl mb-6 drop-shadow-md">Find laptops and bundles designed for developers, creators, students and gamers.</p>
        <div className="flex items-center justify-center gap-4">
          <a href="/products" className="bg-green-700 px-6 py-3 rounded text-lg font-medium hover:bg-green-800 transition">Shop Laptops</a>
          <a href="/bundleoffers" className="bg-white text-green-700 px-6 py-3 rounded text-lg font-medium hover:bg-amber-100 transition">View Bundles</a>
        </div>
      </section>

      {/* Loader */}
      {loading ? (
        <div className="py-24 flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-700"></div>
        </div>
      ) : (
        <>
          {/* Featured Products with Tabs */}
          <section className="py-12 px-4 max-w-7xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-6">Featured Laptops</h3>

            {/* Tabs */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-full md:w-2/3">
                <div className="relative">
                  <div className="flex gap-6 justify-start md:justify-center border-b pb-2">
                    {tabs.map((tab, idx) => {
                      const count = laptops.filter((l) => (tab === 'New Arrivals' ? l.category === 'new' : tab === 'On Sale' ? l.category === 'sale' : l.category === 'gaming')).length;
                      return (
                        <button
                          key={tab}
                          onClick={() => setSelectedTab(tab)}
                          className={`pb-3 text-sm md:text-base font-semibold flex items-center gap-2 ${selectedTab === tab ? 'text-green-700' : 'text-gray-600 hover:text-gray-800'}`}
                        >
                          <span>{tab}</span>
                          <span className="text-xs text-gray-400">({count})</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* animated underline */}
                  <div className="absolute left-0 right-0 top-full">
                    <div
                      className="mx-auto bg-green-700 h-0.5 rounded transition-all duration-300"
                      style={{
                        width: `${100 / tabs.length}%`,
                        transform: `translateX(${tabs.indexOf(selectedTab) * 100}%)`,
                        transformOrigin: 'left',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {laptops
                .filter((l) => {
                  if (selectedTab === 'New Arrivals') return l.category === 'new';
                  if (selectedTab === 'On Sale') return l.category === 'sale';
                  if (selectedTab === 'Gaming Laptops') return l.category === 'gaming';
                  return true;
                })
                .map((laptop) => (
                  <article key={laptop.id} className="bg-white border rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
                    <div className="p-4">
                      <div className="text-xs text-gray-500 uppercase mb-2">{laptop.categoryLabel}</div>
                      <h4 className="text-lg md:text-xl font-semibold mb-2">{laptop.name}</h4>
                    </div>
                    <img src={laptop.image} alt={laptop.name} className="w-full h-48 object-contain bg-white p-6" />
                    <div className="p-5 text-center">
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <span className="text-2xl font-bold text-green-700">Rs {laptop.price.toLocaleString()}</span>
                        {laptop.oldPrice && (
                          <span className="text-sm text-gray-400 line-through">Rs {laptop.oldPrice.toLocaleString()}</span>
                        )}
                      </div>
                      <div className="flex justify-center gap-3">
                        <a href={`/products/${laptop.id}`} className="text-green-700 font-semibold">View</a>
                        <button onClick={() => addItem({ id: laptop.id, name: laptop.name, price: laptop.price, image: laptop.image }, 1)} className="bg-gray-100 px-4 py-2 rounded hover:bg-gray-200">Add to Cart</button>
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          </section>

          {/* Bundles Preview */}
          <section className="bg-gray-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold">Bundle Offers</h3>
                <a href="/bundleoffers" className="text-green-700 hover:underline">See all bundles</a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {bundles.map((b) => (
                  <div key={b.id} className="bg-white rounded-lg shadow-sm overflow-hidden flex">
                    <img src={b.image} alt={b.name} className="w-1/3 object-cover hidden sm:block" />
                    <div className="p-5 flex-1">
                      <h4 className="text-xl font-semibold mb-2">{b.name}</h4>
                      <p className="text-gray-600 mb-4">Starting at <span className="font-bold text-green-700">${b.discountedPrice.toLocaleString()}</span></p>
                      <div className="flex gap-3">
                        <a href={`/bundleoffers/${b.id}`} className="bg-green-700 text-white px-4 py-2 rounded">View Bundle</a>
                        <button onClick={() => addItem({ id: `bundle-${b.id}`, name: b.name, price: b.discountedPrice, image: b.image }, 1)} className="bg-gray-100 px-4 py-2 rounded">Add Bundle</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Preview */}
          <section className="py-12 px-4 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold">What Our Customers Say</h3>
                <p className="text-gray-600 mt-2">Real reviews from our satisfied customers</p>
              </div>
              <a href="/user-testimonials" className="text-green-700 hover:underline font-semibold">Read all →</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t) => (
                <div key={t.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col">
                  {/* Star Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`h-4 w-4 ${i < t.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="italic text-gray-700 flex-grow">"{t.text}"</p>

                  {/* Divider */}
                  <div className="border-t my-4" />

                  {/* Customer Info */}
                  <div className="flex items-center gap-3">
                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 text-sm">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.role}</p>
                    </div>
                  </div>

                  {/* Product Tag */}
                  <div className="mt-4">
                    <span className="inline-block bg-amber-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {t.product}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* Chat widget (floating) */}
      <ChatWidget />

      {/* Footer */}
      <footer className="bg-gradient-to-r from-green-900 via-green-700 to-amber-200 text-white py-10 text-center mt-8">
        <div className="mb-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} TechLaptop Store. All rights reserved.</p>
        </div>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;