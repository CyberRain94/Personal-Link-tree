// components/AboutMe.tsx
import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div className=" bg-gray-800 text-white p-6 rounded-lg mx-auto max-w-8xl">
      <h3 className="text-2xl font-bold mb-4 text-center">
        Hey there! I’m Kelvin Bourdier, a software developer with a lifelong fascination for technology.
      </h3>
      <p className="text-lg text-left">
        Ever since elementary school, I dreamed of using magnets to levitate cars—talk about ambitious, right? 😄
      </p>
      <p className="text-lg text-left">
        My tech stack is a delightful mix of JavaScript, React, Redux, TypeScript, Docker, and a dash of WordPress. But here’s the thing: I’m not afraid to dive into other technologies my team might need. I thrive on real-world experiences and creative solutions, empowering people and businesses to harness the true power of technology.
      </p>
      <p className="text-lg text-left">
        Now, here’s my secret sauce: I never give up and always see things through to the end. Whether it’s debugging a complex issue or architecting a scalable system, I’m in it for the long haul.
      </p>
      <p className="text-lg text-left">
        Oh, and did I mention that I dabble in cybersecurity too? 🕵️‍♂️ When I’m not coding, you’ll find me exploring new open-source tech, tinkering with security tools, and soaking in the wonders of nature.
      </p>
      <p className="text-lg text-lrft">
        Let’s connect and build something awesome together! Feel free to reach out—I’m always up for a tech chat or a cup of virtual matcha. ☕
      </p>
    </div>
  );
};

export default AboutMe;
