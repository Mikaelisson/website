import GlobalStyled from "../styles/global";
import {
  BorderEffect,
  ButtonsForm,
  Container,
  FormLogin,
  InputGroup,
} from "./AdminStyled";

const Admin = () => {
  return (
    <Container>
      <BorderEffect>
        <FormLogin>
          <h1>Entre com sua conta</h1>

          <InputGroup>
            <input type="text" name="email" />
            <label htmlFor="email">Email</label>
          </InputGroup>

          <InputGroup>
            <input type="text" name="password" />
            <label htmlFor="password">Senha</label>
          </InputGroup>

          <ButtonsForm>
            <button type="button">Cancelar</button>
            <button type="submit">Entrar</button>
          </ButtonsForm>
        </FormLogin>
      </BorderEffect>
      <GlobalStyled />
    </Container>
  );
};

export default Admin;
