import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>
        Welcome to our About Us page! We are dedicated to [briefly describe your mission or purpose].
      </p>
      <section className="our-story">
        <h2>Our Story</h2>
        <p>
          [Provide a concise narrative about the origin and development of your organization or project.]
        </p>
      </section>
      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>
          [Articulate your core mission and values, explaining what drives your work.]
        </p>
      </section>
      <section className="our-team">
        <h2>Meet the Team</h2>
        <p>
          [Optionally, include information about key team members or the collective expertise of your organization.]
        </p>
      </section>
      <section className="contact-info">
        <h2>Contact Us</h2>
        <p>
          For inquiries, please reach out to us at [your contact email or link to contact page].
        </p>
      </section>
    </div>
  );
};

export default AboutUs;