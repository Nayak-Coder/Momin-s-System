import React from 'react';

const AboutUs = () => {
  return (
    <div className="px-4 py-10 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">About Us</h1>
      
      <p className="text-lg mb-8 text-center">
        Welcome to our store! We are proud to be the <strong>leading tech store in the country</strong>, offering top-notch gadgets, accessories, and customer service.
      </p>

      {/* Our Story */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Our Story</h2>
        <p className="text-base sm:text-lg">
          Founded in 2010, we started as a small electronics shop with a big dream — to bring the best in technology to our customers. Over the years, we've grown into a nationwide brand trusted by thousands.
        </p>
      </section>

      {/* Our Mission */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
        <p className="text-base sm:text-lg">
          Our mission is to make cutting-edge technology accessible, affordable, and easy to use. We believe in innovation, integrity, and customer satisfaction as the core of our success.
        </p>
      </section>

      {/* Meet the Team */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Meet the Team</h2>
        <p className="text-base sm:text-lg">
          Our team is made up of tech enthusiasts, engineers, and customer service pros — all passionate about delivering value and support to every shopper.
        </p>
      </section>

      {/* Contact Info */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
        <p className="text-base sm:text-lg">
          For inquiries, partnerships, or support, email us at 
          <a href="mailto:support@techstore.com" className="text-blue-600 ml-1 hover:underline">support@techstore.com</a>.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;