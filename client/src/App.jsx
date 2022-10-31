import GlobalStyled from "./components/styles/global";
import { Container } from "./components/styles/Container";
import Main from "./components/Main";
import Footer from "./components/Footer";

import Header from "./components/Header";

const App = () => {
  return (
    <Container>
      <GlobalStyled />
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};

export default App;
