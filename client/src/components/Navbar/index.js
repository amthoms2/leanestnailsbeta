// import { useState, useEffect } from "react";
import { IconContext } from 'react-icons/lib';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavContainer,
  NavbarLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLink,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavContainer>
            <NavbarLogo to="/">Logo</NavbarLogo>
            <MobileIcon>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="/about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="/services"
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
                  to="/gallery"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Gallery
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLink to="/shop">Shop</NavLink>
              </NavItem>
            </NavMenu>

            <NavBtn>
            <NavBtnLink to='/signin'> Sign Out</NavBtnLink>
            </NavBtn>
          </NavContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import {logout} from "../../redux/api";
// import { useSelector } from "react-redux";
// import { FaBars } from "react-icons/fa";
// import { IconContext } from "react-icons/lib";
// // import { animateScroll as scrollUp } from "react-scroll";
// import {
//   Nav,
//   NavContainer,
//   NavbarLogo,
//   MobileIcon,
//   NavMenu,
//   NavItem,
//   NavLink,
//   NavLinks,
//   NavBtn,
//   // NavBtnLink,
// } from "./NavbarElements";

// const Navbar = ({ toggleBar }) => {
//   // const [scroll, setScroll] = useState(false);
//   // const user = useSelector((state) => state.user.currentUser);
//   // const dispatch = useDispatch();

//   // const scrollChange = () => {
//   //   if (window.scrollY >= 80) {
//   //     setScroll(true);
//   //   } else {
//   //     setScroll(false);
//   //   }
//   // };

//   // const toggleHome = () => {
//   //   scrollUp.scrollToTop();
//   // };

//   // const handleClick = (evt) => {
//   //   evt.preventDefault();
//   //   logout(dispatch);
//   // };

//   // useEffect(() => {
//   //   window.addEventListener("scroll", scrollChange);
//   // }, []);

//   return (
//     <>
//       <IconContext.Provider value={{ color: "#fff" }}>
//       {/* <Nav scroll={scroll}> */}
//         <Nav>
//           <NavContainer>
//           {/* <NavbarLogo to="/" onClick={toggleHome}> */}
//             <NavbarLogo to="#">
//               Logo
//             </NavbarLogo>
//             <MobileIcon onClick={toggleBar}>
//               <FaBars />
//             </MobileIcon>
//             <NavMenu>
//               <NavItem>
//                 <NavLinks
//                   to="#"
//                   smooth={true}
//                   duration={500}
//                   spy={true}
//                   exact="true"
//                   offset={-80}
//                 >
//                   About
//                 </NavLinks>
//               </NavItem>
//               <NavItem>
//                 <NavLinks
//                   to="#"
//                   smooth={true}
//                   duration={500}
//                   spy={true}
//                   exact="true"
//                   offset={-80}
//                 >
//                   Services
//                 </NavLinks>
//               </NavItem>
//               <NavItem>
//                 <NavLinks
//                   to="#"
//                   smooth={true}
//                   duration={500}
//                   spy={true}
//                   exact="true"
//                   offset={-80}
//                 >
//                   Gallery
//                 </NavLinks>
//               </NavItem>
//               <NavItem>
//                 <NavLink to="#">Shop</NavLink>
//               </NavItem>
//             </NavMenu>

//             {/* {user ? ( */}
//               <NavBtn>
//                 {/* <NavBtnLink> Sign Out</NavBtnLink> */}
//               </NavBtn>
//             {/* ) : (
//               <NavBtn>
//                 <NavBtnLink to="#">Sign In</NavBtnLink>
//               </NavBtn>
//             )} */}
//           </NavContainer>
//         </Nav>
//       </IconContext.Provider>
//     </>
//   );
// };

// export default Navbar;
