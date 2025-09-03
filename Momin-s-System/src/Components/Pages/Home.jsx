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

     
