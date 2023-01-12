import { useEffect } from "react";
import { DashboardContainer } from "./DashboardProjectsStyled";

import {
  Project,
  ImageProject,
  ProjectData,
  LinkProject,
  ContainerButtons,
  ButtonProject,
} from "../../projects/ProjectStyled";
import { Title } from "../../styles/MainStyled";

import { IoCloseSharp } from "react-icons/io5";
import { AiFillEdit } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

const DashboardProjects = (props) => {
  useEffect(() => {
    props.consultProjects();
  }, []);

  const deleteProject = async (id) => {
    const data = await fetch(`/admin/delete/project/${id}`, {
      method: "DELETE",
    });
    await data.json();
    props.changeLoading();
    props.consultProjects();
  };

  const editProject = async () => {
    console.log("edit");
  };

  return (
    <DashboardContainer>
      <Title>projetos</Title>

      {props.projects
        .map((element) => {
          return (
            <Project key={element._id}>
              <ImageProject>
                <img src={element.image} alt={`Imagem de ${element.name}`} />
              </ImageProject>
              <ProjectData>
                {element.title && <h3>{element.title}</h3>}
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

                <ButtonProject
                  buttonBgColor={"#bb0f0f"}
                  onClick={() => deleteProject(element._id)}
                >
                  <IoCloseSharp />
                </ButtonProject>

                <ButtonProject
                  buttonBgColor={"#8a8a8a"}
                  onClick={() => editProject()}
                >
                  <AiFillEdit />
                </ButtonProject>
              </ContainerButtons>
            </Project>
          );
        })
        .reverse()}
    </DashboardContainer>
  );
};

export default DashboardProjects;
