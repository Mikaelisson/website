import { useContext } from "react";
import { RouteContext } from "../private/contextRoute";
import { Background } from "../styles/Background";
import GlobalStyled from "../styles/global";
import {
  BorderEffect,
  ButtonsForm,
  Container,
  FormLogin,
  InputGroup,
} from "./AdminStyled";

const Admin = () => {
  const [email, setEmail, password, setPassword, token, setToken] =
    useContext(RouteContext);

  const login = () => {
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
              <button formAction="/" formMethod="GET">
                Cancelar
              </button>
              <button
                onClick={(event) => {
                  event.preventDefault();
                  login();
                }}
              >
                Entrar
              </button>
            </ButtonsForm>
          </FormLogin>
        </BorderEffect>
        <GlobalStyled />
      </Container>
    </Background>
  );
};

export default Admin;
