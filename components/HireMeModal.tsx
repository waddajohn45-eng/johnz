
import React, { useState } from 'react';

interface HireMeModalProps {
  onClose: () => void;
}

const HireMeModal: React.FC<HireMeModalProps> = ({ onClose }) => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('sent');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-lg w-full relative transform transition-all duration-300 scale-95 animate-scale-in" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl">
          &times;
        </button>
        <h2 className="text-2xl md:text-3xl font-bold text-[#0B3D91] mb-6 text-center">Service Inquiry</h2>
        
        {status === 'sent' ? (
          <div className="text-center py-10">
            <div className="text-5xl text-green-500 mb-4">
              <i className="fas fa-check-circle"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Thank You!</h3>
            <p className="text-gray-600 mt-2">Your inquiry has been sent. I will get back to you shortly.</p>
            <button onClick={onClose} className="mt-6 bg-[#0B3D91] text-white font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all">
                Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
              <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8A00]" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8A00]" />
            </div>
            <div className="mb-4">
              <label htmlFor="service" className="block text-gray-700 font-medium mb-2">I'm interested in...</label>
              <select id="service" name="service" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8A00] bg-white">
                <option>Web & Mobile App Development</option>
                <option>Phone & Computer Repair</option>
                <option>Graphic Design & Video Editing</option>
                <option>Social Media Management</option>
                <option>IT Consulting</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="details" className="block text-gray-700 font-medium mb-2">Project Details</label>
              <textarea id="details" name="details" rows={4} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8A00]"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" disabled={status === 'sending'} className="bg-[#FF8A00] text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all w-full md:w-auto disabled:bg-opacity-50 disabled:cursor-wait">
                {status === 'sending' ? 'Sending...' : 'Send Inquiry'}
              </button>
            </div>
          </form>
        )}
      </div>
      <style>{`
        @keyframes scale-in {
            from { transform: scale(0.95); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in {
            animation: scale-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default HireMeModal;
