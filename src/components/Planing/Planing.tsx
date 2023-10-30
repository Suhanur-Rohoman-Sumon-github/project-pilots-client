import Arrow from "../Arrow/Arrow"
import Scribfolio from "../Scribfolio/Scribfolio"
import Texts from "../Texts/Texts"
import Video from "../Video/Video"
import makePlan from "../../Videos/89090522.webm"
const Planing = () => {
  return (
      <div>
      <div className="lg:flex lg:flex-row flex-col  hidden justify-between animate-pulse">
        <Scribfolio />
        <Arrow />
      </div>
      
      <div className="flex justify-between items-center lg:flex-row-reverse flex-col gap-10 h-[700px] lg:h-[500px]">
        <div className="lg:basis-1/2 basis-full">
          <Texts
            styledTitle="and scheduling"
            headerText="Make Plan"
            peragraphText="Plan and schedule tasks, milestones, and deadlines to keep projects on track and ensure timely completion."
          />
        </div>
        <div className="lg:basis-1/2 basis-full">
          <Video VideoSource={makePlan} />
        </div>
      </div>
    </div>
  )
}

export default Planing
