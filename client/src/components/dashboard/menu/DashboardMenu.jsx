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
import { List, User, Users } from "./DashboardMenuStyled";

import { IoCloseSharp, IoSettingsSharp } from "react-icons/io5";
import { AiFillHome, AiFillFileAdd, AiFillEdit } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { FaUserPlus } from "react-icons/fa";
import UserPanel from "../users/Userpanel";
import { Overlap } from "../projects/add-and-edit-project/AddOrEditProjectStyled";
import { BorderEffect, ButtonsForm } from "../../admin/AdminStyled";

//user list
import { HiUsers } from "react-icons/hi";
import { ContainerEditImage } from "../projects/add-and-edit-project/EditImageStyled";
import { ButtonProject, ContainerButtons } from "../../projects/ProjectStyled";

const DashboardMenu = (props) => {
  const [showAddProject, setShowAddProject] = useState(false);
  const [email, setEmail] = useState(props.email);
  const [userPanel, setUserPanel] = useState(false);
  const [userList, setUserList] = useState(false);
  const [newUser, setNewUser] = useState(true);
  const [users, setUsers] = useState([]);

  const onSetShowAddProject = () => {
    setShowAddProject(!showAddProject);
  };

  const onSetUserPanel = (param) => {
    setUserPanel(param);
  };

  const onSetUserList = (param) => {
    setUserList(param);
  };

  const usersAPI = async () => {
    const data = await fetch("/admin/users");
    const users = await data.json();
    setUsers(users);
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
                  <li>
                    <button
                      onClick={() => {
                        usersAPI();
                        onSetUserList(true);
                        props.changeMenu();
                      }}
                    >
                      <HiUsers /> Usuários
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        onSetUserPanel(true);
                        props.changeMenu();
                      }}
                    >
                      <FaUserPlus /> Novo Usuário
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

      {userList && <UserList onSetUserList={onSetUserList} users={users} />}

      {userPanel && (
        <UserPanel
          newUser={newUser}
          onSetUserPanel={onSetUserPanel}
          consultProjects={props.consultProjects}
          changeLoading={props.changeLoading}
          email={props.email}
        />
      )}
    </>
  );
};

export default DashboardMenu;

const UserList = (props) => {
  return (
    <Overlap>
      <BorderEffect>
        <ContainerEditImage>
          <h1>Lista de Usuários</h1>
          <Users>
            {props.users.map((user, index) => (
              <>
                <div key={index}>
                  <p>{user.name}</p>
                  <ContainerButtons>
                    <ButtonProject
                      widthElement={"20px"}
                      paddingElement={"0"}
                      buttonBgColor={"#8a8a8a"}
                      onClick={() => {}}
                    >
                      <AiFillEdit style={{ width: "15px" }} />
                    </ButtonProject>

                    <ButtonProject
                      widthElement={"20px"}
                      paddingElement={"0"}
                      buttonBgColor={"#bb0f0f"}
                      onClick={() => {}}
                    >
                      <IoCloseSharp style={{ width: "15px" }} />
                    </ButtonProject>
                  </ContainerButtons>
                </div>
              </>
            ))}
          </Users>
          <ButtonsForm>
            <button type="button" onClick={() => props.onSetUserList(false)}>
              Cancelar
            </button>
          </ButtonsForm>
        </ContainerEditImage>
      </BorderEffect>
    </Overlap>
  );
};
