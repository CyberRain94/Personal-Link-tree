/* 'use client';

import React, { useState } from 'react';

interface ContactFormProps {
  onSubmit: (name: string, email: string, message: string) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(name, email, message);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg bg-gray-800 bg-opacity-60 p-8 w-72 mt-8 rounded-lg">
      <div className="mb-4 ">
        <label htmlFor="name" className="block text-white mb-1">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-md border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-white mb-1">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-white mb-1">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-md border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <button type="submit" className="bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
    </form>
  );
};

export default ContactForm;*/


'use client';

import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [responseMessage, setResponseMessage] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const res = await fetch('/.netlify/functions/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();
    if (res.status === 200) {
      setResponseMessage('Email sent successfully!');
    } else {
      setResponseMessage(data.error || 'Failed to send email');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg bg-gray-800 bg-opacity-60 p-8 w-72 mt-8 rounded-lg">
      <div className="mb-4">
        <label htmlFor="name" className="block text-white mb-1">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-md border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-white mb-1">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-white mb-1">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-md border border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <button type="submit" className="bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
      {responseMessage && <p className="text-white mt-4">{responseMessage}</p>}
    </form>
  );
};

export default ContactForm;
