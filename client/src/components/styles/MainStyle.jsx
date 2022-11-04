import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  text-transform: capitalize;
  color: #fff;
  font-size: 2.5rem;
  margin-top: 20px;
`;


export const ContainerProjects = styled.div`
  h1 {
    text-align: center;
    color: #fff;
    margin: 40px 0;
  }
`;

export const Project = styled.div`
  max-width: 1100px;
  display: grid;
  grid-template: auto auto / 1fr 1fr;
  border: #e1ac04 solid 2px;
  border-radius: 30px;
  padding: 15px;
  gap: 10px;
  margin: 0 auto;
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
    padding: 10px;
    transition: 0.5s;
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
      border-top-left-radius: 28px;
      border-top-right-radius: 28px;
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

export const ContainerButtons = styled.div`
  display: flex;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 2;
  gap: 10px;
  margin-bottom: 10px;
`;

export const ButtonProject = styled.a`
  width: ${(props) => props.widthElement};
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  color: #000;
  background-color: #e1ac04;
  border: transparent solid 2px;
  border-radius: 40px;
  padding: 10px;

  @media screen and (max-width: 768px) {
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
