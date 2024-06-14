import { config } from "../config";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <div className="max-w-4xl mx-auto text-left min-w-30">
        <h2 className="text-3xl text-blue-500 mb-2">Heyy there, my name is</h2>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Jefferson Ding
        </h1>
        <p className="text-xl text-gray-700 mb-4">{config.tagline}</p>
        <div className="text-lg text-gray-700 mb-4">
          <p className="font-bold">Currently:</p>
          <ul>
            {config.currently.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center space-x-4">
          <a
            href={config.github}
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
          >
            GitHub
          </a>
          <a
            href="/resume.pdf"
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
          >
            Résumé
          </a>
          <a
            href={config.linkedin}
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
