import Main from "./components/Main";
import Credits from "./components/credits/Credits";
import Header from "./components/Header";

import GlobalStyled from "./components/styles/global";
import { Container } from "./components/styles/Container";

const App = () => {
  return (
    <div>
      <Container>
        <Header />
        <Main />
      </Container>
      <Credits />
      <GlobalStyled />
    </div>
  );
};

export default App;
