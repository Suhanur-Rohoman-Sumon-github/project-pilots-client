import { useEffect } from "react";
import taskVideo from "../../Videos/8c50c501e872ba1d5ff52e5ad2b5b637.mp4";
import Texts from "../Texts/Texts";
import Video from "../Video/Video";
import AOS from 'aos';
import "aos/dist/aos.css"; 
const ManageTask = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      offset: 200, // Offset (in pixels) from the top of the element when animation starts
      easing: "ease-in-out", // Animation timing function
    });
  }, []);
  return (
    <div className="flex justify-between items-center lg:flex-row flex-col-reverse gap-10 h-[800px] lg:h-[500px]">
      <div data-aos="fade-right" className="basis-1/2">
        <Texts
          headerText="Manage Your Online "
          styledTitle="Tasks."
          peragraphText="With task wave you can effortlessly streamline your workflow,
            prioritize assignments, and ensure nothing falls through the cracks.
            Our user-friendly interface allows you to create, edit, and
            categorize tasks with ease, ensuring you have a clear overview of
            your upcoming commitments."
        />
      </div>
      <div data-aos= "fade-left" className="basis-1/2 relative">
        <Video VideoSource={taskVideo} />
        <div className="glow-bg"></div>
      </div>
    </div>
  );
};

export default ManageTask;
