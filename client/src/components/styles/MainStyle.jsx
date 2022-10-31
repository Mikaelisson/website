import styled from "styled-components";

export const MainStyle = styled.main`
  height: 100%;
`;

export const Title = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 2.5rem;
  margin-top: 20px;
`;

export const Formations = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow-x: auto;

  ::-webkit-scrollbar {
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    border: #3e3a6d solid 2px;
    border-radius: 50px;
  }

  ::-webkit-scrollbar-thumb {
    background: #3e3a6d;
    border-radius: 50px;
  }
`;

export const FormationAdditional = styled.div`
  min-width: 200px;
  width: 200px;
  height: 100%;
  padding: 5px;
  margin: 30px 11px;
  margin-right: 50px;
  border: #e1ac04 solid 2px;
  border-right: transparent;
  border-radius: 5px;
  box-shadow: -10px 10px 2px #3e3a6d;
  position: relative;

  h1 {
    color: #fff;
    font-size: 1rem;
    margin: 0;
    text-align: center;
  }
  p {
    font-size: 0.8rem;
    font-weight: 400;
    color: #808080;
    margin: 2px 0;
  }
  span {
    width: 2px;
    height: 100%;
    background-color: #e1ac04;
    position: absolute;
    right: 0;
    bottom: 0;
    animation: animationFormation 2s ease;
    animation-delay: 0.5s;
  }
  @keyframes animationFormation {
    0% {
      height: 1%;
    }
    100% {
      height: 100%;
    }
  }
`;

export const ContainerProjects = styled.div`
  h1 {
    text-align: center;
    color: #fff;
    margin: 40px 0;
  }
`;

export const Projects = styled.div``;

export const Project = styled.div`
  max-width: 1100px;
  display: grid;
  grid-template: auto auto / 1fr 1fr;
  border: #e1ac04 solid 2px;
  border-radius: 40px;
  padding: 15px;
  gap: 10px;
  margin: 0 auto;
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
    padding: 10px;
    transition: 0.3s;
    box-shadow: -10px 10px 0 #3e3a6d;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

    &:hover {
      padding: 0;
    }
  }
`;

export const ImageProject = styled.div`
  max-width: 500px;
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 1;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }

  img {
    width: 100%;
    border-top-left-radius: 30px;
    border: #e1ac04 solid 2px;

    @media screen and (max-width: 768px) {
      border-top-left-radius: 38px;
      border-top-right-radius: 38px;
      border: 0;
    }
  }
`;

export const ProjectData = styled.div`
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 1;

  p {
    color: #808080;
    margin-bottom: 20px;
  }
  h3 {
    color: #fff;
    font-size: 1.6rem;
    text-align: center;
    margin: 10px 0;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    h1,
    p {
      margin: 0 10px;
    }
    p {
      margin: 20px;
    }
  }
`;

export const ButtonProject = styled.a`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 2;

  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  color: #000;
  background-color: #e1ac04;
  border: transparent solid 2px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  padding: 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
    border: transparent;
    color: #000;
    background-color: #e1ac04;
  }

  &:hover {
    color: #e1ac04;
    border: #e1ac04 solid 2px;
    background-color: transparent;
  }
`;
