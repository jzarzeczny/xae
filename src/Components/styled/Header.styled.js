import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  @media (min-width: ${({ theme }) => theme.brakepoints.desktop}) {
    grid-column: 1/4;
    grid-row: 1/2;
    display: grid;
    grid-template-columns: 1fr 8fr 1fr;
  }
`;

export const StyledLogo = styled.h1`
  font-weight: 700;
  font-size: 48px;
  color: #fff;
  margin: 0;
  padding: 0;
  @media (min-width: ${({ theme }) => theme.brakepoints.desktop}) {
    grid-column: 1/2;
  }
`;
export const HamburgerButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;
export const HamburgerLine = styled.div`
  width: 14px;
  height: 3px;
  background-color: #fff;

  &:first-of-type {
    position: absolute;
    width: 27px;

    top: 7px;
  }
  &:last-of-type {
    position: absolute;
    width: 27px;

    bottom: 7px;
  }
`;

export const NavbarContainer = styled.nav`
  width: 600px;
  grid-column: 2/3;
  justify-self: end;
`;

export const NavbarList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`;

export const NavbarElement = styled.li``;

export const NavbarLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
`;

export const HeaderMode = styled.div`
  background-image: url("./mode.svg");
  height: 35px;
  width: 35px;
  font-size: 20px;
  font-weight: 700;
  grid-column: 3/4;
  justify-self: end;
`;
export function Hamburger() {
  return (
    <HamburgerButton>
      <HamburgerLine />
      <HamburgerLine />
      <HamburgerLine />
    </HamburgerButton>
  );
}

export function Navbar() {
  return (
    <NavbarContainer>
      <NavbarList>
        <NavbarElement>
          <NavbarLink to="/">Home</NavbarLink>
        </NavbarElement>
        <NavbarElement>
          <NavbarLink to="/">About</NavbarLink>
        </NavbarElement>
        <NavbarElement>
          <NavbarLink to="/">Gallery</NavbarLink>
        </NavbarElement>
        <NavbarElement>
          <NavbarLink to="/">Constact</NavbarLink>
        </NavbarElement>
      </NavbarList>
    </NavbarContainer>
  );
}
