import { useState } from "react";
import Menu from "../../menu/Menu";
import { Link } from "react-router-dom";
import AddOrEditProject from "../projects/add-and-edit-project/AddOrEditProject";

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
  const [email, setEmail] = useState(props.email);

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
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={() => setEmail(props.email)}
                  value={email}
                  hidden
                />
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
                        props.changeUploadImage(true);
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
        <Close onClick={() => props.changeMenu()} />
      </ContainerSidebar>

      {showAddProject && (
        <AddOrEditProject
          title={`Novo Projeto`}
          consultProjects={props.consultProjects}
          showAddOrEditProject={onSetShowAddProject}
          changeLoading={props.changeLoading}
          showAddProject={showAddProject}
          uploadImage={props.uploadImage}
          email={props.email}
        />
      )}
    </>
  );
};

export default DashboardMenu;
