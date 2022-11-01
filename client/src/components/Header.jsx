import { useState } from "react";
import Footer from "./Credits";
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
  Skill,
  SkillLevel,
  LevelSkill,
} from "./styles/Menu";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "90%" },
    { name: "Javascript", level: "80%" },
    { name: "React.JS", level: "50%" },
    { name: "Bootstrap", level: "70%" },
    { name: "Express.js", level: "70%" },
    { name: "MongoDB", level: "60%" },
    { name: "Firebase", level: "20%" },
    { name: "Automação com UiPath", level: "60%" },
  ];

  return (
    <HeaderStyle>
      <Menu
        onChange={() => {
          if (activeMenu) setActiveMenu(false);
          else setActiveMenu(true);
        }}
      >
        <CheckboxMenu type="checkbox" id="checkbox-menu" />

        <LabelMenu htmlFor="checkbox-menu">
          <SpanMenu />
          <SpanMenu />
          <SpanMenu />
        </LabelMenu>
      </Menu>
      <Sidebar activeMenu={activeMenu}>
        <SidebarInformations>
          <Identification>
            <img
              src="https://mikaelisson.github.io/portfolio/public/assets/images/mikaelisson-redu.png"
              alt="Foto Mikaelisson"
            />
            <h1>Mikaelisson Gesuino</h1>
            <p>Front-end Developer</p>
          </Identification>
          <Skills>
            <h1>Habilidades</h1>

            <ContainerSkills>
              {skills.map((skill, index) => {
                return (
                  <div key={index}>
                    <Skill>
                      <p>{skill.name}</p>
                      <p>{skill.level}</p>
                    </Skill>

                    <SkillLevel>
                      <LevelSkill width={`${skill.level}`} />
                    </SkillLevel>
                  </div>
                );
              })}
            </ContainerSkills>
          </Skills>
          <Footer />
        </SidebarInformations>
      </Sidebar>
      <TitleBanner>Sejam Bem Vindos ao Meu Espaço!</TitleBanner>
      <ButtonCV href="#" target="_blank">
        BAIXE MEU CV
      </ButtonCV>
    </HeaderStyle>
  );
};

export default Header;
