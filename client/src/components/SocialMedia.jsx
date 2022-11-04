import { SocialMediaStyle, LinkSocialMedia } from "./styles/SocialMedia";

import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
  const socialMedia = [
    {
      name: "Github",
      url: "https://github.com/Mikaelisson",
      icon: <FaGithub />,
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/mikaelisson/",
      icon: <FaLinkedin />,
    },
    {
      name: "Gmail",
      url: "mailto:mikaelissongesuino@gmail.com",
      icon: <MdEmail />,
    },
  ];

  return (
    <SocialMediaStyle>
      {socialMedia.map((element, index) => {
        return (
          <LinkSocialMedia
            key={index}
            href={element.url}
            target="_blank"
            title={element.name}
          >
            {element.icon}
          </LinkSocialMedia>
        );
      })}
    </SocialMediaStyle>
  );
};

export default SocialMedia;
