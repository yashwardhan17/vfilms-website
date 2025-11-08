/* eslint-disable react/no-unescaped-entities */

'use client';

import { useState } from 'react';
import Image from 'next/image';
import './globals.css';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://vernanbackend.ezlab.in/api/contact-us/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        setErrors({ submit: 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setErrors({ submit: 'Network error. Please check your connection.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-content">
          <div className="logo">
            <span className="logo-v">V</span>
            <span className="logo-films">Films</span>
          </div>
          
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <a href="#services">Services</a>
            <a href="#stories">Their Stories</a>
            <a href="#story">Our Story</a>
            <a href="#varnan">Varnan</a>
            <a href="#contact" className="cta-btn">Let's Talk</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-left">
            <div className="mandala-logo">
              <div className="mandala-pattern"></div>
              <div className="logo-overlay">
                <span className="logo-v-large">V</span>
                <span className="logo-films-large">Films</span>
              </div>
            </div>
          </div>
          
          <div className="hero-right">
            <h1 className="hero-title">
              Varnan is where stories find
              <br />
              their voice and form
            </h1>
            <p className="hero-subtitle">Films . Brands . Art</p>
            <p className="hero-description">
              Since 2009, V've been telling stories - stories of people,
              their journeys, and the places that shape them.
              Some begin in polished boardrooms, others in humble
              village squares. But every story starts the same way - by
              listening with intention. V believes it takes trust, patience,
              and an eye for the unseen to capture what truly matters.
              V doesn't just tell stories - V honors them.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-content">
          <div className="contact-left">
            <div className="contact-text-box">
              <p className="contact-intro">
                Whether you have an idea, a question, or simply want
                to explore how V can work together, V're just a
                message away.
              </p>
              <p className="contact-tagline">
                Let's catch up over coffee.
              </p>
              <p className="contact-closing">
                Great stories always begin with a good conversation
              </p>
            </div>
            <div className="decorative-pattern-left"></div>
          </div>

          <div className="contact-right">
            <h2 className="contact-title">Join the Story</h2>
            <p className="contact-subtitle">Ready to bring your vision to life? Let's talk</p>
            
            {submitSuccess && (
              <div className="success-message">
                ✓ Form Submitted Successfully!
              </div>
            )}

            {errors.submit && (
              <div className="error-message">
                {errors.submit}
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name*"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email*"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <span className="error-text">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your message*"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                ></textarea>
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>

            <div className="contact-info">
              <a href="mailto:vernita@varnanfilms.co.in" className="contact-link">
                vernita@varnanfilms.co.in
              </a>
              <a href="tel:+919873684567" className="contact-link">
                +91 98736 84567
              </a>
            </div>

            <div className="decorative-pattern-right"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
