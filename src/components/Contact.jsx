import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      <form className="max-w-lg mx-auto space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-2 border rounded-md" />
        <input type="email" placeholder="Your Email" className="w-full p-2 border rounded-md" />
        <textarea placeholder="Your Message" className="w-full p-2 border rounded-md"></textarea>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
