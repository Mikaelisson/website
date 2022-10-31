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
  display: grid;
  grid-template: auto auto / 1fr 1fr;
  border: #e1ac04 solid 2px;
  border-radius: 10px;
  padding: 10px;
  gap: 10px;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ImageProject = styled.div`
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 1;

  img {
    width: 100%;
    border-radius: 10px;
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
  color: #e1ac04;
  border: #e1ac04 solid 2px;
  border-radius: 10px;
  padding: 10px;

  &:hover {
    color: #000;
    border: transparent solid 2px;
    background-color: #e1ac04;
  }
`;
