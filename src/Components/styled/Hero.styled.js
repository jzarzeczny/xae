import styled from "styled-components";

export const HeroContainer = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 2fr 1fr 1fr;
  position: relative;

  background-image: url(./boxes.svg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom -400px right;

  @media (min-width: ${({ theme }) => theme.brakepoints.desktop}) {
    grid-column: 2/4;
    grid-row: 2/3;
    grid-template-columns: 40% 60%;
    grid-template-rows: 100px repeat(2, 1fr);
    overflow-x: hidden;
    background-image: url(./boxes-b.svg);

    background-size: cover;
    background-position: bottom -400px left 150px;
  }
`;

export const HeroImage = styled.img`
  position: absolute;
  object-fit: contain;
  width: 80%;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
  @media (min-width: ${({ theme }) => theme.brakepoints.desktop}) {
    width: 30%;
    top: 20%;
    left: 40%;
    transform: none;
  }
`;

export const HeroTitle = styled.h2`
  grid-column: 1/2;
  grid-row: 2/3;
  vertical-align: top;
  align-self: start;

  font-size: 48px;
  line-height: 1.1;
  @media (min-width: ${({ theme }) => theme.brakepoints.desktop}) {
    font-size: 72px;
    margin-left: 5rem;
  }
`;

export const HeroPara = styled.p`
  grid-column: 1/2;
  grid-row: 3/4;
  @media (min-width: ${({ theme }) => theme.brakepoints.desktop}) {
    margin-left: 5rem;
  }
`;
