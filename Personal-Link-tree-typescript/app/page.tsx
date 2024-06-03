'use client';

import React from 'react';
import Image from 'next/image';
import { GitHubIcon, TwitterIcon, LinkCard } from './icons';
import data from '../data/data.json';
import AboutMe from './aboutMe';
import ContactForm from './emailTemplate'; // Assuming ContactForm is exported correctly
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export default function HomePage() {
  const handleSubmit = async (name: string, email: string, message: string) => {
    try {
      const response = await fetch('/.netlify/functions/send-email', { // Corrected endpoint name
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        alert('Your message has been sent!');
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error sending your message. Please try again later.');
    }
  };

  return (
    <div className={`space-y-6 flex items-center flex-col mx-auto w-full justify-center mt-16 px-8 pb-10 ${inter.className}`}>
      <Image
        priority
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className="font-bold mt-4 mb-8 text-xl text-white">{data.name}</h1>
      <AboutMe />
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
      <ContactForm onSubmit={handleSubmit} />
      <div className="flex items-center gap-4 mt-8 text-black">
        {data.socials.map((social) => (
          <a
            aria-label={`${social.title} link`}
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.href.includes('twitter') ? (
              <TwitterIcon />
            ) : social.href.includes('github') ? (
              <GitHubIcon />
            ) : null}
          </a>
        ))}
      </div>
    </div>
  );
}
