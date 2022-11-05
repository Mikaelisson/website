import styled from "styled-components";

export const FormationsStyle = styled.div`
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
