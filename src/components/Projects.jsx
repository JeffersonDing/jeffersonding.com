import Project from "./Project";
import TitleContent from "./TitleContent";
import { config } from "../config";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white p-10">
      <TitleContent title="Projects">
        <p className="text-xl text-gray-700 mb-6">
          some cool things I've built
        </p>
        {config.projects.map((experience, index) => (
          <Project key={index} {...experience} />
        ))}
      </TitleContent>
    </div>
  );
};

export default Projects;
