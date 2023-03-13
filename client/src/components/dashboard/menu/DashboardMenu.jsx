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
import {
  AiFillHome,
  AiFillFileAdd,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { FaUserPlus } from "react-icons/fa";
import { Overlap } from "../projects/add-and-edit-project/AddOrEditProjectStyled";
import { BorderEffect } from "../../admin/AdminStyled";

//userpanel
import { InputGroup } from "../../admin/AdminStyled";
import { ButtonsForm } from "../../admin/AdminStyled";
import { FormLogin } from "../../admin/AdminStyled";

const DashboardMenu = (props) => {
  const [showAddProject, setShowAddProject] = useState(false);
  const [email, setEmail] = useState(props.email);
  const [userPanel, setUserPanel] = useState(false);
  const [newUser, setNewUser] = useState(true);

  const onSetShowAddProject = () => {
    setShowAddProject(!showAddProject);
  };

  const onSetUserPanel = (param) => {
    setUserPanel(param);
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
                        onSetUserPanel(true);
                        props.changeMenu();
                      }}
                    >
                      <FaUserPlus /> User
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

const UserPanel = (props) => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [seePassword, setSeePassword] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");

  const registerUser = async () => {
    props.changeLoading();

    const data = await fetch("/admin/add/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nameInput,
        emailInput,
        passwordInput,
        email: props.email,
      }),
    });
    const doc = await data.json();
    console.log(doc);

    props.consultProjects();
    props.onSetUserPanel(false);
  };

  return (
    <Overlap>
      <BorderEffect>
        <FormLogin
          id="formUser"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <h1>{props.newUser ? "Adicionar Usuário" : "Editar Usuário"}</h1>

          <InputGroup title={nameInput}>
            <input
              type="text"
              name="name"
              value={nameInput}
              onChange={(event) => {
                setNameInput(event.target.value);
              }}
              required
            />
            <label htmlFor="name">Nome</label>
          </InputGroup>

          <InputGroup title={emailInput}>
            <input
              type="text"
              name="email"
              value={emailInput}
              onChange={(event) => {
                setEmailInput(event.target.value);
              }}
              required
            />
            <label htmlFor="email">E-mail</label>
          </InputGroup>

          <InputGroup title={passwordInput}>
            <input
              type={seePassword ? "text" : "password"}
              name="password"
              value={passwordInput}
              onChange={(event) => {
                setPasswordInput(event.target.value);
              }}
              required
            />

            <button
              onClick={(event) => {
                event.preventDefault();
                setSeePassword(!seePassword);
              }}
            >
              {seePassword ? (
                <AiOutlineEyeInvisible title="Esconder senha" />
              ) : (
                <AiOutlineEye title="Mostrar senha" />
              )}
            </button>
            <label htmlFor="password">Senha</label>
          </InputGroup>

          <ButtonsForm>
            <button type="button" onClick={() => props.onSetUserPanel(false)}>
              Cancelar
            </button>
            <button
              onClick={() => {
                registerUser();
              }}
            >
              Salvar
            </button>
          </ButtonsForm>
        </FormLogin>
      </BorderEffect>
    </Overlap>
  );
};

export default DashboardMenu;
