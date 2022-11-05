import { useState } from "react";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import { HeaderStyled, TitleBanner, ButtonCV } from "./styles/HeaderStyled";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const changeMenu = () => {
    if (activeMenu) setActiveMenu(false);
    else setActiveMenu(true);
  };

  return (
    <HeaderStyled>
      <Menu activeMenu={activeMenu} changeMenu={changeMenu} />

      <Sidebar activeMenu={activeMenu} changeMenu={changeMenu} />

      <TitleBanner>Sejam Bem Vindos ao Meu Espaço!</TitleBanner>
      <ButtonCV
        href="./assets/files/MIKAELISSON_DO_NASCIMENTO_GESUINO.pdf"
        target="_blank"
      >
        VISUALIZAR CV
      </ButtonCV>
    </HeaderStyled>
  );
};

export default Header;
