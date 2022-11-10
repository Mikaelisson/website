import {
  ContainerProjects,
  Project,
  ImageProject,
  ProjectData,
  ButtonProject,
  ContainerButtons,
} from "./ProjectStyled";
import { Title } from "../styles/MainStyled";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

const Projects = () => {
  const projects = [
    {
      name: "Aplicação Meteorológica",
      description:
        "Informando a cidade na qual deseja saber informações, será retornado dados meteorológicos",
      comments: "",
      mobileSupport: true,
      image:
        "https://mikaelisson.github.io/portfolio/public/assets/projects_images/weather_app.png",
      url: "#",
      repository: "https://github.com/Mikaelisson",
    },
    {
      name: "Sistema de Gerenciamento de Usuários",
      description:
        "Sistema de gerenciamento de usuários podendo atribuir permissões aos indivíduos pertencentes à sua conta, sendo recomendável que você atribua a função de Administrador de Sistema da sua conta a mais de um usuário, para o caso do administrador principal não estar disponível",
      comments: "Para testar utilize usuário ADMINISTRADOR e senha 123456",
      mobileSupport: true,
      image:
        "https://mikaelisson.github.io/portfolio/public/assets/projects_images/sistema_gerenciamento_usuarios.png",
        url: "#",
      repository: "https://github.com/Mikaelisson",
    },
  ];

  return (
    <ContainerProjects>
      <Title>projetos</Title>

      <div>
        {projects.map((element, index) => {
          return (
            <Project key={index}>
              <ImageProject>
                <img src={element.image} alt={`Imagem de ${element.name}`} />
              </ImageProject>
              <ProjectData>
                {element.name && <h3>{element.name}</h3>}
                {element.description && <p>{element.description}</p>}
                {element.comments && <p>{element.comments}</p>}
                {element.mobileSupport ? (
                  <p>Com suporte para mobile</p>
                ) : (
                  <p>Sem suporte para mobile</p>
                )}
              </ProjectData>
              <ContainerButtons>
                <ButtonProject
                  widthElement="auto"
                  href={element.repository}
                  target="_blank"
                >
                  <FaGithub />
                </ButtonProject>
                <ButtonProject
                  widthElement="100%"
                  href={element.url}
                  target="_blank"
                >
                  <div>
                    ver mais
                    <BiLinkExternal />
                  </div>
                </ButtonProject>
              </ContainerButtons>
            </Project>
          );
        })}
      </div>
    </ContainerProjects>
  );
};

export default Projects;
