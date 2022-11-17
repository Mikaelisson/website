import styled from "styled-components";

export const PanelStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgb(0, 0, 0, 0.5);

  padding: 0 40px;
  padding-top: 20px;
`;

export const ContainerPanel = styled.div`
  max-width: 500px;
  width: 100%;

  padding: 20px;

  margin: 0 auto;
  margin-top: 30px;

  background-color: #1f1d2a;

  border-radius: 20px;

  h1 {
    font-size: 1.2rem;
    font-weight: 900;
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;

    margin: 0 auto;
    margin-top: 20px;

    max-width: 500px;
    width: 100%;
  }

  div input {
    color: #e1ac04;

    padding: 10px;
    padding-left: 15px;

    margin: 5px 0;

    border: #3e3a6d solid 2px;
    border-radius: 20px;

    background-color: transparent;
  }

  div div {
    display: flex;
    flex-direction: row;
    justify-content: end;
    gap: 5px;
    margin-top: 10px;
  }

  div div button {
    font-weight: 800;
    color: #3e3a6d;
    background-color: transparent;

    padding: 6px 14px;

    border: #3e3a6d solid 2px;
    border-radius: 40px;

    cursor: pointer;
  }
  div div button {
    &:hover {
      color: #fff;
      transition: 0.5s;
    }
  }

  div div button[type="submit"] {
    &:hover {
      background-color: #147af0;
      border: #147af0 solid 2px;
    }
  }

  div div button[type="button"] {
    &:hover {
      background-color: #b12222;
      border: #b12222 solid 2px;
    }
  }
`;
