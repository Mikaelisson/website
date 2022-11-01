import styled, { css } from "styled-components";

export const Menu = styled.div`
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

export const Sidebar = styled.div`
  max-width: 425px;
  width: 95%;
  height: 100%;
  background-color: #1e1d29;
  border-right: #212030 solid 1px;
  position: fixed;
  top: 0;
  left: -100%;

  ${(props) =>
    props.activeMenu === true &&
    css`
      left: 0;
    `}

  z-index: 1;
  transition: 0.3s ease-in;
`;

export const SidebarInformations = styled.div`
  height: 100%;
  display: grid;
  grid-template: 200px auto 100px / 100%;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
    background-color: #1f1d2a;
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

export const Identification = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #21202b;

  img {
    width: 110px;
    border-radius: 50%;
    border: #3e3a6d solid 2px;
    background-color: #1e1d29;
  }

  h1 {
    color: #fff;
    font-size: 1rem;
    margin-top: 5px;
  }

  p {
    color: #808080;
    font-size: 0.7rem;
    margin-top: 5px;
  }
`;

export const Skills = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 10px;

  h1 {
    width: 100%;
    font-size: 1rem;
    text-align: center;
    color: #1e1d29;
    margin-bottom: 10px;
  }
`;

export const ContainerSkills = styled.div`
  width: 100%;
  padding: 5px 15px;
  border-radius: 3px;
`;

export const Skill = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  p {
    color: #808080;
    font-size: 0.8rem;
    margin: 5px 0;
    font-weight: 400;
  }
  p:nth-child(2) {
    font-weight: 400;
    color: #e1ac04;
    text-shadow: #e1ac04 0 0 1px;
  }
`;

export const SkillLevel = styled.div`
  max-width: 100%;
  height: 4px;
  background-color: #3e3a6d;
  position: relative;
  margin-bottom: 10px;
  animation-name: animationSkill 3s forwards;
  animation-delay: 0.5s;
  cursor: pointer;

  @keyframes animationSkill {
    0% {
      width: 10%;
    }
    100% {
      width: 100%;
    }
  }
`;

export const LevelSkill = styled.span`
  width: ${(props) => props.width};
  height: 4px;
  background-color: #e1ac04;
  position: absolute;
  box-shadow: #e1ac04 0 0 3px;

  &::after {
    content: "";
    width: 6px;
    height: 6px;
    background-color: #e1ac04;
    border-radius: 50%;
    filter: blur(1px);
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
`;
