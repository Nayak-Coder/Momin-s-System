import React, { useEffect, useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulate fetching products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Replace this with actual API call
        const response = await new Promise((resolve) =>
          setTimeout(() => {
            resolve([
              {
                id: 1,
                name: 'Wireless Headphones',
                price: 59.99,
                image: 'https://via.placeholder.com/300x200',
              },
              {
                id: 2,
                name: 'Bluetooth Speaker',
                price: 29.99,
                image: 'https://via.placeholder.com/300x200',
              },
              {
                id: 3,
                name: 'Smart Watch',
                price: 99.99,
                image: 'https://via.placeholder.com/300x200',
              },
              {
                id: 4,
                name: 'Smart Watch',
                price: 99.98,
                image: 'https://via.placeholder.com/300x200',
              },
              {
                id: 5,
                name: 'Smart Watch',
                price: 99.97,
                image: 'https://via.placeholder.com/300x200',
              },
              {
                id: 6,
                name: 'Simple Watch',
                price: 99.97,
                image: 'https://via.placeholder.com/300x200',
              },
            ]);
          }, 1000)
        );
        setProducts(response);
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Products</h1>

      {loading && <p className="text-gray-600">Loading products...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;