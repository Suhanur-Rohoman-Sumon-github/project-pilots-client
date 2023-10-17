import Arrow from "../Arrow/Arrow";
import Scribfolio from "../Scribfolio/Scribfolio";
import Video from "../Video/Video";
import TaskVideo from "../../Videos/Node_Your_Daily_Task.mp4";
import { PiUsersFourFill } from "react-icons/pi";
import { MdManageHistory } from "react-icons/md";
import Texts from "../Texts/Texts";
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
        <div className="basis-1/2">
          <Video VideoSource={TaskVideo}></Video>
        </div>
        <div className="basis-1/2">
          <div className="flex flex-col gap-10">
            <div className="flex lg:flex-row transition-all ease-in-out duration-500 hover:-translate-y-1 hover:-translate-x-1 flex-col items-start  gap-5 px-10 py-6 bg-gray-950 shadow-2xl group rounded-2xl hover:bg-gradient-to-r from-[#FF56F6] via-[#ff5cf7] to-[#fcff2f]">
              <div className="bg-pink-950 p-5 rounded-full">
                <PiUsersFourFill className="text-4xl " />
              </div>
              <div>
                <Texts
                  styledTitle="Appointments"
                  peragraphText="Take control of your schedule with our easy-to-use appointment management feature. Seamlessly organize, schedule, and stay on top of your appointments. Never miss an important meeting or event again!"
                  headerText=""
                />
              </div>
            </div>
            <div className="flex lg:flex-row transition-all ease-in-out duration-500 hover:-translate-y-1 hover:-translate-x-1 flex-col items-start  gap-5 px-10 py-6 bg-gray-950 shadow-2xl group rounded-2xl hover:bg-gradient-to-r from-[#FF56F6] via-[#ff5cf7] to-[#fcff2f]">
              <div className="bg-pink-950 p-5 rounded-full">
                <MdManageHistory className="text-4xl " />
              </div>
              <div>
                <Texts
                  styledTitle="Class Management"
                  peragraphText="Discover the convenience of our class booking feature. Reserve your spot in your favorite classes with ease and ensure you never miss a session. Get ready to embark on your fitness journey or expand your horizons with ease. mange your project easily"
                  headerText=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeePTrackOfYourBusiness;
