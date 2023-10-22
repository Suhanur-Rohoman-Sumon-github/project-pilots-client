import PricingCardCompo from "../PricingCardCompo/PricingCardCompo";
import { IoMdPaperPlane } from "react-icons/io";
import { AiOutlineCheck } from "react-icons/ai";
const PricingCard = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
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
    </div>
  );
};

export default PricingCard;
