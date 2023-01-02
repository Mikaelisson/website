import styled from "styled-components";

export const ContainerRoute = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  animation: animated 2s;

  @keyframes animated {
    0% {
      top: 100%;
    }
    100% {
      top: 0;
    }
  }
`;
