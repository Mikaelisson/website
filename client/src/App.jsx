import GlobalStyled from "./components/styles/global";
import { Container } from "./components/styles/Container";
import Main from "./components/Main";
import Footer from "./components/Footer";

import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Container>
        <GlobalStyled />
        <Header />
        <Main />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
