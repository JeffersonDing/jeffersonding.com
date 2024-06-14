import TitleContent from "./TitleContent";
import Experience from "./Experience";
import { config } from "../config";

const Experiences = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white p-10">
      <TitleContent title="Experiences">
        {config.experiences.map((experience, index) => (
          <Experience key={index} {...experience} />
        ))}
      </TitleContent>
    </div>
  );
};

export default Experiences;
