import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  color: #e1ac04;

  div {
    width: 100%;
    max-width: 400px;
    background-color: #1f1d2a;
    border: #e1ac04 solid 2px;
    border-radius: 15px;
    padding: 15px;
    text-align: center;
  }

  h1 {
    font-size: 3.5rem;
  }

  p {
    font-size: 1.4rem;
    margin: 15px 0;
  }
`;
