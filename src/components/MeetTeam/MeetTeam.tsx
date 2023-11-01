import ProfileCard from "../ProfileCard/ProfileCard";
import { FaFacebook, FaGithub, FaLinkedin, FaLink } from "react-icons/fa";
const MeetTeam = () => {
  return (
    <div>
      <ProfileCard
        imageSrc="https://i.ibb.co/PFvwf3V/356821769-250647931002332-6524631220417449226-n.jpg"
        facebookIcon={<FaFacebook />}
        githubIcon={<FaGithub />}
        linedInIcon={<FaLinkedin />}
        portfolioIcon={<FaLink />}
        styledTitle=" Shakil Hossain"
        headerTitle=" Front end developer "
      />
    </div>
  );
};

export default MeetTeam;
