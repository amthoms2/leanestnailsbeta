// import { useState, useEffect } from "react";
import { IconContext } from 'react-icons/lib';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavContainer,
  Logo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLink,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = ({ toggleBar }) => {
  // const [scroll, setScroll] = useState(false);

  // const scrollChange = () => {
  //   if (window.scrollY >= 80) {
  //     setScroll(true);
  //   } else {
  //     setScroll(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", scrollChange);
  // }, []);
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavContainer>
            <Logo to="/">Logo</Logo>
            <MobileIcon onClick={toggleBar}>
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
              <NavBtnLink to="/signin"> Sign Out</NavBtnLink>
            </NavBtn>
          </NavContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
