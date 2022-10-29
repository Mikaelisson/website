import styled from "styled-components";

export const Main = styled.main`
  height: 100%;
`;

export const ContainerFormations = styled.div`
  h1 {
    text-align: center;
    color: #fff;
    margin-top: 20px;
  }
`;

export const Formations = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
`;

export const FormationAdditional = styled.div`
  min-width: 200px;
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
    font-size: 1rem;
    margin: 0;
  }
  p {
    font-size: 0.8rem;
    color: #808080;
    margin: 5px 0;
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
