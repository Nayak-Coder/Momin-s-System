import React, { useEffect, useState } from 'react';
import { useCart } from '../../Context/CartContext';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addItem } = useCart();

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
                image: 'https://via.placeholder.com/300x200?text=Wireless+Headphones',
              },
              {
                id: 2,
                name: 'Bluetooth Speaker',
                price: 29.99,
                image: 'https://via.placeholder.com/300x200?text=Bluetooth+Speaker',
              },
              {
                id: 3,
                name: 'Smart Watch Pro',
                price: 99.99,
                image: 'https://via.placeholder.com/300x200?text=Smart+Watch+Pro',
              },
              {
                id: 4,
                name: 'USB-C Cable Pack',
                price: 19.99,
                image: 'https://via.placeholder.com/300x200?text=USB-C+Cable',
              },
              {
                id: 5,
                name: 'Portable Power Bank',
                price: 45.99,
                image: 'https://via.placeholder.com/300x200?text=Power+Bank',
              },
              {
                id: 6,
                name: 'Mechanical Keyboard RGB',
                price: 89.99,
                image: 'https://via.placeholder.com/300x200?text=RGB+Keyboard',
              },
              {
                id: 7,
                name: 'Gaming Mouse Pro',
                price: 49.99,
                image: 'https://via.placeholder.com/300x200?text=Gaming+Mouse',
              },
              {
                id: 8,
                name: 'Laptop Cooling Pad',
                price: 34.99,
                image: 'https://via.placeholder.com/300x200?text=Cooling+Pad',
              },
              {
                id: 9,
                name: '4K Webcam',
                price: 79.99,
                image: 'https://via.placeholder.com/300x200?text=4K+Webcam',
              },
              {
                id: 10,
                name: 'Wireless Keyboard Mouse Combo',
                price: 54.99,
                image: 'https://via.placeholder.com/300x200?text=Keyboard+Mouse+Combo',
              },
              {
                id: 11,
                name: 'USB Hub 7-Port',
                price: 39.99,
                image: 'https://via.placeholder.com/300x200?text=USB+Hub',
              },
              {
                id: 12,
                name: 'Wireless Phone Charger',
                price: 24.99,
                image: 'https://via.placeholder.com/300x200?text=Phone+Charger',
              },
              {
                id: 13,
                name: 'Laptop Stand Aluminum',
                price: 44.99,
                image: 'https://via.placeholder.com/300x200?text=Laptop+Stand',
              },
              {
                id: 14,
                name: 'Noise Cancelling Earbuds',
                price: 69.99,
                image: 'https://via.placeholder.com/300x200?text=Noise+Cancel+Earbuds',
              },
              {
                id: 15,
                name: 'HDMI 2.1 Cable 4K',
                price: 19.99,
                image: 'https://via.placeholder.com/300x200?text=HDMI+Cable',
              },
              {
                id: 16,
                name: 'SSD External 1TB',
                price: 99.99,
                image: 'https://via.placeholder.com/300x200?text=External+SSD',
              },
              {
                id: 17,
                name: 'USB-A Quick Charger 65W',
                price: 29.99,
                image: 'https://via.placeholder.com/300x200?text=Quick+Charger',
              },
              {
                id: 18,
                name: 'Monitor Light Bar',
                price: 59.99,
                image: 'https://via.placeholder.com/300x200?text=Monitor+Light',
              },
              {
                id: 19,
                name: 'Webcam Ring Light',
                price: 34.99,
                image: 'https://via.placeholder.com/300x200?text=Ring+Light',
              },
              {
                id: 20,
                name: 'Portable SSD 2TB',
                price: 179.99,
                image: 'https://via.placeholder.com/300x200?text=Portable+SSD+2TB',
              },
              {
                id: 21,
                name: 'Laptop Backpack Pro',
                price: 49.99,
                image: 'https://via.placeholder.com/300x200?text=Laptop+Backpack',
              },
              {
                id: 22,
                name: 'Desk Mat Extended',
                price: 24.99,
                image: 'https://via.placeholder.com/300x200?text=Desk+Mat',
              },
              {
                id: 23,
                name: 'Dual Monitor Arm Stand',
                price: 69.99,
                image: 'https://via.placeholder.com/300x200?text=Monitor+Arm',
              },
              {
                id: 24,
                name: 'Cable Management Kit',
                price: 19.99,
                image: 'https://via.placeholder.com/300x200?text=Cable+Management',
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
                <button
                  className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition"
                  onClick={() => addItem(product, 1)}
                >
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