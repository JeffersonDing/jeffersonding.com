import React from "react";
import { parseLinksToReact } from "../utils";

const Activity = (props) => {
  const { title, organization, description } = Object.fromEntries(
    Object.entries(props).map(([key, value]) => [
      key,
      typeof value === "string" ? parseLinksToReact(value) : value,
    ]),
  );
  return (
    <div className="flex flex-col items-start justify-center bg-white">
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold mb-2">{title}</h1>
          <span className="text-lg mb-2">{organization}</span>
        </div>
        <p className="text-lg text-gray-700 mb-4">{description}</p>
      </div>
    </div>
  );
};

export default Activity;
