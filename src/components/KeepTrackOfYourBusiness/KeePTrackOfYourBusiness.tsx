import Arrow from "../Arrow/Arrow";
import Scribfolio from "../Scribfolio/Scribfolio";
import Video from "../Video/Video";
import TaskVideo from "../../Videos/Node_Your_Daily_Task.mp4";
import { PiUsersFourFill } from "react-icons/pi";
import { MdManageHistory } from "react-icons/md";
import Texts from "../Texts/Texts";
import Card from "../Cards/Cards";
const KeePTrackOfYourBusiness = () => {
  return (
    <div>
      <div className="lg:flex hidden lg:flex-row-reverse flex-col justify-between animate-pulse">
        <div>
          <Scribfolio />
        </div>
        <div className="transform rotate-180">
          <Arrow />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Texts
          headerText="Your Ultimate "
          styledTitle="Platform"
          peragraphText=""
        />
      </div>
      <div className="flex justify-between items-center lg:flex-row-reverse flex-col-reverse gap-10 h-[700px] lg:h-[500px] ">
        <div className="lg:basis-1/2 basis-full">
          <Video VideoSource={TaskVideo}></Video>
        </div>
        <div className="lg:basis-1/2 basis-full">
          <div className="flex flex-col gap-10">
            <Card
              icon={<PiUsersFourFill />}
              headerTitle=""
              description="Take control of your schedule with our easy-to-use appointment management feature. Seamlessly organize, schedule, and stay on top of your appointments. Never miss an important meeting or event again!"
              styledTitle="Appointments"
            />
            <Card
              icon={<MdManageHistory />}
              headerTitle=""
              description="Discover the convenience of our class booking feature. Reserve your spot in your favorite classes with ease and ensure you never miss a session. Get ready to embark on your fitness journey or expand your horizons with ease. mange your project easily easy"
              styledTitle="Class Management"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeePTrackOfYourBusiness;
