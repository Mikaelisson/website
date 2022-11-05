import SocialMedia from "./social_media/SocialMedia";
import Projects from "./projects/Projects";
import Formations from "./formations/Formations";

const Main = () => {
  return (
    <div>
      <Formations />
      <Projects />
      <SocialMedia />
    </div>
  );
};

export default Main;
