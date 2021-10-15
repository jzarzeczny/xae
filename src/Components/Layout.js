import styled from "styled-components";

export const Layout = styled.div`
  @media (min-width: ${({ theme }) => theme.brakepoints.desktop}) {
    display: grid;
    grid-template-columns: 200px 1fr 1fr;
    grid-template-rows: 100px auto 1fr;
    padding: 0 1rem;
  }
`;
