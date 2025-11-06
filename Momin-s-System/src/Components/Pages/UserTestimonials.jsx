import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Graphic Designer",
    image: "https://via.placeholder.com/150x150?text=Sarah",
    rating: 5,
    review: "The MacBook Pro bundle I purchased exceeded my expectations. The included creative software package and accessories were perfectly curated for my design work. Excellent value!",
    purchasedItem: "Creative Pro Bundle",
    verifiedPurchase: true
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Computer Science Student",
    image: "https://via.placeholder.com/150x150?text=Michael",
    rating: 5,
    review: "As a CS student, the student starter pack was a lifesaver. The laptop performs great for coding, and the included software licenses saved me a lot of money.",
    purchasedItem: "Student Starter Pack",
    verifiedPurchase: true
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Business Analyst",
    image: "https://via.placeholder.com/150x150?text=Emily",
    rating: 4,
    review: "The professional work bundle made setting up my home office a breeze. The docking station and monitor combo is perfect for productivity.",
    purchasedItem: "Professional Work Bundle",
    verifiedPurchase: true
  },
  {
    id: 4,
    name: "Alex Thompson",
    role: "Content Creator",
    image: "https://via.placeholder.com/150x150?text=Alex",
    rating: 5,
    review: "Customer service was exceptional! They helped me choose the perfect laptop for video editing, and the performance has been outstanding.",
    purchasedItem: "Creative Pro Bundle",
    verifiedPurchase: true
  },
  {
    id: 5,
    name: "David Kim",
    role: "Gaming Enthusiast",
    image: "https://via.placeholder.com/150x150?text=David",
    rating: 5,
    review: "The gaming bundle is insane! The ROG laptop handles all my games perfectly, and the included peripherals are top-notch.",
    purchasedItem: "Gaming Excellence Pack",
    verifiedPurchase: true
  },
  {
    id: 6,
    name: "Lisa Martinez",
    role: "Remote Professional",
    image: "https://via.placeholder.com/150x150?text=Lisa",
    rating: 4,
    review: "Working remotely has been so much better with this setup. The laptop is reliable, and the accessories make it feel like a proper office.",
    purchasedItem: "Professional Work Bundle",
    verifiedPurchase: true
  }
];

const UserTestimonials = () => {
  // Function to render stars based on rating
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`h-5 w-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Customers Say
          </h1>
          <p className="text-xl text-blue-100">
            Read authentic reviews from our valued customers
          </p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">4.8/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Verified Reviews</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfied Customers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-700 mb-4">"{testimonial.review}"</p>
              
              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Purchased: {testimonial.purchasedItem}
                  </span>
                  {testimonial.verifiedPurchase && (
                    <span className="flex items-center text-green-600 text-sm">
                      <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Verified Purchase
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Happy Customers?</h2>
          <p className="text-gray-300 mb-8">
            Browse our collection of laptops and bundles to find your perfect match
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Shop Now
            </button>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              View Bundles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTestimonials;