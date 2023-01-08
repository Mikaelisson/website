import { useEffect, useState } from "react";

import {
  ContainerProjects,
  Project,
  ImageProject,
  ProjectData,
  LinkProject,
  ContainerButtons,
} from "./ProjectStyled";
import { Title } from "../styles/MainStyled";

import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

const Projects = (props) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/api/search/projects")
      .then((res) => res.json())
      .then((res) => {
        setProjects(res);
      });
  }, []);

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
                <LinkProject
                  widthElement="auto"
                  href={element.repository}
                  target="_blank"
                >
                  <FaGithub />
                </LinkProject>
                <LinkProject
                  widthElement="100%"
                  href={element.url}
                  target="_blank"
                >
                  <div>
                    ver mais
                    <BiLinkExternal />
                  </div>
                </LinkProject>
                {props.children}
              </ContainerButtons>
            </Project>
          );
        })}
      </div>
    </ContainerProjects>
  );
};

export default Projects;
