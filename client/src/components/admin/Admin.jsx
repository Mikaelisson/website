import { useState } from "react";
import { Background } from "../styles/Background";
import GlobalStyled from "../styles/global";
import {
  BorderEffect,
  ButtonsForm,
  Container,
  Login,
  InputGroup,
} from "./AdminStyled";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const token = (await fetch("/admin/auth", { method: "POST" })).json();
    console.log(token);
  };

  return (
    <Background>
      <Container>
        <BorderEffect>
          <Login>
            <h1>Entre com sua conta</h1>

            <InputGroup email={email}>
              <input
                type="email"
                name="email"
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
                type="text"
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                required
              />
              <label htmlFor="password">Senha</label>
            </InputGroup>

            <ButtonsForm>
              <button formAction="/" formMethod="get">
                Cancelar
              </button>
              <button type="submit">Entrar</button>
            </ButtonsForm>
          </Login>
        </BorderEffect>
        <GlobalStyled />
      </Container>
    </Background>
  );
};

export default Admin;
