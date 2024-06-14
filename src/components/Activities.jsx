import TitleContent from "./TitleContent";
import { config } from "../config";
import Activity from "./Activity";

const Activities = () => {
  return (
    <div className="flex flex-col items-center align-top justify-start min-h-screen bg-white p-10">
      <TitleContent title="Activities">
        <p className="text-xl text-gray-700 mb-6">
          some things I do in my spare time
        </p>
        {config.activities.map((experience, index) => (
          <Activity key={index} {...experience} />
        ))}
      </TitleContent>
    </div>
  );
};

export default Activities;
