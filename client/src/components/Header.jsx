import { useState } from "react";
import Credits from "./Credits";
import { HeaderStyle, TitleBanner, ButtonCV } from "./styles/HeaderStyle";
import {
  Menu,
  CheckboxMenu,
  LabelMenu,
  SpanMenu,
  Sidebar,
  SidebarInformations,
  Identification,
  Skills,
  ContainerSkills,
  ContainerSkill,
  Skill,
  SkillLevel,
  LevelSkill,
  ContainerSidebar,
} from "./styles/Menu";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);

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

  const changeMenu = () => {
    if (activeMenu) setActiveMenu(false);
    else setActiveMenu(true);
  };

  return (
    <HeaderStyle>
      <Menu onChange={() => changeMenu()}>
        <CheckboxMenu type="checkbox" id="checkbox-menu" />

        <LabelMenu htmlFor="checkbox-menu">
          <SpanMenu />
          <SpanMenu />
          <SpanMenu />
        </LabelMenu>
      </Menu>

      <ContainerSidebar activeMenu={activeMenu}>
        <Sidebar activeMenu={activeMenu}>
          <SidebarInformations>
            <Identification>
              <img src="./assets/perfil.png" alt="Foto Mikaelisson" />
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
        </Sidebar>
      </ContainerSidebar>

      <TitleBanner>Sejam Bem Vindos ao Meu Espaço!</TitleBanner>
      <ButtonCV
        href="./assets/MIKAELISSON_DO_NASCIMENTO_GESUINO.pdf"
        target="_blank"
      >
        VISUALIZAR CV
      </ButtonCV>
    </HeaderStyle>
  );
};

export default Header;
