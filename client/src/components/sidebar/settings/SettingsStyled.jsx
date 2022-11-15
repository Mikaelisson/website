import styled from "styled-components";

export const SettingsStyled = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  width: 25px;
  height: 25px;

  border-radius: 100%;
  border: none;

  color: #e1ac04;
  background-color: transparent;

  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;

    &:hover {
      transform: rotate(90deg);
      transition: 0.7s;
    }
  }
`;
