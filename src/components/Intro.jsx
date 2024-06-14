import { config } from "../config";
import { parseLinksToReact } from "../utils";
import TitleContent from "./TitleContent";
const Intro = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-10">
      <TitleContent title="More about me">
        <p className="text-xl text-gray-700 mb-4">
          {parseLinksToReact(config.intro)}
        </p>
      </TitleContent>
    </div>
  );
};

export default Intro;
