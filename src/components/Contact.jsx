import React from "react";
import { config } from "../config";

const Contact = () => {
  return (
    <div className="bg-white p-16 flex justify-between items-center max-w-4xl mx-auto mt-6">
      <div>
        <h2 className="text-3xl font-bold mb-2 flex items-center">
          say hi!{" "}
          <span role="img" aria-label="waving hand" className="ml-2">
            👋
          </span>
        </h2>
      </div>
      <div className="text-right">
        <p className="text-lg mb-2">
          <span role="img" aria-label="email">
            📧
          </span>
          <span className="font-bold ml-2">Email:</span>
          <a href="mailto:me@jeffersonding.com" className="underline atag">
            {config.email}
          </a>
        </p>
        <p className="text-lg mb-2">
          <span role="img" aria-label="github">
            🎉
          </span>
          <span className="font-bold ml-2">GitHub:</span>
          <a href={config.github} className="underline atag">
            JeffersonDing
          </a>
        </p>
        <p className="text-lg">
          <span role="img" aria-label="linkedin">
            🔗
          </span>
          <span className="font-bold ml-2">LinkedIn:</span>
          <a href={config.linkedin} className="underline atag">
            Jefferson Ding
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
