import Arrow from "../Arrow/Arrow";
import Texts from "../Texts/Texts";
import myVideo from "../../Videos/user_Dashbaord.mp4";
import Video from "../Video/Video";
import AOS from 'aos';
import "aos/dist/aos.css"; 
import Scribfolio from "../Scribfolio/Scribfolio";
import { useEffect } from "react";
const KeepTrackOfTask = () => {
  useEffect(() => {
    AOS.init({
      duration: 4000, // Animation duration in milliseconds
      offset: 200, // Offset (in pixels) from the top of the element when animation starts
      easing: "ease-in-out", // Animation timing function
    });
  }, []);
  return (
    <div>
      <div className="lg:flex lg:flex-row flex-col  hidden justify-between animate-pulse">
        <Scribfolio />
        <Arrow />
      </div>
      <div data-aos="fade-left" className="flex justify-between items-center lg:flex-row-reverse flex-col-reverse gap-10 h-[700px] lg:h-[500px]">
        <div className="basis-1/2">
          <Texts
            styledTitle="Task"
            headerText="Management "
            peragraphText="Simplify your life with our user-friendly dashboard. Create, prioritize, and track your tasks hassle-free."
          />
        </div>
        <div data-aos="fade-right" className="basis-1/2">
          <Video VideoSource={myVideo} />
        </div>
      </div>
    </div>
  );
};

export default KeepTrackOfTask;
