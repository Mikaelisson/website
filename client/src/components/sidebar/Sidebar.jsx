
import {
  SidebarStyle,
  SidebarInformations,
  Identification,
  Skills,
  ContainerSkills,
  ContainerSkill,
  Skill,
  ContainerSidebar,
  Close,
  ContainerIcon,
} from "./SidebarStyled";
import Settings from "./settings/Settings";
import Credits from "../credits/Credits";

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
    { name: "ReactJS", level: "Avançado", icon: <FaReact /> },
    {
      name: "Styled Components",
      level: "Avançado",
      icon: <SiStyledcomponents />,
    },
    { name: "Javascript", level: "Avançado", icon: <DiJavascript1 /> },
    { name: "HTML", level: "Avançado", icon: <DiHtml5 /> },
    { name: "CSS", level: "Avançado", icon: <DiCss3Full /> },
    { name: "Bootstrap", level: "Avançado", icon: <FaBootstrap /> },
    { name: "ExpressJS", level: "Avançado", icon: <SiExpress /> },
    { name: "MongoDB", level: "Avançado", icon: <SiMongodb /> },
    { name: "Mongoose", level: "Avançado", icon: <DiMongodb /> },
    { name: "NodeJS", level: "Avançado", icon: <IoLogoNodejs /> },
    { name: "Firebase", level: "Intermediário", icon: <SiFirebase /> },
    { name: "Automação com UiPath", level: "Intermediário", icon: <FaRobot /> },
  ];

  return (
    <ContainerSidebar activeMenu={props.activeMenu}>
      <SidebarStyle activeMenu={props.activeMenu}>
        <SidebarInformations>
          <Identification>
            <Settings />

            <img src="./assets/images/perfil.png" alt="Foto Mikaelisson" />
            <h1>Mikaelisson Gesuino</h1>
            <p>Front-end Developer</p>
          </Identification>

          <Skills>
            <h1>Tecnologias</h1>

            <ContainerSkills>
              {skills.map((skill, index) => {
                return (
                  <ContainerSkill key={index} width={skill.level}>
                    <ContainerIcon>{skill.icon}</ContainerIcon>

                    <Skill>
                      <p>{skill.name}</p>
                      <p>{skill.level}</p>
                    </Skill>
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
