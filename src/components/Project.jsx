import React from "react";
import { parseLinksToReact } from "../utils";

const Project = (props) => {
  const { name, description, keywords, githubLink } = Object.fromEntries(
    Object.entries(props).map(([key, value]) => [
      key,
      typeof value === "string" ? parseLinksToReact(value) : value,
    ]),
  );
  return (
    <>
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p className="text-lg text-gray-700 mb-4">{description}</p>
      <div className="flex justify-between items-center mb-2">
        <p className="text-sm text-gray-500 italic">{keywords.join(" · ")}</p>
        <a
          href={githubLink}
          className="inline-block px-5 py-1 border border-gray-500 text-gray-500 rounded hover:bg-gray-100"
        >
          GitHub
        </a>
      </div>
    </>
  );
};

export default Project;
