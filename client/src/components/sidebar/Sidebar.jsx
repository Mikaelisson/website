import Credits from "../credits/Credits";
import {
  SidebarStyle,
  SidebarInformations,
  Identification,
  Skills,
  ContainerSkills,
  ContainerSkill,
  Skill,
  SkillLevel,
  LevelSkill,
  ContainerSidebar,
  Close,
  ContainerIcon,
} from "./SidebarStyled";

import { FaReact, FaBootstrap, FaRobot } from "react-icons/fa";
import {
  SiStyledcomponents,
  SiExpress,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";
import { DiJavascript1, DiMongodb, DiHtml5, DiCss3Full } from "react-icons/di";
import { IoLogoNodejs } from "react-icons/io";

const Sidebar = (props) => {
  const skills = [
    { name: "ReactJS", level: "70%", icon: <FaReact /> },
    { name: "Styled Components", level: "70%", icon: <SiStyledcomponents /> },
    { name: "Javascript", level: "80%", icon: <DiJavascript1 /> },
    { name: "Bootstrap", level: "70%", icon: <FaBootstrap /> },
    { name: "NodeJS", level: "80%", icon: <IoLogoNodejs /> },
    { name: "ExpressJS", level: "80%", icon: <SiExpress /> },
    { name: "MongoDB", level: "70%", icon: <SiMongodb /> },
    { name: "Mongoose", level: "90%", icon: <DiMongodb /> },
    { name: "Firebase", level: "30%", icon: <SiFirebase /> },
    { name: "HTML", level: "90%", icon: <DiHtml5 /> },
    { name: "CSS", level: "90%", icon: <DiCss3Full /> },
    { name: "Automação com UiPath", level: "60%", icon: <FaRobot /> },
  ];

  return (
    <ContainerSidebar activeMenu={props.activeMenu}>
      <SidebarStyle activeMenu={props.activeMenu}>
        <SidebarInformations>
          <Identification>
            <img src="./assets/images/perfil.png" alt="Foto Mikaelisson" />
            <h1>Mikaelisson Gesuino</h1>
            <p>Front-end Developer</p>
          </Identification>
          <Skills>
            <h1>Habilidades</h1>

            <ContainerSkills>
              {skills.map((skill, index) => {
                return (
                  <ContainerSkill key={index}  width={skill.level}>
                    <ContainerIcon>{skill.icon}</ContainerIcon>

                    <Skill>
                      <p>{skill.name}</p>
                      <p>{skill.level}</p>
                    </Skill>

                    <SkillLevel>
                      <LevelSkill width={skill.level} />
                    </SkillLevel>
                  </ContainerSkill>
                );
              })}
            </ContainerSkills>
          </Skills>
          <Credits />
        </SidebarInformations>
      </SidebarStyle>
      <Close onClick={() => props.changeMenu()} />
    </ContainerSidebar>
  );
};

export default Sidebar;
