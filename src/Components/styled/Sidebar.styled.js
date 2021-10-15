import styled from "styled-components";
export const StyledSidebar = styled.aside`
  width: 100%;
  grid-row: 1/4;
  grid-column: 1/2;
  border-right: 3px solid #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const StyledIcon = styled.a`
  background: url(${({ icon }) => "./social-icons/" + icon + ".svg"});
  background-position: center;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  margin-bottom: 2rem;
`;
