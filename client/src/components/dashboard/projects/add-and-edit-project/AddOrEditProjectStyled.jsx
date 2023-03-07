import styled from "styled-components";

export const Overlap = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);

  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form{
    display: flex;
    flex-direction: column;
  }
`;
