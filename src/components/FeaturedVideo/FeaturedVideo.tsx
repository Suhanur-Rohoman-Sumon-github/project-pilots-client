import Video from "../Video/Video";
import featureVideo from "../../Videos/PROJECT MANAGEMENT Animation.mp4";
import Texts from "../Texts/Texts";
const FeaturedVideo = () => {
  return (
    <div>
        <div className="flex justify-center items-center">
            <Texts headerText="What is " styledTitle="Project Management?" peragraphText=""/>
        </div>
      <Video VideoSource={featureVideo} />
    </div>
  );
};

export default FeaturedVideo;
