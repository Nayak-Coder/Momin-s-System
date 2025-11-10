import React, { useEffect, useState } from "react";

const fakeFetch = (data, delay = 600) =>
  new Promise((res) => setTimeout(() => res(data), delay));

const initialLaptops = [];
const initialBundles = [];
const initialTestimonials = [];

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [laptops, setLaptops] = useState(initialLaptops);
  const [bundles, setBundles] = useState(initialBundles);
  const [testimonials, setTestimonials] = useState(initialTestimonials);

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      setLoading(true);
      const fetchedLaptops = await fakeFetch([
        {
          id: 1,
          name: "Dell XPS 15",
          price: 1599,
          image: "https://via.placeholder.com/400x300?text=Dell+XPS+15",
          badge: "Best Seller",
        },
        {
          id: 2,
          name: "MacBook Pro 14\"",
          price: 1999,
          image: "https://via.placeholder.com/400x300?text=MacBook+Pro+14",
          badge: "Premium",
        },
        {
          id: 3,
          name: "HP Spectre x360",
          price: 1299,
          image: "https://via.placeholder.com/400x300?text=HP+Spectre",
          badge: "Editor\'s Pick",
        },
      ]);

      const fetchedBundles = await fakeFetch([
        {
          id: 1,
          name: "Student Starter Pack",
          discountedPrice: 999,
          image: "https://via.placeholder.com/600x400?text=Student+Bundle",
        },
        {
          id: 2,
          name: "Gaming Excellence Pack",
          discountedPrice: 2499,
          image: "https://via.placeholder.com/600x400?text=Gaming+Bundle",
        },
      ]);

      const fetchedTestimonials = await fakeFetch([
        { id: 1, name: "Alice", text: "Absolutely love my MacBook Pro. Super smooth experience!" },
        { id: 2, name: "James", text: "Dell XPS runs like a dream. Perfect for developers." },
        { id: 3, name: "Maria", text: "HP Spectre is lightweight and powerful. Great battery life!" },
      ]);

      setLaptops(fetchedLaptops);
      setBundles(fetchedBundles);
      setTestimonials(fetchedTestimonials);
      setLoading(false);
    };

    fetchData();
  }, []);

 
export default HomePage;