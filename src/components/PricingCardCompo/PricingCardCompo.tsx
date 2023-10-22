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
  facilitiesText: string;
  buttonText: string;
}
const PricingCardCompo: React.FC<PricingProps> = ({
  icon,
  checkIcon,
  price,
  headerTitle,
  styledTitle,
  description,
  facilitiesText,
  buttonText,
}) => {
  return (
    <div className="flex  transition-all ease-in-out duration-500 hover:-translate-y-1 hover:-translate-x-1 flex-col items-center gap-5 px-10 py-6 shadow-2xl group rounded-2xl bg-gradient-to-r from-red-600 to-purple-900">
      <div className="bg-gradient-to-r from-red-600 to-purple-900 p-5 text-4xl rounded-full">{icon}</div>
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
          <div>{facilitiesText}</div>
        </div>
        <div className="flex items-center gap-2">
          <div className=" text-white text-xl ">{checkIcon}</div>
          <div>{facilitiesText}</div>
        </div>
        <div className="flex items-center gap-2">
          <div className=" text-white text-xl ">{checkIcon}</div>
          <div>{facilitiesText}</div>
        </div>
        <div className="flex items-center gap-2">
          <div className=" text-white text-xl ">{checkIcon}</div>
          <div>{facilitiesText}</div>
        </div>
      </div>
    </div>
  );
};

export default PricingCardCompo;
