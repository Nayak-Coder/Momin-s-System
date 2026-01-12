import React, { useState, useMemo } from 'react';
import { useCart } from '../../Context/CartContext';

// Mock product data with more details
const products = [
    {
        id: 1,
        name: 'Premium Headphones',
        price: 120,
        category: 'Electronics',
        rating: 4.5,
        reviews: 28,
        image: 'https://via.placeholder.com/300x200?text=Premium+Headphones',
        description: 'High-quality sound with noise cancellation',
        inStock: true,
    },
    {
        id: 2,
        name: 'Wireless Speaker',
        price: 80,
        category: 'Electronics',
        rating: 4.8,
        reviews: 45,
        image: 'https://via.placeholder.com/300x200?text=Wireless+Speaker',
        description: 'Portable speaker with 12-hour battery life',
        inStock: true,
    },
    {
        id: 3,
        name: 'USB-C Cable',
        price: 15,
        category: 'Accessories',
        rating: 4.3,
        reviews: 12,
        image: 'https://via.placeholder.com/300x200?text=USB-C+Cable',
        description: 'Durable and fast charging cable',
        inStock: true,
    },
    {
        id: 4,
        name: 'Phone Case',
        price: 25,
        category: 'Accessories',
        rating: 4.6,
        reviews: 35,
        image: 'https://via.placeholder.com/300x200?text=Phone+Case',
        description: 'Protective case with premium design',
        inStock: false,
    },
    {
        id: 5,
        name: 'Screen Protector',
        price: 10,
        category: 'Accessories',
        rating: 4.4,
        reviews: 22,
        image: 'https://via.placeholder.com/300x200?text=Screen+Protector',
        description: 'Tempered glass protection',
        inStock: true,
    },
    {
        id: 6,
        name: 'Portable Charger',
        price: 45,
        category: 'Electronics',
        rating: 4.7,
        reviews: 56,
        image: 'https://via.placeholder.com/300x200?text=Portable+Charger',
        description: '20000mAh capacity with fast charging',
        inStock: true,
    },
];

const MarketPlace = () => {
    const { addItem } = useCart();
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortBy, setSortBy] = useState('name');

    const categories = ['All', ...new Set(products.map(p => p.category))];

    const filteredAndSortedProducts = useMemo(() => {
        let filtered = selectedCategory === 'All' 
            ? products 
            : products.filter(p => p.category === selectedCategory);

        return filtered.sort((a, b) => {
            if (sortBy === 'name') return a.name.localeCompare(b.name);
            if (sortBy === 'price-low') return a.price - b.price;
            if (sortBy === 'price-high') return b.price - a.price;
            if (sortBy === 'rating') return b.rating - a.rating;
            return 0;
        });
    }, [selectedCategory, sortBy]);

    const renderStars = (rating) => {
        return '★'.repeat(Math.floor(rating)) + (rating % 1 ? '☆' : '');
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-2 text-gray-800 text-center">Market Place</h1>
                <p className="text-gray-600 text-center text-lg">Discover our premium collection of products</p>
            </div>

            {/* Filters and Sorting */}
            <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between bg-gray-50 p-4 rounded-lg">
                <div className="flex flex-col sm:flex-row gap-4 items-center flex-wrap">
                    <div>
                        <label className="text-sm font-semibold text-gray-700 block mb-2">Category:</label>
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-gray-700 block mb-2">Sort By:</label>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            <option value="name">Name (A-Z)</option>
                            <option value="price-low">Price (Low to High)</option>
                            <option value="price-high">Price (High to Low)</option>
                            <option value="rating">Rating (Highest)</option>
                        </select>
                    </div>
                </div>
                <p className="text-gray-600 font-medium">{filteredAndSortedProducts.length} products found</p>
            </div>

            {/* Products Grid */}
            {filteredAndSortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {filteredAndSortedProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:scale-105"
                        >
                            <div className="relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-cover"
                                />
                                {!product.inStock && (
                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">Out of Stock</span>
                                    </div>
                                )}
                            </div>
                            <div className="p-4 flex-grow flex flex-col">
                                <h3 className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1">{product.category}</h3>
                                <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h2>
                                <p className="text-gray-600 text-sm mb-3 flex-grow">{product.description}</p>
                                
                                {/* Rating */}
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-yellow-400 text-sm">{renderStars(product.rating)}</span>
                                    <span className="text-gray-600 text-xs">({product.reviews} reviews)</span>
                                </div>

                                {/* Price */}
                                <p className="text-2xl font-bold text-green-700 mb-4">${product.price}</p>

                                {/* Button */}
                                <button
                                    disabled={!product.inStock}
                                    className={`w-full py-2 rounded font-medium transition duration-200 ${
                                        product.inStock
                                            ? 'bg-green-700 text-white hover:bg-green-800 cursor-pointer'
                                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    }`}
                                    onClick={() => addItem(product, 1)}
                                >
                                    {product.inStock ? 'Add to Cart' : 'Unavailable'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No products found in this category.</p>
                </div>
            )}
        </div>
    );
};

export default MarketPlace;