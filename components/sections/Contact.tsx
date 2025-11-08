
import React, { useState } from 'react';
import Section from '../Section';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
       setTimeout(() => setFormStatus('idle'), 5000); // Reset after 5s
    }, 2000);
  };

  return (
    <Section id="contact" className="bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B3D91]">Get In Touch</h2>
        <p className="text-lg text-gray-600 mt-2">Have a project in mind? Let's talk.</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
            <div className="space-y-6">
                <div className="flex items-start space-x-4">
                    <i className="fas fa-map-marker-alt text-[#FF8A00] text-2xl mt-1"></i>
                    <div>
                        <h4 className="font-bold">Location</h4>
                        <p className="text-gray-600">Kanyanya, Gayaza Road, Behind Gaz Petrol Station, Kampala, Uganda</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <i className="fas fa-phone-alt text-[#FF8A00] text-2xl mt-1"></i>
                    <div>
                        <h4 className="font-bold">Phone</h4>
                        <a href="tel:+256759970315" className="text-gray-600 hover:text-[#FF8A00] transition-colors">+256 759 970 315</a>
                    </div>
                </div>
                 <div className="flex items-start space-x-4">
                    <i className="fab fa-whatsapp text-[#FF8A00] text-2xl mt-1"></i>
                    <div>
                        <h4 className="font-bold">WhatsApp</h4>
                        <a href="https://wa.me/256759970315" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#FF8A00] transition-colors">Chat with me</a>
                    </div>
                </div>
            </div>
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg h-64">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.73003057199!2d32.57683931527373!3d0.36861119969032626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177da665201a073d%3A0x640b784882194548!2sKanyanya!5e0!3m2!1sen!2sug!4v1678886400000!5m2!1sen!2sug" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="My Location"
                ></iframe>
            </div>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg shadow-inner">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send me a Message</h3>
          <form onSubmit={handleSubmit}>
             <div className="mb-4">
              <label htmlFor="contact-name" className="block text-gray-700 font-medium mb-2">Name</label>
              <input type="text" id="contact-name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8A00]" />
            </div>
            <div className="mb-4">
              <label htmlFor="contact-email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input type="email" id="contact-email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8A00]" />
            </div>
             <div className="mb-6">
              <label htmlFor="contact-message" className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea id="contact-message" rows={5} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8A00]"></textarea>
            </div>
            <div>
              <button type="submit" disabled={formStatus === 'sending'} className="bg-[#FF8A00] w-full text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all disabled:bg-opacity-50 disabled:cursor-wait">
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {formStatus === 'success' && <p className="text-green-600 mt-4 text-center">Message sent successfully!</p>}
              {formStatus === 'error' && <p className="text-red-600 mt-4 text-center">Something went wrong. Please try again.</p>}
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
