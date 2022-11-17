import { PanelStyled, ContainerPanel } from "./PanelStyled";

const Panel = (props) => {
  const login = () => {
    console.log("login");
  };

  return (
    <PanelStyled>
      <ContainerPanel>
        <h1>Configurações</h1>

        <div>
          <input type="text" placeholder="Usuário" name="name" />
          <input type="text" placeholder="Senha" name="password" />
          <div>
            <button type="button" onClick={() => props.showSettings()}>
              Cancelar
            </button>
            <button type="submit" onClick={() => login()}>
              Entrar
            </button>
          </div>
        </div>
      </ContainerPanel>
    </PanelStyled>
  );
};

export default Panel;
