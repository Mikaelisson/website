import styled from "styled-components";

export const User = styled.div`
  padding: 20px;
  border-bottom: #3e3a6d solid 2px;

  p {
    word-wrap: break-word;
    font-size: 1.6rem;
    font-weight: 700;
    color: #e1ac04;
  }

  button {
    width: 28px;
    overflow: hidden;

    font-weight: 600;

    padding: 5px;
    margin-top: 10px;

    display: flex;
    align-items: center;
    gap: 2px;

    color: #e1ac04;
    background: none;
    border: 1px solid #e1ac04;
    border-radius: 5px;

    cursor: pointer;

    svg {
      width: 15px;
      height: 15px;
      margin-right: 3px;
      overflow: visible;
    }

    &:hover {
      width: 77px;
      color: #1f1d2a;
      background-color: #e1ac04;
      transition: width 0.5s;
    }
  }
`;

export const List = styled.nav`
  text-align: center;

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-top: 15px;
    margin-bottom: 20px;
    font-size: 1.3rem;
    font-weight: 600;
    color: #e1ac04;

    svg {
      animation: animated 8s linear infinite;

      @keyframes animated {
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  li {
    text-align: left;
  }

  li a {
    text-decoration: none;
  }

  li button {
    display: flex;
    gap: 5px;
    width: 95%;
    padding: 10px;
    font-size: 1rem;
    font-weight: 600;
    color: #e1ac04;
    border: none;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    border: #e1ac04 solid 2px;
    border-left: none;
    background-color: #1f1d2a;
    cursor: pointer;

    &:hover {
      width: 99%;
      color: #1f1d2a;
      background-color: #e1ac04;
      transition: width 0.3s;
    }
  }
`;

export const Users = styled.div`
  width: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 0;
  }
  p {
    margin-right: 10px;
    font-weight: 600;
  }
`;
