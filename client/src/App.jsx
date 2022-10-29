import GlobalStyled from "./components/styles/global";
import { Container } from "./components/styles/Container";
import { Header, Title, ButtonCV } from "./components/styles/Header";
import {
  Main,
  ContainerFormations,
  Formations,
  FormationAdditional,
} from "./components/styles/Main";

const App = () => {
  const formation = [
    {
      name: "Formação Acadêmica",
      technology: "",
      course: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      stack: "",
      institution: "Universidade Nove de Julho",
      date: "Conclusão: 07/2023",
    },
    {
      name: "Complementar",
      technology: "",
      course: "Desenvolvimento Web",
      stack: "Full Stack",
      institution: "programadorbr.com",
      date: "Concluído",
    },
    {
      name: "Complementar",
      course: "Desenvolvimento Web",
      technology: "HTML | CSS | Bootstrap | Lógica de Programação",
      stack: "",
      institution: "Digital Innovation One",
      date: "Concluído",
    },
    {
      name: "Complementar",
      course: "",
      technology: "Responsividade e Experiência do Usuário",
      stack: "",
      institution: "Digital Innovation One",
      date: "Concluído",
    },
  ];

  return (
    <Container>
      <GlobalStyled />
      <Header>
        <Title>Sejam Bem Vindos ao Meu Espaço!</Title>
        <ButtonCV href="#" target="_blank">
          BAIXE MEU CV
        </ButtonCV>
      </Header>
      <Main>
        <ContainerFormations>
          <h1>Formações</h1>
          <Formations>
            {formation.map((element, index) => {
              return (
                <FormationAdditional key={index}>
                  {element.name && <h1>{element.name}</h1>}
                  {element.course && <p>{element.course}</p>}
                  {element.technology && <p>{element.technology}</p>}
                  {element.stack && <p>{element.stack}</p>}
                  {element.institution && <p>{element.institution}</p>}
                  {element.date && <p>{element.date}</p>}
                  <span></span>
                </FormationAdditional>
              );
            })}
          </Formations>
        </ContainerFormations>
      </Main>
    </Container>
  );
};

export default App;
