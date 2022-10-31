import {
  Formations,
  FormationAdditional,
  ContainerProjects,
  Projects,
  Title,
  Project,
  ImageProject,
  ProjectData,
  ButtonProject,
} from "./styles/MainStyle";

const Main = () => {
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

  const projects = [
    {
      name: "Aplicação Meteorológica",
      description:
        "Informando a cidade na qual deseja saber informações, será retornado dados meteorológicos",
      mobile: true,
      image:
        "https://mikaelisson.github.io/portfolio/public/assets/projects_images/weather_app.png",
      note: "",
      link: "#",
    },
    {
      name: "Sistema de Gerenciamento de Usuários",
      description:
        "Sistema de gerenciamento de usuários podendo atribuir permissões aos indivíduos pertencentes à sua conta, sendo recomendável que você atribua a função de Administrador de Sistema da sua conta a mais de um usuário, para o caso do administrador principal não estar disponível",
      image:
        "https://mikaelisson.github.io/portfolio/public/assets/projects_images/sistema_gerenciamento_usuarios.png",
      mobile: true,
      note: "Para testar utilize usuário ADMINISTRADOR e senha 123456",
      link: "#",
    },
  ];

  return (
    <div>
      <Title>Formações</Title>
      <Formations>
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
      </Formations>

      <ContainerProjects>
        <Title>Projetos</Title>

        <Projects>
          {projects.map((element, index) => {
            return (
              <Project key={index}>
                <ImageProject>
                  <img src={element.image} alt={`Imagem de ${element.name}`} />
                </ImageProject>
                <ProjectData>
                  {element.name && <h3>{element.name}</h3>}
                  {element.description && <p>{element.description}</p>}
                  {element.note && <p>{element.note}</p>}
                  {element.mobile ? (
                    <p>Com suporte para Mobile</p>
                  ) : (
                    <p>Sem suporte para Mobile</p>
                  )}
                </ProjectData>
                <ButtonProject href={element.link}>visualizar</ButtonProject>
              </Project>
            );
          })}
        </Projects>
      </ContainerProjects>
    </div>
  );
};

export default Main;
