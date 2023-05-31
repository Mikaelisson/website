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
import UserPanel from "../users/UserPanelControl";

//user list
import { HiUsers } from "react-icons/hi";
import UserList from "../users/UserList";

import { IoSettingsSharp } from "react-icons/io5";
import { AiFillHome, AiFillFileAdd } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { FaUserPlus } from "react-icons/fa";

const DashboardMenu = (props) => {
  const [showAddProject, setShowAddProject] = useState(false);
  const [email, setEmail] = useState(props.email);
  const [showUserPanel, setShowUserPanel] = useState(false);
  const [userList, setUserList] = useState(false);
  const [newUser, setNewUser] = useState(true);
  const [users, setUsers] = useState([]);
  const [informationUser, setInformationUser] = useState("");

  const onSetShowAddProject = () => {
    setShowAddProject(!showAddProject);
  };

  const onSetShowUserPanel = (param) => {
    setShowUserPanel(param);
  };

  const onSetUserList = (param) => {
    setUserList(param);
  };

  const onSetInformationUser = (param) => {
    setInformationUser(param);
  };

  const usersAPI = async () => {
    const data = await fetch("/admin/users");
    const users = await data.json();
    setUsers(users);
    props.closeLoading();
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
                        props.changeLoading();
                        usersAPI();
                        onSetUserList(true);
                        setNewUser(false);
                        props.changeMenu();
                      }}
                    >
                      <HiUsers /> Usuários
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        onSetShowUserPanel(true);
                        setNewUser(true);
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

      {userList && (
        <UserList
          onSetUserList={onSetUserList}
          users={users}
          email={props.email}
          onSetInformationUser={onSetInformationUser}
          onSetShowUserPanel={onSetShowUserPanel}
          usersAPI={usersAPI}
          changeLoading={props.changeLoading}
          closeLoading={props.closeLoading}
        />
      )}

      {showUserPanel && (
        <UserPanel
          newUser={newUser}
          informationUser={informationUser}
          onSetShowUserPanel={onSetShowUserPanel}
          consultProjects={props.consultProjects}
          changeLoading={props.changeLoading}
          closeLoading={props.closeLoading}
          email={props.email}
          usersAPI={usersAPI}
        />
      )}
    </>
  );
};

export default DashboardMenu;
