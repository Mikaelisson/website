import { HeaderStyle, TitleBanner, ButtonCV } from "./styles/HeaderStyle";

const Header = () => {
  return (
    <HeaderStyle>
      <TitleBanner>Sejam Bem Vindos ao Meu Espaço!</TitleBanner>
      <ButtonCV href="#" target="_blank">
        BAIXE MEU CV
      </ButtonCV>
    </HeaderStyle>
  );
};

export default Header;
