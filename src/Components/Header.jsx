import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import styles from "./Header.module.css";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand className="mainLogo" href="/">
          <p>
            <span className={styles.mainLogo}>PAUL FRAYSSE</span>
          </p>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
                <NavLink href="/">FILMS </NavLink>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <NavLink href="/">PHOTOGRAPHIES</NavLink>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <NavLink href="/">EXPERIMENTS</NavLink>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <NavLink href="/">ABOUT</NavLink>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
