import styled from "styled-components";

const LoadingStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  ::after,
  ::before {
    content: "";
    width: 50px;
    height: 50px;

    border: transparent solid 4px;
    border-right: #e1ac04 solid 4px;
    border-radius: 100%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    animation: load 2s infinite;
  }
  ::before {
    animation-delay: 0.5s;
  }
  @keyframes load {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loading = () => {
  return <LoadingStyled />;
};

export default Loading;
