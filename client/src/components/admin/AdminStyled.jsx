import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  padding-top: 100px;
  color: #e1ac04;
  background-color: #1f1d2a;
`;

export const FormLogin = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: #3e3a6d solid 2px;

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
    background-color: #1f1d2a;
    border: #3e3a6d solid 2px;
    border-radius: 10px;

    &:focus {
      box-shadow: 0 0 3px #3e3a6d;
    }

    &:focus ~ label {
      top: -8px;
    }
  }

  label {
    font-size: 1rem;
    position: absolute;
    left: 16px;
    top: 8px;
    background-color: #1f1d2a;
    padding: 0 2px;
    transition: top 0.3s;
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

  button[type="button"] {
    color: #525252;
    border: #525252 solid 2px;
    background-color: #1f1d2a;

    &:hover {
      color: #000;
      background-color: #525252;
      transition: 0.2s;
    }
  }

  button[type="submit"] {
    color: #e1ac04;
    border: #e1ac04 solid 2px;
    background-color: #1f1d2a;

    &:hover {
      color: #000;
      background-color: #e1ac04;
      transition: 0.2s;
    }
  }
`;
