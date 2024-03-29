import PropTypes from "prop-types"
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar fixed="top" expand="sm">
      <div className="container">
        <NavbarBrand href="/">{siteTitle}</NavbarBrand>
        <NavbarToggler className="navbar-dark" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/rules/">Rules</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/news/">News</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/donors/">Supporters</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/team/">Team</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://aberrantwinds.cloud" target="_blank">Cloud</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://aberrantwinds.bond" target="_blank">Mastodon</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
