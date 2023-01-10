import { useEffect, useState } from "react";
import { DashboardContainer } from "./DashboardProjectsStyled";

import {
  Project,
  ImageProject,
  ProjectData,
  LinkProject,
  ContainerButtons,
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

  return (
    <DashboardContainer>
      <Title>projetos</Title>

      {props.projects
        .map((element, index) => {
          return (
            <Project key={index}>
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

                <LinkProject href="#" buttonBgColor={"#bb0f0f"}>
                  <IoCloseSharp />
                </LinkProject>

                <LinkProject href="#" buttonBgColor={"#8a8a8a"}>
                  <AiFillEdit />
                </LinkProject>
              </ContainerButtons>
            </Project>
          );
        })
        .reverse()}
    </DashboardContainer>
  );
};

export default DashboardProjects;
