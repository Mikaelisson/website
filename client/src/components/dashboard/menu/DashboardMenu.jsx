import { useState } from "react";
import Menu from "../../menu/Menu";
import { Link } from "react-router-dom";
import AddProject from "../projects/add-project/AddProject";

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
  const [showAddProject, setShowAddProject] = useState(false);

  const onSetShowAddProject = () => {
    setShowAddProject(!showAddProject);
  };
  return (
    <>
      <Menu changeMenu={props.changeMenu} activeMenu={props.activeMenu} />

      <ContainerSidebar activeMenu={props.activeMenu}>
        <SidebarStyle activeMenu={props.activeMenu}>
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
                    <Link to={"/"}>
                      <button>
                        <AiFillHome /> Início
                      </button>
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        onSetShowAddProject();
                        props.changeMenu();
                      }}
                    >
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

      {showAddProject && (
        <AddProject
          consultProjects={props.consultProjects}
          onSetShowAddProject={onSetShowAddProject}
          changeLoading={props.changeLoading}
        />
      )}
    </>
  );
};

export default DashboardMenu;
