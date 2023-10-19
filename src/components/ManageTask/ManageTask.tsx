import taskVideo from "../../Videos/8c50c501e872ba1d5ff52e5ad2b5b637.mp4";
import Texts from "../Texts/Texts";
import Video from "../Video/Video";
const ManageTask = () => {
  return (
    <div className="flex justify-between items-center lg:flex-row flex-col-reverse gap-10 h-[800px] lg:h-[500px]">
      <div className="lg:basis-1/2 basis-full">
        <Texts
          headerText="Manage Your Online "
          styledTitle="Tasks."
          peragraphText="With project pilot you can effortlessly streamline your workflow,
            prioritize assignments, and ensure nothing falls through the cracks.
            Our user-friendly interface allows you to create, edit, and
            categorize tasks with ease, ensuring you have a clear overview of
            your upcoming commitments."
        />
      </div>
      <div className="lg:basis-1/2 basis-full relative">
        <Video VideoSource={taskVideo} />
      </div>
    </div>
  );
};

export default ManageTask;
