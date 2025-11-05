import React from 'react';

const laptops = [
  {
    id: 1,
    name: 'Dell XPS 15',
    price: '$1,599',
    image: 'https://via.placeholder.com/200x150?text=Dell+XPS+15',
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'MacBook Pro 14"',
    price: '$1,999',
    image: 'https://via.placeholder.com/200x150?text=MacBook+Pro+14',
    badge: 'Premium',
  },
  {
    id: 3,
    name: 'HP Spectre x360',
    price: '$1,299',
    image: 'https://via.placeholder.com/200x150?text=HP+Spectre+x360',
    badge: 'Editor\'s Pick',
  },
];

const HomePage = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Header */}
      <header className="bg-gray-900 text-white py-5 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">Laptop Store</h1>
        <nav className="space-x-6 text-sm">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/products" className="hover:text-gray-400">Products</a>
          <a href="/tech" className="hover:text-gray-400">Tech Specs</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
          <a href="/cart" className="hover:text-gray-400">Cart</a>
          <a href="/bundleoffers" className="hover:text-gray-400">Deals</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-[url('https://via.placeholder.com/1600x600')] bg-cover bg-center text-white py-24 px-6 text-center">
        <h2 className="text-5xl font-bold mb-4 drop-shadow-lg">Elevate Your Workflow</h2>
        <p className="text-xl mb-6 drop-shadow-md">Explore laptops engineered for power, speed, and mobility.</p>
        <button className="bg-blue-600 px-8 py-3 rounded text-lg font-medium hover:bg-blue-700 transition">
          Browse Collection
        </button>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-12">Featured Laptops</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {laptops.map((laptop) => (
            <div key={laptop.id} className="border rounded-xl shadow-md hover:shadow-xl transition">
              <img src={laptop.image} alt={laptop.name} className="w-full h-48 object-cover rounded-t-xl" />
              <div className="p-5 text-center">
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  {laptop.badge}
                </span>
                <h4 className="text-2xl font-semibold mb-1">{laptop.name}</h4>
                <p className="text-lg text-gray-600 mb-4">{laptop.price}</p>
                <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Highlights */}
      <section className="bg-gray-50 py-20 px-6">
        <h3 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h3>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h4 className="text-xl font-semibold mb-2">Cutting-Edge Performance</h4>
            <p>Equipped with the latest Intel & Apple M-series processors for blazing speed and multitasking.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">All-Day Battery Life</h4>
            <p>Work or play for up to 18 hours on a single charge. Portability meets endurance.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Crystal Clear Displays</h4>
            <p>4K and Retina displays offer vivid colors, sharp details, and true-to-life visuals.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h3>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "Alice", text: "Absolutely love my MacBook Pro. Super smooth experience!" },
            { name: "James", text: "Dell XPS runs like a dream. Perfect for developers." },
            { name: "Maria", text: "HP Spectre is lightweight and powerful. Great battery life!" }
          ].map((review, i) => (
            <div key={i} className="border p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <p className="italic mb-3">"{review.text}"</p>
              <p className="font-semibold text-right">- {review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
        <p className="mb-6">Get the latest tech news and exclusive deals straight to your inbox.</p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded text-gray-800"
          />
          <button type="submit" className="bg-gray-900 px-6 py-2 rounded hover:bg-black transition">
            Subscribe
          </button>
        </form>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gray-100">
        <h3 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h3>
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h4 className="font-semibold text-xl mb-2">Do laptops come with a warranty?</h4>
            <p>Yes, all laptops come with a 1-year manufacturer warranty. Extended warranty options are available.</p>
          </div>
          <div>
            <h4 className="font-semibold text-xl mb-2">Can I return or exchange a laptop?</h4>
            <p>Absolutely. We offer a 30-day return or exchange policy for all purchases.</p>
          </div>
          <div>
            <h4 className="font-semibold text-xl mb-2">Do you offer financing?</h4>
            <p>Yes. Financing options are available at checkout through our partners.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 text-white py-16 text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to Upgrade?</h3>
        <p className="mb-6 text-lg">Get the performance you need and the design you love.</p>
        <button
          onClick={() => window.location.href = "/products"}
          className="bg-blue-600 px-8 py-3 text-lg rounded hover:bg-blue-700 transition"
        >
          Explore Laptops
        </button>
      </section>

     
        <footer className="bg-gray-900 text-white py-10 text-center">
          <div className="mb-4">
            <p className="text-sm">&copy; 2025 Laptop Store. All rights reserved.</p>
          </div>
          <div className="flex justify-center space-x-6 mt-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <svg className="w-5 h-5 inline-block" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11.5 9.87v-7H8v-2.87h2.5v-2.2c0-2.48 1.48-3.87 3.76-3.87 1.09 0 2.23.2 2.23.2v2.44h-1.26c-1.24 0-1.62.77-1.62 1.56v1.87H17l-.4 2.87h-2.26v7A10 10 0 0022 12z"/>
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <svg className="w-5 h-5 inline-block" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.43.36a9.14 9.14 0 01-2.83 1.08A4.48 4.48 0 0016.11 0c-2.5 0-4.52 2.28-4.52 5.09 0 .4.04.79.13 1.17A12.94 12.94 0 013 1.64 5.09 5.09 0 003.64 8a4.48 4.48 0 01-2.05-.56v.06c0 2.45 1.6 4.49 3.73 4.96a4.52 4.52 0 01-2.04.08 4.51 4.51 0 004.22 3.21A9.03 9.03 0 012 19.54 12.77 12.77 0 008.29 21c7.54 0 11.67-6.72 11.67-12.54 0-.19-.01-.38-.02-.57A8.51 8.51 0 0023 3z"/>
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <svg className="w-5 h-5 inline-block" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.5a1.5 1.5 0 11-3 .001 1.5 1.5 0 013-.001z"/>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;