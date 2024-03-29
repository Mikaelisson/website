import { useEffect, useState } from "react";
import AddOrEditProject from "./add-and-edit-project/AddOrEditProject";

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
import EditImage from "./add-and-edit-project/EditImage";

import { IoCloseSharp } from "react-icons/io5";
import { AiFillEdit } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

const DashboardProjects = (props) => {
  const [showEditProject, setShowEditProject] = useState(false);
  const [dataEdit, setDataEdit] = useState("");
  const [showEditImage, setShowEditImage] = useState(false);
  const [imageEditingData, setImageEditingData] = useState("");

  //query projects
  useEffect(() => {
    props.consultProjects();
  }, []);

  //delete project
  const deleteProject = async (id) => {
    const data = await fetch(`/admin/delete/project/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: props.email }),
    });
    await data.json();
    props.changeLoading(); //view screen loading
    props.consultProjects();
  };

  //open edit screen
  const openEditProject = async (element) => {
    if (!showEditProject) {
      props.changeUploadImage(false);
      setDataEdit(
        props.projects.filter((project) => project._id == element._id)
      );
    }
    setShowEditProject(!showEditProject); //show and hide screen editing
  };

  //edit image
  const editImage = (element) => {
    setImageEditingData(element);
    setShowEditImage(!showEditImage);
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
                  <img src={element.image} alt={`Imagem do projeto`} />
                  <ButtonProject
                    buttonBgColor={"#8a8a8a"}
                    onClick={() => editImage(element)}
                  >
                    <AiFillEdit />
                  </ButtonProject>
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
                    buttonBgColor={"#8a8a8a"}
                    onClick={() => openEditProject(element)}
                  >
                    <AiFillEdit />
                  </ButtonProject>

                  <ButtonProject
                    buttonBgColor={"#bb0f0f"}
                    onClick={() => deleteProject(element._id)}
                  >
                    <IoCloseSharp />
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
          showAddOrEditProject={openEditProject}
          changeLoading={props.changeLoading}
          dataEdit={dataEdit}
          consultProjects={props.consultProjects}
          uploadImage={props.uploadImage}
          email={props.email}
        />
      )}

      {showEditImage && (
        <EditImage
          editImage={editImage}
          imageEditingData={imageEditingData}
          email={props.email}
          uploadImage={props.uploadImage}
          changeLoading={props.changeLoading}
          consultProjects={props.consultProjects}
        />
      )}
    </>
  );
};

export default DashboardProjects;
