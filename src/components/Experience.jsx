import React from "react";
import { parseLinksToReact } from "../utils";

const Experience = (props) => {
  const { title, company, date, description } = Object.fromEntries(
    Object.entries(props).map(([key, value]) => [
      key,
      typeof value === "string" ? parseLinksToReact(value) : value,
    ]),
  );

  return (
    <div className="flex flex-col items-start justify-center bg-white">
      <div className="w-full">
        <h2 className="text-lg font-semibold mb-0">{company}</h2>
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold mb-1">{title}</h1>
          <span className="ml-16">{date}</span>
        </div>
        <p className="text-lg text-gray-700 mb-4">{description}</p>
      </div>
    </div>
  );
};

export default Experience;
