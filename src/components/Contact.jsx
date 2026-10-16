import React, { useState } from 'react';
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ message: '', loading: false, isError: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: 'Sending...', loading: true, isError: false });

    try {
      const response = await fetch('https://formspree.io/f/mdekddog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ message: 'Message sent successfully!', loading: false, isError: false });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      setStatus({ message: 'Failed to send message. Please try again.', loading: false, isError: true });
    }
  };

  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <form id="contactForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={status.loading} className="btn">
          {status.loading ? 'Sending...' : 'Send Message'}
        </button>
        {status.message && (
          <p style={{ color: status.isError ? '#ff4d4d' : '#00f2ff', marginTop: '10px' }}>
            {status.message}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;