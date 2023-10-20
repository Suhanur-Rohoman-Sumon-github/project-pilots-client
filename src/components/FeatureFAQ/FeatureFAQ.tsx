import Lottie from "lottie-react";
import FAQ from "../../Assests/Lottie_Animation_file/nxuR8j3Zzi.json";
import FAQs from "../FAQ/FAQs";
import Texts from "../Texts/Texts";
const FeatureFAQ = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <Texts
          headerText="Frequently Asked"
          styledTitle="Questions"
          peragraphText=""
        />
      </div>
      <div className="flex lg:flex-row flex-col-reverse items-center justify-between gap-10">
        <div className=" basis-1/2 lg:basis-full">
          <div className="w-full h-full">
            <FAQs />
          </div>
        </div>
        <div className="basis-1/2 lg:basis-full">
          <div className="w-full h-full">
            <Lottie animationData={FAQ} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureFAQ;
