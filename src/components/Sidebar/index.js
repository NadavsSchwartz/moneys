import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu,
  SidebarRoute,
  SideBtnWrapper,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">About</SidebarLink>
        </SidebarMenu>
        {/* <SidebarMenu>
          <SidebarLink to="signup">Sign Up</SidebarLink>
        </SidebarMenu> */}
        <SideBtnWrapper>
          <SidebarRoute to="/signin"> Sign In</SidebarRoute>
        </SideBtnWrapper>
        <SidebarMenu>
          <SidebarLink to="discover">Discover</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
