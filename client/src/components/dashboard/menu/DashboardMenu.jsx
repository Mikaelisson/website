import { useState } from "react";
import Menu from "../../menu/Menu";

import {
  Close,
  ContainerSidebar,
  SidebarInformations,
  SidebarStyle,
} from "../../sidebar/SidebarStyled";
import { List, User } from "./DashboardMenuStyled";

import { IoSettingsSharp } from "react-icons/io5";
import { AiFillHome, AiFillFileAdd } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";

const DashboardMenu = (props) => {
  const [activeMenu, setActiveMenu] = useState(false);

  const changeMenu = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <>
      <Menu changeMenu={changeMenu} activeMenu={activeMenu} />

      <ContainerSidebar activeMenu={activeMenu}>
        <SidebarStyle activeMenu={activeMenu}>
          <SidebarInformations>
            <div>
              <User>
                <p>Seja bem vindo, {props.name}!</p>
                <button
                  onClick={() => {
                    localStorage.setItem("token", JSON.stringify({}));
                    props.withoutPermission();
                  }}
                >
                  <BiLogOutCircle />
                  Logout
                </button>
              </User>
              <List>
                <p>
                  <IoSettingsSharp />
                  Configurações
                </p>
                <ul>
                  <li>
                    <button>
                      <AiFillHome /> Início
                    </button>
                  </li>
                  <li>
                    <button>
                      <AiFillFileAdd /> Novo Projeto
                    </button>
                  </li>
                </ul>
              </List>
            </div>
          </SidebarInformations>
        </SidebarStyle>
        <Close onClick={() => changeMenu()} />
      </ContainerSidebar>
    </>
  );
};

export default DashboardMenu;
