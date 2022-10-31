import styled from "styled-components";

export const HeaderStyle = styled.header`
  color: #fff;
  font-weight: 600;
  background: url("https://mikaelisson.github.io/portfolio/public/assets/images/montanha.jpg");
  background-size: cover;
  background-position: 50% 50%;
  padding: 40px;
`;

export const TitleBanner = styled.h1`
  font-size: 7rem;
  margin-bottom: 30px;

@media screen and (max-width: 768px) {
  font-size: 5rem;
}

@media screen and (max-width: 425px) {
  font-size: 4.5rem;
}

@media screen and (max-width: 375px) {
  font-size: 4rem;
}

@media screen and (max-width: 320px) {
  font-size: 3.5rem;
}
`;

export const ButtonCV = styled.a`
  text-decoration: none;
  color: #e1ac04;
  font-size: 1rem;
  font-weight: 500;
  border: #e1ac04 solid 2px;
  padding: 10px;
`;
