import React, { ReactNode } from "react";
import Texts from "../Texts/Texts";
import "./PricingCardCompo.css";
interface PricingProps {
  icon: ReactNode;
  checkIcon: ReactNode;
  styledTitle: string;
  headerTitle: string;
  description: string;
  price: number;
  buttonText: string;
  facilitiesText1: string;
  facilitiesText2: string;
  facilitiesText3: string;
  facilitiesText4: string;
  facilitiesText5: string;
  facilitiesText6: string;
}
const PricingCardCompo: React.FC<PricingProps> = ({
  icon,
  checkIcon,
  price,
  headerTitle,
  styledTitle,
  description,
  facilitiesText1,
  facilitiesText2,
  facilitiesText3,
  facilitiesText4,
  facilitiesText5,
  facilitiesText6,
  buttonText,
}) => {
  return (
    <div className="flex  transition-all ease-in-out duration-500 hover:-translate-y-1 hover:-translate-x-1 flex-col items-center gap-5 px-10 py-6 shadow-2xl group rounded-2xl bg-gradient-to-r from-red-600 to-purple-900">
      <div className="bg-gradient-to-r from-red-600 to-purple-900 p-5 text-5xl rounded-full shadow-2xl">
        {icon}
      </div>
      <div>
        <Texts
          styledTitle={styledTitle}
          peragraphText={description}
          headerText={headerTitle}
        />
      </div>
      <div>
        <button className="priceButton">{buttonText}</button>
      </div>
      <p className="text-3xl font-bold">{price} $</p>
      <div className="flex flex-col gap-5 ">
        <div className="flex items-center gap-2">
          <div className=" text-white text-xl ">{checkIcon}</div>
          <div>{facilitiesText1}</div>
        </div>
        <div className="flex items-center gap-2">
          <div className=" text-white text-xl ">{checkIcon}</div>
          <div>{facilitiesText2}</div>
        </div>
        <div className="flex items-center gap-2">
          <div className=" text-white text-xl ">{checkIcon}</div>
          <div>{facilitiesText3}</div>
        </div>
        <div className="flex items-center gap-2">
          <div className=" text-white text-xl ">{checkIcon}</div>
          <div>{facilitiesText4}</div>
        </div>
        <div className="flex items-center gap-2">
          <div className=" text-white text-xl ">{checkIcon}</div>
          <div>{facilitiesText5}</div>
        </div>
        <div className="flex items-center gap-2">
          <div className=" text-white text-xl ">{checkIcon}</div>
          <div>{facilitiesText6}</div>
        </div>
      </div>
    </div>
  );
};

export default PricingCardCompo;
