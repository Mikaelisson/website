import GlobalStyled from "./components/styles/global";
import { Container } from "./components/styles/Container";
import Main from "./components/Main";
import Credits from "./components/Credits";

import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Container>
        <GlobalStyled />
        <Header />
        <Main />
      </Container>
      <Credits />
    </div>
  );
};

export default App;
