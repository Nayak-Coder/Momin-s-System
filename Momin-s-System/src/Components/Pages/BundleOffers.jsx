import React from 'react';
import { useCart } from '../../Context/CartContext';

const bundles = [
  {
    id: 1,
    name: "Student Starter Pack",
    originalPrice: 1299,
    discountedPrice: 999,
    image: "https://via.placeholder.com/400x300?text=Student+Bundle",
    items: [
      "Dell Inspiron Laptop",
      "Wireless Mouse",
      "Laptop Bag",
      "1-Year Antivirus",
      "Office 365 Student"
    ],
    savings: "23%",
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Professional Work Bundle",
    originalPrice: 2499,
    discountedPrice: 1999,
    image: "https://via.placeholder.com/400x300?text=Pro+Bundle",
    items: [
      "ThinkPad X1 Carbon",
      "Docking Station",
      "27\" Monitor",
      "Wireless Keyboard & Mouse",
      "3-Year Warranty"
    ],
    savings: "20%",
    badge: "Premium"
  },
  {
    id: 3,
    name: "Gaming Excellence Pack",
    originalPrice: 2999,
    discountedPrice: 2499,
    image: "https://via.placeholder.com/400x300?text=Gaming+Bundle",
    items: [
      "ROG Gaming Laptop",
      "Gaming Mouse",
      "Mechanical Keyboard",
      "Gaming Headset",
      "RGB Mousepad"
    ],
    savings: "17%",
    badge: "Hot Deal"
  },
  {
    id: 4,
    name: "Creative Pro Bundle",
    originalPrice: 3299,
    discountedPrice: 2799,
    image: "https://via.placeholder.com/400x300?text=Creative+Bundle",
    items: [
      "MacBook Pro",
      "External SSD",
      "Drawing Tablet",
      "Adobe Creative Cloud (1 Year)",
      "Premium Laptop Sleeve"
    ],
    savings: "15%",
    badge: "Limited Time"
  }
];

const BundleOffers = () => {
  const { addItem } = useCart();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-900 to-amber-200 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Special Bundle Offers
          </h1>
          <p className="text-xl text-amber-100 mb-8">
            Save big with our carefully curated laptop bundles
          </p>
          <div className="inline-block bg-amber-200 text-green-900 px-6 py-3 rounded-full font-bold text-lg animate-bounce">
            Limited Time Deals!
          </div>
        </div>
      </div>

      {/* Bundles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bundles.map((bundle) => (
            <div key={bundle.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={bundle.image}
                  alt={bundle.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-1 rounded-full font-semibold">
                  Save {bundle.savings}
                </div>
                <div className="absolute top-4 left-4 bg-green-700 text-white px-4 py-1 rounded-full font-semibold">
                  {bundle.badge}
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{bundle.name}</h2>
                
                <div className="space-y-2 mb-6">
                  {bundle.items.map((item, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="text-gray-500">
                    <span className="line-through text-lg">
                      ${bundle.originalPrice}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-green-700">
                    ${bundle.discountedPrice}
                  </div>
                </div>
                
                <button
                  className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors duration-300"
                  onClick={() => addItem({ id: `bundle-${bundle.id}`, name: bundle.name, price: bundle.discountedPrice, image: bundle.image }, 1)}
                >
                  Add Bundles to Car
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">What's included in each bundle?</h3>
              <p className="text-gray-600">Each bundle includes a laptop and carefully selected accessories that complement your specific use case, whether it's for students, professionals, gamers, or creative work.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Can I customize my bundle?</h3>
              <p className="text-gray-600">While our bundles are pre-configured for optimal value, please contact our sales team for custom bundle requests or specific requirements.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">How long are these offers valid?</h3>
              <p className="text-gray-600">Bundle offers are available for a limited time and while stocks last. The savings percentage and availability may vary based on stock levels and promotions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BundleOffers;