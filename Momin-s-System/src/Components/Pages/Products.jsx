import React, { useEffect, useState } from 'react';
import { useCart } from '../../Context/CartContext';
import { useWishlist } from '../../Context/WishlistContext';
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState(200);
  const { addItem } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

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
                rating: 4.5,
                image: 'https://via.placeholder.com/300x200?text=Wireless+Headphones',
              },
              {
                id: 2,
                name: 'Bluetooth Speaker',
                price: 29.99,
                rating: 4.2,
                image: 'https://via.placeholder.com/300x200?text=Bluetooth+Speaker',
              },
              {
                id: 3,
                name: 'Smart Watch Pro',
                price: 99.99,
                rating: 4.8,
                image: 'https://via.placeholder.com/300x200?text=Smart+Watch+Pro',
              },
              {
                id: 4,
                name: 'USB-C Cable Pack',
                price: 19.99,
                rating: 4.0,
                image: 'https://via.placeholder.com/300x200?text=USB-C+Cable',
              },
              {
                id: 5,
                name: 'Portable Power Bank',
                price: 45.99,
                rating: 4.6,
                image: 'https://via.placeholder.com/300x200?text=Power+Bank',
              },
              {
                id: 6,
                name: 'Mechanical Keyboard RGB',
                price: 89.99,
                rating: 4.7,
                image: 'https://via.placeholder.com/300x200?text=RGB+Keyboard',
              },
              {
                id: 7,
                name: 'Gaming Mouse Pro',
                price: 49.99,
                rating: 4.4,
                image: 'https://via.placeholder.com/300x200?text=Gaming+Mouse',
              },
              {
                id: 8,
                name: 'Laptop Cooling Pad',
                price: 34.99,
                rating: 4.3,
                image: 'https://via.placeholder.com/300x200?text=Cooling+Pad',
              },
              {
                id: 9,
                name: '4K Webcam',
                price: 79.99,
                rating: 4.5,
                image: 'https://via.placeholder.com/300x200?text=4K+Webcam',
              },
              {
                id: 10,
                name: 'Wireless Keyboard Mouse Combo',
                price: 54.99,
                rating: 4.3,
                image: 'https://via.placeholder.com/300x200?text=Keyboard+Mouse+Combo',
              },
              {
                id: 11,
                name: 'USB Hub 7-Port',
                price: 39.99,
                rating: 4.2,
                image: 'https://via.placeholder.com/300x200?text=USB+Hub',
              },
              {
                id: 12,
                name: 'Wireless Phone Charger',
                price: 24.99,
                rating: 4.1,
                image: 'https://via.placeholder.com/300x200?text=Phone+Charger',
              },
              {
                id: 13,
                name: 'Laptop Stand Aluminum',
                price: 44.99,
                rating: 4.6,
                image: 'https://via.placeholder.com/300x200?text=Laptop+Stand',
              },
              {
                id: 14,
                name: 'Noise Cancelling Earbuds',
                price: 69.99,
                rating: 4.7,
                image: 'https://via.placeholder.com/300x200?text=Noise+Cancel+Earbuds',
              },
              {
                id: 15,
                name: 'HDMI 2.1 Cable 4K',
                price: 19.99,
                rating: 4.0,
                image: 'https://via.placeholder.com/300x200?text=HDMI+Cable',
              },
              {
                id: 16,
                name: 'SSD External 1TB',
                price: 99.99,
                rating: 4.8,
                image: 'https://via.placeholder.com/300x200?text=External+SSD',
              },
              {
                id: 17,
                name: 'USB-A Quick Charger 65W',
                price: 29.99,
                rating: 4.4,
                image: 'https://via.placeholder.com/300x200?text=Quick+Charger',
              },
              {
                id: 18,
                name: 'Monitor Light Bar',
                price: 59.99,
                rating: 4.5,
                image: 'https://via.placeholder.com/300x200?text=Monitor+Light',
              },
              {
                id: 19,
                name: 'Webcam Ring Light',
                price: 34.99,
                rating: 4.3,
                image: 'https://via.placeholder.com/300x200?text=Ring+Light',
              },
              {
                id: 20,
                name: 'Portable SSD 2TB',
                price: 179.99,
                rating: 4.9,
                image: 'https://via.placeholder.com/300x200?text=Portable+SSD+2TB',
              },
              {
                id: 21,
                name: 'Laptop Backpack Pro',
                price: 49.99,
                rating: 4.5,
                image: 'https://via.placeholder.com/300x200?text=Laptop+Backpack',
              },
              {
                id: 22,
                name: 'Desk Mat Extended',
                price: 24.99,
                rating: 4.2,
                image: 'https://via.placeholder.com/300x200?text=Desk+Mat',
              },
              {
                id: 23,
                name: 'Dual Monitor Arm Stand',
                price: 69.99,
                rating: 4.6,
                image: 'https://via.placeholder.com/300x200?text=Monitor+Arm',
              },
              {
                id: 24,
                name: 'Cable Management Kit',
                price: 19.99,
                rating: 4.1,
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
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Products Catalog</h1>

      {loading && <p className="text-gray-600">Loading products...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Filters</h2>
              
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Search
                </label>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                />
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Max Price: ${priceRange}
                </label>
                <input
                  type="range"
                  min="10"
                  max="200"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <p className="text-gray-600 mb-4">
              Showing {products.filter(p => 
                p.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
                p.price <= priceRange
              ).length} products
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.filter(p => 
                p.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
                p.price <= priceRange
              ).map((product) => (
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
                    <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-2 my-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={i < Math.round(product.rating) ? 'fill-current' : 'opacity-30'}
                            size={14}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({product.rating})</span>
                    </div>

                    <p className="text-green-600 font-bold mt-2">${product.price.toFixed(2)}</p>
                    
                    <div className="flex gap-2 mt-4">
                      <button
                        className="flex-1 px-3 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition text-sm"
                        onClick={() => addItem(product, 1)}
                      >
                        Add to Cart
                      </button>
                      <button
                        className="px-3 py-2 bg-red-100 rounded hover:bg-red-200 transition"
                        onClick={() => {
                          if (isInWishlist(product.id)) {
                            removeFromWishlist(product.id);
                          } else {
                            addToWishlist(product);
                          }
                        }}
                      >
                        {isInWishlist(product.id) ? (
                          <FaHeart className="text-red-500" size={18} />
                        ) : (
                          <FaRegHeart className="text-gray-500" size={18} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;