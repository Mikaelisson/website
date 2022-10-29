import GlobalStyled from "./components/styles/global";
import { Container } from "./components/styles/Container";
import { Header, Title, ButtonCV } from "./components/styles/Header";

const App = () => {
  return (
    <Container>
      <GlobalStyled />
      <Header>
        <Title>Sejam Bem Vindos ao Meu Espaço!</Title>
        <ButtonCV>BAIXAR CV</ButtonCV>
      </Header>
    </Container>
  );
};

export default App;
