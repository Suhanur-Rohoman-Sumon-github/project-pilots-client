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
        buttonText="Order Now"
        headerTitle=""
        description=""
        checkIcon={<AiOutlineCheck />}
        facilitiesText="unlimited joy"
      />
    </div>
  );
};

export default PricingCard;
