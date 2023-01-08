import { useRouteError } from "react-router-dom";

import { Background } from "../styles/Background";
import GlobalStyled from "../styles/global";
import { Container } from "./errorStyled";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Background>
      <Container>
        <div>
          <h1>Oops!</h1>
          <p>Desculpe, ocorreu um erro inesperado.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
        <GlobalStyled />
      </Container>
    </Background>
  );
}
