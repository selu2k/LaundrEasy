import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarRoute,
    SideBtnWrap,
  } from "./SidebarElements";
  
  const Sidebar = ({ isOpen, toggle }) => {
    return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="home" onClick={toggle}>
              Home
            </SidebarLink>
            <SidebarLink to="services" onClick={toggle}>
              Services
            </SidebarLink>
            <SidebarLink to="how_it_works" onClick={toggle}>
              How It Works
            </SidebarLink>
            <SidebarLink to="signup" onClick={toggle}>
              Sign Up
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/signin">Sign In</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    );
  };
  
  export default Sidebar;