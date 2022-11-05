import { Title } from "./styles/MainStyled";
import { FormationsStyle, FormationAdditional } from "./styles/FormationsStyled";

const Formations = () => {
  const formation = [
    {
      name: "Formação Acadêmica",
      technology: "",
      course: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      stack: "",
      institution: "Universidade Nove de Julho",
      conclusion: "Conclusão: 07/2023",
    },
    {
      name: "Complementar",
      technology: "",
      course: "Desenvolvimento Web",
      stack: "Full Stack",
      institution: "programadorbr.com",
      conclusion: "Concluído",
    },
    {
      name: "Complementar",
      course: "Desenvolvimento Web",
      technology: "HTML | CSS | Bootstrap | Lógica de Programação",
      stack: "",
      institution: "Digital Innovation One",
      conclusion: "Concluído",
    },
    {
      name: "Complementar",
      course: "",
      technology: "Responsividade e Experiência do Usuário",
      stack: "",
      institution: "Digital Innovation One",
      conclusion: "Concluído",
    },
  ];

  return (
    <div>
      <Title>formações</Title>
      <FormationsStyle>
        {formation.map((element, index) => {
          return (
            <FormationAdditional key={index}>
              {element.name && <h1>{element.name}</h1>}
              {element.course && <p>{element.course}</p>}
              {element.technology && <p>{element.technology}</p>}
              {element.stack && <p>{element.stack}</p>}
              {element.institution && <p>{element.institution}</p>}
              {element.conclusion && <p>{element.conclusion}</p>}
              <span></span>
            </FormationAdditional>
          );
        })}
      </FormationsStyle>
    </div>
  );
};

export default Formations;
