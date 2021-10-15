import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 0 2rem;
  margin-bottom: 4rem;

  background-color: #000;
  display: grid;
  grid-template-columns: 60% 40%;
  @media (min-width: ${({ theme }) => theme.brakepoints.desktop}) {
    grid-column: 2/4;
    grid-row: 3/4;
    display: grid;
    grid-template-columns: 100px 1fr 2fr 1fr;
    margin-bottom: 0;
  }
`;

export const CardImage = styled.img`
  grid-column: 1/2;
  object-fit: cover;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.brakepoints.desktop}) {
    grid-column: 2/3;
  }
`;

export const InfoContainer = styled.div`
  grid-column: 2/3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
  @media (min-width: ${({ theme }) => theme.brakepoints.desktop}) {
    grid-column: ${({ next }) => (next ? "4/5" : "3/4")};
    margin-left: ${({ next }) => "1rem"};

    padding: 0 2rem;
  }
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin: 0.5rem 0;
`;

export const CardPara = styled.p`
  margin: 0.5rem 0;
`;

export const CardArrow = styled.div`
  background-image: url("./arrow.svg");
  background-position: right;
  background-repeat: no-repeat;
  cursor: pointer;
  outline: none;
  border: none;
  height: 8px;
`;
