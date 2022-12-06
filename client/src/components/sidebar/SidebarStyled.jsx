import styled, { css } from "styled-components";

export const ContainerSidebar = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;

  ${(props) =>
    props.activeMenu === true &&
    css`
      z-index: 1;
    `}
`;

export const SidebarStyle = styled.div`
  max-width: 425px;
  width: 100%;
  height: 100%;
  background-color: #1e1d29;
  border-right: #212030 solid 1px;
  position: absolute;

  left: -100%;

  ${(props) =>
    props.activeMenu === true &&
    css`
      left: 0;
    `}

  transition: .3s ease;
`;

export const Close = styled.div`
  width: auto;
  height: 100%;
`;

export const SidebarInformations = styled.div`
  height: 100%;
  display: grid;
  grid-template: 200px auto 100px / 100%;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
    background-color: #1f1d2a;
  }

  ::-webkit-scrollbar-track {
    border: #3e3a6d solid 2px;
    border-radius: 50px;
  }

  ::-webkit-scrollbar-thumb {
    background: #3e3a6d;
    border-radius: 50px;
  }

  @media screen and (max-width: 768px) {
    ::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export const Identification = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #21202b;
  position: relative;

  img {
    width: 110px;
    border-radius: 100%;
    border: #3e3a6d solid 2px;
    background-color: #1e1d29;
  }

  h1 {
    color: #fff;
    font-size: 1rem;
    margin-top: 5px;
  }

  p {
    color: #808080;
    font-size: 0.7rem;
    margin-top: 5px;
  }
`;

export const Skills = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 10px;

  h1 {
    color: #fff;
    width: 100%;
    font-size: 1rem;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;

export const ContainerSkills = styled.div`
  width: 100%;
  padding: 5px 15px;
  border-radius: 3px;
`;

export const ContainerSkill = styled.div`
  display: flex;
  column-gap: 10px;
  padding: 5px 10px;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.4) 0 0 5px;
  border-radius: 5px;

  &:hover div svg {
    transform: rotate(360deg);
    transition: transform 1s;
  }
`;

export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: #e1ac04;
    width: 30px;
    height: 30px;
    padding: 2px;
  }
`;

export const Skill = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  p {
    color: #e1ac04;
    font-size: 0.8rem;
    font-weight: 900;
    letter-spacing: 1px;
    margin: 5px 0;
    padding: 0 2px;
  }
`;
