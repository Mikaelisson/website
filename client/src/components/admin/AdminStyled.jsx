import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e1ac04;
`;

export const BorderEffect = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  border-radius: 30px;
  padding: 5px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: -50%;
    left: -50%;
    background: linear-gradient(0deg, #1f1d2a, #e1ac04, #e1ac04);
    transform-origin: bottom right;
    animation: animate 4s linear infinite;
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const FormLogin = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background-color: #1f1d2a;
  border: #3e3a6d solid 2px;
  z-index: 1;

  h1 {
    margin-bottom: 20px;
  }
`;

export const InputGroup = styled.div`
  width: 100%;
  position: relative;
  margin: 5px 0;

  input {
    width: 100%;
    padding: 10px;
    color: #e1ac04;
    background-color: #1f1d2a;
    border: #3e3a6d solid 2px;
    border-radius: 10px;

    &:focus {
      box-shadow: 0 0 3px #3e3a6d;
    }

    &:focus ~ label {
      top: -8px;
      font-size: 0.9rem;
    }
  }

  label {
    font-size: 1rem;
    font-weight: 600;
    position: absolute;
    left: 16px;
    top: 8px;
    background-color: #1f1d2a;
    padding: 0 2px;
    transition: top 0.3s;

    ${(props) =>
      (props.email || props.password) &&
      css`
        top: -8px;
        font-size: 0.9rem;
      `}
  }
`;

export const ButtonsForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;

  button {
    font-size: 1rem;
    font-weight: 700;
    padding: 8px 12px;
    border: none;
    border-radius: 20px;
    margin-top: 10px;
    margin-left: 10px;
    cursor: pointer;
  }

  button:nth-child(1) {
    color: #525252;
    border: #525252 solid 2px;
    background-color: #1f1d2a;

    &:hover {
      color: #000;
      background-color: #525252;
      transition: 0.2s;
    }
  }

  button:nth-child(2) {
    color: #000;
    background-color: #e1ac04;
    border: transparent solid 2px;

    &:hover {
      color: #000;
      background-color: #886800;
      transition: 0.2s;
    }
  }
`;
