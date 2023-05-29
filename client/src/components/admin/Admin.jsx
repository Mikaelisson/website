import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { RouteContext } from "../private/contextRoute";

import GlobalStyled from "../styles/global";
import {
  BorderEffect,
  ButtonsForm,
  Container,
  FormLogin,
  InputGroup,
} from "./AdminStyled";
import { Background } from "../styles/Background";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Loading from "../loading/Loading";

const Admin = () => {
  const [seePassword, setSeePassword] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [email, setEmail, password, setPassword, token, setToken] =
    useContext(RouteContext);

  const login = (event) => {
    event.preventDefault();
    setShowLoading(!showLoading);

    //login
    fetch("/admin/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => {
      if (res.status === 400) alert("Usuário ou senha inválidos.");
      if (res.status === 200) {
        res.text().then((res) => {
          localStorage.setItem("token", JSON.stringify({ token: res, email }));
          setToken(res);
          setShowLoading(false);
        });
      }
    });
  };

  return (
    <Background>
      <Container>
        <BorderEffect>
          <FormLogin id="formLogin">
            <h1>Entre com sua conta</h1>

            <InputGroup email={email}>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                required
              />
              <label htmlFor="email">Email</label>
            </InputGroup>

            <InputGroup password={password}>
              <input
                type={seePassword ? "text" : "password"}
                name="password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
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
              <Link to={"/"}>
                <button>Cancelar</button>
              </Link>
              <button onClick={(event) => login(event)}>Entrar</button>
            </ButtonsForm>
          </FormLogin>
        </BorderEffect>
        <GlobalStyled />
      </Container>

      {showLoading && <Loading />}
    </Background>
  );
};

export default Admin;
