import React from 'react';
import { useCart } from '../../Context/CartContext';

// Mock product data
const products = [
    {
        id: 1,
        name: 'Product A',
        price: 120,
        image: 'https://via.placeholder.com/300x200?text=Product+A',
    },
    {
        id: 2,
        name: 'Product B',
        price: 80,
        image: 'https://via.placeholder.com/300x200?text=Product+B',
    },
    {
        id: 3,
        name: 'Product C',
        price: 150,
        image: 'https://via.placeholder.com/300x200?text=Product+C',
    },
];

const MarketPlace = () => {
    const { addItem } = useCart();
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Market Place</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300 flex flex-col items-center"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 w-full text-center">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
                            <p className="text-gray-600 mb-4 text-lg font-bold">${product.price}</p>
                            <button
                                className="px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition font-medium"
                                onClick={() => addItem(product, 1)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MarketPlace;