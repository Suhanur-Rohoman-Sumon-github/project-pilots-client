import "./profileCard.css";
import { ReactNode } from "react";
interface CardProps {
  facebookIcon: ReactNode;
  githubIcon: ReactNode;
  linedInIcon: ReactNode;
  portfolioIcon: ReactNode;
  styledTitle: string;
  headerTitle: string;
  imageSrc: string;
}
const ProfileCard: React.FC<CardProps> = ({
  facebookIcon,
  githubIcon,
  linedInIcon,
  portfolioIcon,
  headerTitle,
  styledTitle,
  imageSrc,
}) => {
  return (
    <div className="card">
      <div className="lines"></div>
      <div className="img-box">
        <img src={imageSrc} />
      </div>
      <div className="contents">
        <div className="details">
          <h2>
            {styledTitle} <br /> <span>{headerTitle}</span>
          </h2>
          <div className="actionBtn">
            <div className="bg-pink-950 p-5 text-4xl rounded-full">
              {facebookIcon}
            </div>
            <div className="bg-pink-950 p-5 text-4xl rounded-full">
              {githubIcon}
            </div>
            <div className="bg-pink-950 p-5 text-4xl rounded-full">
              {linedInIcon}
            </div>
            <div className="bg-pink-950 p-5 text-4xl rounded-full">
              {portfolioIcon}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
