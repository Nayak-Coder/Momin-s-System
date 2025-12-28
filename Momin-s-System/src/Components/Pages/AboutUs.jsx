import React from 'react';
import { FaLaptop, FaMobileAlt, FaHeadphones } from 'react-icons/fa';

const team = [
  { name: 'Muhmmmad Kashan', role: 'Founder & CEO', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Babu Nayak', role: 'Lead Engineer', img: 'https://randomuser.me/api/portraits/men/45.jpg' },
  { name: 'Muhammad Ahmed', role: 'Sales Manager', img: 'https://randomuser.me/api/portraits/men/64.jpg' },
];

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16 text-center">
        <h1 className="text-5xl font-extrabold text-green-700 mb-4 drop-shadow-lg">Who We Are</h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          <span className="font-semibold text-green-700">Momin's Tech Store</span> is where innovation meets passion. We’re not just a store—we’re a community of dreamers, builders, and tech lovers.
        </p>
      </section>

      {/* Highlights */}
      <section className="flex flex-wrap justify-center gap-8 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 w-64 hover:scale-105 transition">
          <h2 className="text-2xl font-bold text-green-700 mb-2">15+ Years</h2>
          <p className="text-gray-600">Delivering the latest gadgets since 2010.</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 w-64 hover:scale-105 transition">
          <h2 className="text-2xl font-bold text-green-700 mb-2">100K+ Customers</h2>
          <p className="text-gray-600">Trusted by tech enthusiasts nationwide.</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 w-64 hover:scale-105 transition">
          <h2 className="text-2xl font-bold text-green-700 mb-2">Award Winning</h2>
          <p className="text-gray-600">Recognized for service & innovation.</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-3xl mx-auto py-12">
        <h2 className="text-3xl font-semibold text-center mb-8 text-green-700">Our Journey</h2>
        <ol className="relative border-l-4 border-amber-200">
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-green-700 rounded-full -left-4 ring-4 ring-white">
              <span className="text-white font-bold">2010</span>
            </span>
            <h3 className="font-bold text-lg text-green-700">Founded</h3>
            <p className="text-gray-600">Started as a small shop with a big dream.</p>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-green-700 rounded-full -left-4 ring-4 ring-white">
              <span className="text-white font-bold">2015</span>
            </span>
            <h3 className="font-bold text-lg text-green-700">Nationwide Expansion</h3>
            <p className="text-gray-600">Opened stores in every major cities</p>
          </li>
          <li className="ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-green-700 rounded-full -left-4 ring-4 ring-white">
              <span className="text-white font-bold">2024</span>
            </span>
            <h3 className="font-bold text-lg text-green-700">Online Revolution</h3>
            <p className="text-gray-600">Launched our Online platform for everyone, everywhere.</p>
          </li>
        </ol>
      </section>

      {/* Team Section */}
      <section className="py-12 bg-amber-50">
        <h2 className="text-3xl font-semibold text-center mb-8 text-green-700">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-white rounded-xl shadow-lg p-6 w-64 flex flex-col items-center hover:scale-105 transition">
              <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-amber-200" />
              <h3 className="text-xl font-bold text-green-700">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 text-center">
        <h2 className="text-2xl font-semibold mb-3 text-green-700">Let’s Connect</h2>
        <p className="text-lg text-gray-700 mb-4">
          Have questions, ideas, or want to partner? <br />
          <a href="mailto:support@techstore.com" className="text-green-700 font-semibold hover:underline">support@techstore.com</a>
        </p>
        <a
          href="/contact"
          className="inline-block bg-green-700 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-green-800 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default AboutUs;