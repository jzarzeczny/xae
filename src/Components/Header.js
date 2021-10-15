import React from "react";
import {
  StyledHeader,
  StyledLogo,
  Hamburger,
  Navbar,
  HeaderMode,
} from "./styled/Header.styled";
export default function Header({ width }) {
  return (
    <StyledHeader>
      <StyledLogo>Xae</StyledLogo>
      {width < 1024 ? (
        <Hamburger />
      ) : (
        <>
          <Navbar />
          <HeaderMode />
        </>
      )}
    </StyledHeader>
  );
}
