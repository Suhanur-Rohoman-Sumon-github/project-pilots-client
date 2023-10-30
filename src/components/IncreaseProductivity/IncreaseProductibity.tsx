import Arrow from "../Arrow/Arrow";
import Texts from "../Texts/Texts";
import myVideo from "../../Videos/stay-prodactive_ZMldEScR.mp4";
import Video from "../Video/Video";
import Scribfolio from "../Scribfolio/Scribfolio";
const IncreaseProductivity = () => {
  return (
    <div>
      <div className="lg:flex lg:flex-row flex-col  hidden justify-between animate-pulse">
        <Scribfolio />
        <Arrow />
      </div>
      <div className="flex items-center justify-center">
        <Texts
          headerText="Increase  "
          styledTitle="Productivity"
          peragraphText=""
        />
      </div>
      <div className="flex justify-between items-center lg:flex-row-reverse flex-col-reverse gap-10 h-[700px] lg:h-[500px]">
        <div className="lg:basis-1/2 basis-full">
          <Texts
            styledTitle="Productivity"
            headerText=""
            peragraphText="Unleash your full potential and boost your productivity. Explore tools, tips, and strategies to maximize your efficiency, accomplish more, and achieve your goals."
          />
        </div>
        <div className="lg:basis-1/2 basis-full">
          <Video VideoSource={myVideo} />
        </div>
      </div>
    </div>
  );
};

export default IncreaseProductivity;
