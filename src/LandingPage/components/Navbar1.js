// import React, { useState } from "react";
// import {
//   AppBar,
//   //   Button,
//   Tab,
//   Tabs,
//   Toolbar,
//   Typography,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";

// import {
//   Nav,
//   NavbarContainer,
//   NavLogo,
//   MobileIcon,
//   NavMenu,
//   NavItem,
//   NavLinks,
//   NavBtn,
//   NavBtnLink,
//   LaundrEasyLogo
// } from "./Navbar/NavbarElements";

// import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
// import DrawerComp from "./Drawer";



// function LinkTab(props) {
//   return (
//     <Tab
//       component="a"
//       onClick={(event) => {
//         event.preventDefault();
//       }}
//       {...props}
//     />
//   );
// }

// // function NavTabs() {
// //   const [navValue, setNavValue] = useState(0);

// //   const navChange = (event, newValue) => {
// //     setNavValue(newValue);
// //   };
// // }

// const Navbar = () => {
//   const [value, setValue] = useState();
//   const theme = useTheme();
//   console.log(theme);
//   const isMatch = useMediaQuery(theme.breakpoints.down("md"));
//   console.log(isMatch);


//   return (
//     <React.Fragment>
//       <AppBar sx={{ background: "#278EA5" }}>
//         <Toolbar sx={{ justifyContent: "space-between" }}>

//           <Typography sx={{ fontSize: "2rem", paddingLeft: "2%", width: "25%" }}>
//             <LocalLaundryServiceIcon sx={{ transform: "scale(2)", marginRight: "5%" }} />
//             LaundrEasy
//           </Typography>
//           {isMatch ? (
//             <>
//               <DrawerComp />
//             </>
//           ) : (
//             <>
//               <Tabs
//                 sx={{ marginLeft: "20%" }}
//                 indicatorColor="secondary"
//                 textColor="inherit"
//                 value={value}
//                 onChange={(e, value) => setValue(value)}
//               >
//                 <Tab label="home" />
//                 <Tab label="Services" />
//                 <Tab label="How it works" />
//                 <Tab label="Contact" />
//                 <Tab label="Login" />
//               </Tabs>
//               {/* <Button sx={{ marginLeft: "20%" }} variant="contained">
//               Login
//             </Button>
//               <Button sx={{ marginLeft: "10px" }} variant="contained">
//               SignUp
//             </Button> */}
//             </>
//           )}
//         </Toolbar>
//       </AppBar>
//     </React.Fragment>
//   );
// };


// export default Navbar;

import React from 'react';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  LaundrEasyLogo
} from "./Navbar/NavbarElements";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
// import Logo from "../../../assets/logo-white.svg";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 720) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            {/* <NavLogo to="/" onClick={toggleHome}>
              <LaundrEasyLogo src={Logo} />
            </NavLogo> */}
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="how_it_works"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  How it Works
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="signup"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Sign Up
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink
                to="/signin"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Sign In
              </NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;