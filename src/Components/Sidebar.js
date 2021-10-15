import React from "react";
import { StyledIcon, StyledSidebar } from "./styled/Sidebar.styled";

function Sidebar() {
  return (
    <StyledSidebar>
      <StyledIcon icon="facebook" />
      <StyledIcon icon="instagram" />
      <StyledIcon icon="twitter" />
    </StyledSidebar>
  );
}

export default Sidebar;
