import Arrow from "../Arrow/Arrow";
import Texts from "../Texts/Texts";
import { MdCastForEducation, MdEmojiEvents } from "react-icons/md";
import { FcSportsMode } from "react-icons/fc";
import { BiPlusMedical } from "react-icons/bi";
const BusinessSegment = () => {
  return (
    <div className="">
      <div className="lg:flex justify-end hidden">
        <Arrow />
      </div>
      <div className="flex items-center justify-center">
        <Texts
          headerText="Task wave has the ability to serve "
          styledTitle="any Business"
          peragraphText=""
        />
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        <div className="flex lg:flex-row flex-col items-start  gap-5 px-10 py-6 bg-gray-950 shadow-2xl group rounded-2xl  transition-all ease-in-out duration-500 hover:-translate-y-1 hover:-translate-x-1 hover:bg-gradient-to-r from-red-600 to-purple-900">
          <div className="bg-pink-950  p-5 rounded-full">
            <FcSportsMode className="text-2xl " />
          </div>
          <div>
            <Texts
              styledTitle="World Sports"
              peragraphText="Dive into the exhilarating world of sports, where passion, competition, and teamwork thrive. Explore a diverse range of sporting activities, from thrilling matches to the latest news, and get inspired to play, support, and celebrate the world of athletics."
              headerText=""
            />
          </div>
        </div>
        <div className="flex lg:flex-row transition-all ease-in-out duration-500 hover:-translate-y-1 hover:-translate-x-1 flex-col items-start  gap-5 px-10 py-6 bg-gray-950 shadow-2xl group rounded-2xl hover:hover:bg-gradient-to-r from-red-600 to-purple-900">
          <div className="bg-pink-950 p-5 rounded-full">
            <MdCastForEducation className="text-2xl " />
          </div>
          <div>
            <Texts
              styledTitle="Unlock Knowledge"
              peragraphText="Open the door to endless possibilities through education. Access a world of knowledge, expand your horizons, and sharpen your skills to shape your future."
              headerText=""
            />
          </div>
        </div>
        <div className="flex lg:flex-row transition-all ease-in-out duration-500 hover:-translate-y-1 hover:-translate-x-1 flex-col items-start  gap-5 px-10 py-6 bg-gray-950 shadow-2xl group rounded-2xl hover:hover:bg-gradient-to-r from-red-600 to-purple-900">
          <div className="bg-pink-950 p-5 rounded-full">
            <BiPlusMedical className="text-2xl " />
          </div>
          <div>
            <Texts
              styledTitle="Medical Resources"
              peragraphText="Prioritize your well-being with our comprehensive medical resources. Explore expert guidance, stay informed about your health, and make informed decisions for a healthier life."
              headerText=""
            />
          </div>
        </div>
        <div className="flex lg:flex-row transition-all ease-in-out duration-500 hover:-translate-y-1 hover:-translate-x-1 flex-col items-start  gap-5 px-10 py-6 bg-gray-950 shadow-2xl group rounded-2xl hover:hover:bg-gradient-to-r from-red-600 to-purple-900">
          <div className="bg-pink-950 p-5 rounded-full">
            <MdEmojiEvents className="text-2xl " />
          </div>
          <div>
            <Texts
              styledTitle="Celebrating Achievements"
              peragraphText="Join us in recognizing and celebrating accomplishments of all sizes. From personal milestones to grand achievements, let's celebrate the journey of success together."
              headerText=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSegment;
