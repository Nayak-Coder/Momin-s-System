import React from 'react';

const laptops = [
  {
    id: 1,
    name: 'Dell XPS 15',
    price: '$1,599',
    image: 'https://via.placeholder.com/200x150?text=Dell+XPS+15'
  },
  {
    id: 2,
    name: 'MacBook Pro 14"',
    price: '$1,999',
    image: 'https://via.placeholder.com/200x150?text=MacBook+Pro+14'
  },
  {
    id: 3,
    name: 'HP Spectre x360',
    price: '$1,299',
    image: 'https://via.placeholder.com/200x150?text=HP+Spectre+x360'
  },
];

const HomePage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-gray-900 text-white py-5 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Laptop Store</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">Products</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
          <a href="#" className="hover:text-gray-400">Cart</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 py-16 text-center px-4">
        <h2 className="text-4xl font-bold mb-4">Your Next Laptop Awaits</h2>
        <p className="text-lg mb-6">High performance, sleek design, unbeatable prices.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
          Shop Now
        </button>
      </section>

      {/* Featured Laptops */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-10">Featured Laptops</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {laptops.map((laptop) => (
            <div
              key={laptop.id}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img src={laptop.image} alt={laptop.name} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h4 className="text-xl font-semibold mb-2">{laptop.name}</h4>
                <p className="text-gray-700 mb-4">{laptop.price}</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>© 2025 Laptop Store. All rights reserved.</p>
      </footer>
    </div>
  );
};
export default HomePage;