import PricingCardCompo from "../PricingCardCompo/PricingCardCompo";
import { IoMdPaperPlane } from "react-icons/io";
import { AiOutlineCheck } from "react-icons/ai";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
const PricingCard = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-4">
      <PricingCardCompo
        icon={<IoMdPaperPlane />}
        styledTitle="Basic"
        price={10}
        buttonText="Get Started"
        headerTitle=""
        description=""
        checkIcon={<AiOutlineCheck />}
        facilitiesText1="Task Management"
        facilitiesText2="Collaboration Tools"
        facilitiesText3="Gantt Charts (limited features)"
        facilitiesText4="Document Management"
        facilitiesText5="Mobile Accessibility"
        facilitiesText6="Basic Support"
      />
      <PricingCardCompo
        icon={<BiSolidPlaneAlt />}
        styledTitle="Stander"
        price={30}
        buttonText="Get Started"
        headerTitle=""
        description=""
        checkIcon={<AiOutlineCheck />}
        facilitiesText1="Task Management"
        facilitiesText2="Collaboration Tools"
        facilitiesText3="Gantt Charts (unlimited features)"
        facilitiesText4="Resource Allocation"
        facilitiesText5="Time Tracking"
        facilitiesText6="Email Support"
      />
      <PricingCardCompo
        icon={<BsFillRocketTakeoffFill />}
        styledTitle="Premium"
        price={70}
        buttonText="Get Started"
        headerTitle=""
        description=""
        checkIcon={<AiOutlineCheck />}
        facilitiesText1="Resource Allocation"
        facilitiesText2="Time Tracking"
        facilitiesText3="Email support"
        facilitiesText4="Reporting and Analytics (advanced)"
        facilitiesText5="Mobile Accessibility"
        facilitiesText6="Priority Support"
      />
    </div>
  );
};

export default PricingCard;
