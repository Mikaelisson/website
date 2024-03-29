import { useState } from "react";
import { Overlap } from "../projects/add-and-edit-project/AddOrEditProjectStyled";
import { BorderEffect } from "../../admin/AdminStyled";
import { InputGroup } from "../../admin/AdminStyled";
import { ButtonsForm } from "../../admin/AdminStyled";
import { FormLogin } from "../../admin/AdminStyled";

import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const UserPanel = (props) => {
  const [nameInput, setNameInput] = useState(
    props.newUser ? "" : props.informationUser.name
  );
  const [emailInput, setEmailInput] = useState(
    props.newUser ? "" : props.informationUser.email
  );
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
    await data.json();

    props.closeLoading();
    props.onSetShowUserPanel(false);
  };

  const editUser = async () => {
    props.changeLoading();

    await fetch(`/admin/edit/user/${props.informationUser._id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nameInput, emailInput, email: props.email }),
    });

    props.usersAPI();
    props.onSetShowUserPanel(false);
  };

  return (
    <Overlap
      id="overlap"
      onClick={(e) => {
        const id = e.target.id;
        if (id === "overlap") props.onSetShowUserPanel(false);
      }}
    >
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
              id="name"
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
              id="email"
              value={emailInput}
              onChange={(event) => {
                setEmailInput(event.target.value);
              }}
              required
            />
            <label htmlFor="email">E-mail</label>
          </InputGroup>

          {props.newUser && (
            <InputGroup title={passwordInput}>
              <input
                type={seePassword ? "text" : "password"}
                name="password"
                id="password"
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
          )}

          <ButtonsForm>
            <button
              type="button"
              onClick={() => {
                props.onSetShowUserPanel(false);
              }}
            >
              Cancelar
            </button>
            <button
              onClick={() => {
                props.newUser ? registerUser() : editUser();
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

export default UserPanel;
