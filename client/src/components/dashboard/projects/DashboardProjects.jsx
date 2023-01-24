import { useEffect, useState } from "react";
import AddOrEditProject from "./add-project/AddOrEditProject";

import {
  Project,
  ImageProject,
  ProjectData,
  LinkProject,
  ContainerButtons,
  ButtonProject,
} from "../../projects/ProjectStyled";
import { Title } from "../../styles/MainStyled";
import { DashboardContainer } from "./DashboardProjectsStyled";

import { IoCloseSharp } from "react-icons/io5";
import { AiFillEdit } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

const DashboardProjects = (props) => {
  const [showEditProject, setShowEditProject] = useState(false);
  const [dataEdit, setDataEdit] = useState("");

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

  const openEditProject = async (event) => {
    if (!showEditProject) {
      setDataEdit(props.projects.filter((project) => project._id == event._id));
    }
    setShowEditProject(!showEditProject);
  };

  const saveEditProject = async (element) => {
    console.log("Save Project");
  };

  return (
    <>
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
                    onClick={() => openEditProject(element)}
                  >
                    <AiFillEdit />
                  </ButtonProject>
                </ContainerButtons>
              </Project>
            );
          })
          .reverse()}
      </DashboardContainer>
      {showEditProject && (
        <AddOrEditProject
          title={`Editar Projeto`}
          callback={saveEditProject}
          showAddOrEditProject={openEditProject}
          changeLoading={props.changeLoading}
          dataEdit={dataEdit}
        />
      )}
    </>
  );
};

export default DashboardProjects;
