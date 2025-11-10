import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      setLoading(true);
      const fetchedLaptops = await fakeFetch([
        {
          id: 1,
          name: "Dell XPS 15",
          price: 1599,
          image: "https://via.placeholder.com/400x300?text=Dell+XPS+15",
          badge: "Best Seller",
        },
        {
          id: 2,
          name: "MacBook Pro 14\"",
          price: 1999,
          image: "https://via.placeholder.com/400x300?text=MacBook+Pro+14",
          badge: "Premium",
        },
        {
          id: 3,
          name: "HP Spectre x360",
          price: 1299,
          image: "https://via.placeholder.com/400x300?text=HP+Spectre",
          badge: "Editor\'s Pick",
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
        { id: 1, name: "Alice", text: "Absolutely love my MacBook Pro. Super smooth experience!" },
        { id: 2, name: "James", text: "Dell XPS runs like a dream. Perfect for developers." },
        { id: 3, name: "Maria", text: "HP Spectre is lightweight and powerful. Great battery life!" },
      ]);

      setLaptops(fetchedLaptops);
      setBundles(fetchedBundles);
      setTestimonials(fetchedTestimonials);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      {/* Header */}
      <header className="bg-gray-900 text-white py-5 px-6 flex flex-col md:flex-row items-center justify-between">
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
          <a href="/products" className="bg-blue-600 px-6 py-3 rounded text-lg font-medium hover:bg-blue-700 transition">Shop Laptops</a>
          <a href="/bundleoffers" className="bg-white text-blue-700 px-6 py-3 rounded text-lg font-medium hover:bg-gray-100 transition">View Bundles</a>
        </div>
      </section>

      {/* Loader */}
      {loading ? (
        <div className="py-24 flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
        </div>
      ) : (
        <>
          {/* Featured Products */}
          <section className="py-12 px-4 max-w-7xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-8">Featured Laptops</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {laptops.map((laptop) => (
                <article key={laptop.id} className="bg-white border rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
                  <img src={laptop.image} alt={laptop.name} className="w-full h-48 object-cover" />
                  <div className="p-5 text-center">
                    <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">{laptop.badge}</span>
                    <h4 className="text-xl font-semibold mb-1">{laptop.name}</h4>
                    <p className="text-lg text-gray-600 mb-4">${laptop.price.toLocaleString()}</p>
                    <div className="flex justify-center gap-3">
                      <a href={`/products/${laptop.id}`} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">View</a>
                      <button className="bg-gray-100 px-4 py-2 rounded hover:bg-gray-200">Add to Cart</button>
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
                <a href="/bundleoffers" className="text-blue-600 hover:underline">See all bundles</a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {bundles.map((b) => (
                  <div key={b.id} className="bg-white rounded-lg shadow-sm overflow-hidden flex">
                    <img src={b.image} alt={b.name} className="w-1/3 object-cover hidden sm:block" />
                    <div className="p-5 flex-1">
                      <h4 className="text-xl font-semibold mb-2">{b.name}</h4>
                      <p className="text-gray-600 mb-4">Starting at <span className="font-bold text-blue-600">${b.discountedPrice.toLocaleString()}</span></p>
                      <div className="flex gap-3">
                        <a href={`/bundleoffers/${b.id}`} className="bg-blue-600 text-white px-4 py-2 rounded">View Bundle</a>
                        <button className="bg-gray-100 px-4 py-2 rounded">Add Bundle</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Preview */}
          <section className="py-12 px-4 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-bold">What Our Customers Say</h3>
              <a href="/UserTestimonials" className="text-blue-600 hover:underline">Read more</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.id} className="bg-white rounded-lg shadow-sm p-5">
                  <p className="italic text-gray-700">"{t.text}"</p>
                  <p className="font-semibold text-right mt-4">- {t.name}</p>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 text-center mt-8">
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