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
} from "./SidebarStyled";

const Sidebar = (props) => {
  const skills = [
    { name: "React.js", level: "70%" },
    { name: "Styled Components", level: "70%" },
    { name: "Javascript", level: "80%" },
    { name: "Bootstrap", level: "70%" },
    { name: "Express.js", level: "80%" },
    { name: "MongoDB", level: "70%" },
    { name: "Mongoose", level: "90%" },
    { name: "Firebase", level: "30%" },
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "90%" },
    { name: "Automação com UiPath", level: "60%" },
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
                  <ContainerSkill key={index}>
                    <Skill>
                      <p>{skill.name}</p>
                      <p>{skill.level}</p>
                    </Skill>

                    <SkillLevel>
                      <LevelSkill width={`${skill.level}`} />
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
