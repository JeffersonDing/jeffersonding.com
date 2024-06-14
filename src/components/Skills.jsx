import React from "react";
import ReactWordcloud from "react-wordcloud";
import { config } from "../config";
import TitleContent from "./TitleContent";

const Skills = () => {
  const options = {
    rotations: 0,
    fontFamily: "Rubik, sans-serif",
    fontSizes: [20, 50],
    enableTooltip: false,
    colors: ["#000000", "#3b82f6", "orange"],
    padding: 30,
  };
  if (window.innerWidth < 768) {
    options.fontSizes = [10, 30];
    options.padding = 10;
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-10">
      <TitleContent title="Skills">
        <p className="text-xl text-gray-700 mb-6">
          here are some of the skills I've picked up over the years
        </p>
        <div className="flex justify-center space-x-4 h-[50vh] w-fill">
          <ReactWordcloud
            words={config.skills.map((skill) => ({
              text: skill.text,
              value: skill.value,
            }))}
            options={options}
          />
        </div>
      </TitleContent>
    </div>
  );
};
export default Skills;
