import Arrow from "../Arrow/Arrow"
import Scribfolio from "../Scribfolio/Scribfolio"
import Texts from "../Texts/Texts"
import Video from "../Video/Video"
import makeDocuments from "../../Videos/watermarked_preview.mp4"
const MakeDocuments = () => {
  return (
      <div>
      <div className="lg:flex lg:flex-row-reverse flex-col  hidden justify-between animate-pulse">
        <Scribfolio />
        <div className="transform rotate-180">
          <Arrow />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Texts
          headerText="Make"
          styledTitle=" Documents"
          peragraphText=""
        />
      </div>
      <div className="flex justify-between items-center lg:flex-row flex-col gap-10 h-[700px] lg:h-[500px]">
        <div className="lg:basis-1/2 basis-full">
          <Texts
            styledTitle="Documents"
            headerText="Make your"
            peragraphText="Keep records of important project documents, decisions, and communications. This can be done using a shared drive, project management software, or even a physical folder."
          />
        </div>
        <div className="lg:basis-1/2 basis-full">
          <Video VideoSource={makeDocuments} />
        </div>
      </div>
    </div>
  )
}

export default MakeDocuments
