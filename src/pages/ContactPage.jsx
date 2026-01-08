import React, { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import Card, { CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { BsEnvelope, BsTelephone, BsGeoAlt, BsLinkedin } from 'react-icons/bs';
import './ContactPage.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create WhatsApp message link
    const message = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;
    const whatsappLink = `https://wa.me/2347031882197?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  const contactInfo = [
    {
      icon: <BsEnvelope />,
      label: 'Email',
      value: 'ndunchej@gmail.com',
      link: 'mailto:ndunchej@gmail.com'
    },
    {
      icon: <BsTelephone />,
      label: 'Phone',
      value: '(+234) 9048480552',
      link: 'tel:+2349048480552'
    },
    {
      icon: <BsGeoAlt />,
      label: 'Location',
      value: 'Lagos, Nigeria',
      link: null
    },
    {
      icon: <BsLinkedin />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/joseph-ndunche-ba15082247',
      link: 'https://linkedin.com/in/joseph-ndunche-ba15082247'
    }
  ];

  return (
    <PageLayout>
      <div className="contact-page">
        <div className="contact-container">
          <div className="page-header">
            <h1 className="page-title">Get In Touch</h1>
            <p className="page-subtitle">
              Let's discuss how I can help with your development needs
            </p>
          </div>

          <div className="contact-content">
            {/* Contact Information */}
            <div className="contact-info-section">
              <Card className="contact-info-card">
                <CardContent>
                  <h2 className="info-title">Contact Information</h2>
                  <p className="info-description">
                    Feel free to reach out through any of these channels. I'm always open to 
                    discussing new opportunities and collaborations.
                  </p>
                  <div className="contact-info-list">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="contact-info-item">
                        <div className="info-icon">{info.icon}</div>
                        <div className="info-details">
                          <div className="info-label">{info.label}</div>
                          {info.link ? (
                            <a 
                              href={info.link} 
                              className="info-value link"
                              target={info.link.startsWith('http') ? '_blank' : undefined}
                              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div className="info-value">{info.value}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <Card className="contact-form-card">
                <CardContent>
                  <h2 className="form-title">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="What is this about?"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        placeholder="Your message..."
                      />
                    </div>

                    <Button type="submit" variant="primary" size="large" fullWidth>
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

