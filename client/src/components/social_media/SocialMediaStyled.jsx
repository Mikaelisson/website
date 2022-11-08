import styled from "styled-components";

export const SocialMediaStyle = styled.div`
  width: 40px;
  text-align: center;
  padding: 2px;
  border-radius: 5px;
  background-color: #1e1d29;
  border: #e1ac04 solid 1px;
  box-shadow: #e1ac04 20px 3px;
  position: fixed;
  right: -40px;
  top: 200px;
  animation: animationSocialMedia 1s forwards linear;
  animation-delay: 3s;

  @keyframes animationSocialMedia {
    0% {
      right: -40px;
    }
    95% {
      right: 15px;
    }
    100% {
      right: 4px;
    }
  }
`;

export const LinkSocialMedia = styled.a`
  width: 100%;
  height: 100%;
  text-decoration: none;
  display: inline-block;
  margin: 3px 0;
  cursor: pointer;

  svg {
    width: 90%;
    height: 100%;
    color: #e1ac04;

    &:hover {
      color: #7c5f01;
    }
  }
`;
