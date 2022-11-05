import styled, { css } from "styled-components";

export const MenuStyled = styled.div`
  position: fixed;
  top: 0;
  right: 11px;
  background-color: #3e3a6d;
  padding: 10px;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  z-index: 2;
`;

export const CheckboxMenu = styled.input`
  position: absolute;
  opacity: 0;

  ${(props) =>
    props.activeMenu === true &&
    css`
      &:checked + label span:nth-child(1) {
        transform: rotate(-45deg);
        top: 8px;
      }

      &:checked + label span:nth-child(2) {
        opacity: 0;
      }

      &:checked + label span:nth-child(3) {
        transform: rotate(45deg);
        top: 8px;
      }
    `}
`;

export const LabelMenu = styled.label`
  cursor: pointer;
  position: relative;
  display: block;
  height: 22px;
  width: 30px;

  span:nth-child(1) {
    top: 0;
  }

  span:nth-child(2) {
    top: 8px;
  }

  span:nth-child(3) {
    top: 16px;
  }
`;

export const SpanMenu = styled.span`
  position: absolute;
  display: block;
  height: 5px;
  width: 100%;
  border-radius: 30px;
  background-color: #e1ac04;
  transition: 0.25s ease-in-out;
`;

