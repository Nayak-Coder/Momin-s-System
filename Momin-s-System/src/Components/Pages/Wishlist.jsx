import React from 'react';
import { useWishlist } from '../../Context/WishlistContext';
import { useCart } from '../../Context/CartContext';
import { FaTrash } from 'react-icons/fa';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addItem } = useCart();

  if (wishlist.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10 text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">My Wishlist</h1>
        <p className="text-gray-600 text-lg">Your wishlist is empty!</p>
        <a
          href="/products"
          className="mt-6 inline-block px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition"
        >
          Browse Products
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">My Wishlist ({wishlist.length})</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {wishlist.map((product) => (
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
                  onClick={() => removeFromWishlist(product.id)}
                  title="Remove from wishlist"
                >
                  <FaTrash className="text-red-500" size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
