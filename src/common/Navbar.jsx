import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "jquery/dist/jquery";
import "bootstrap/dist/js/bootstrap.min.js";

import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

import "./common.css";
import navLogo from "./img/nav_logo.png";

const underline = {
  borderBottom: "2px solid gray",
  fontWeight: "bold",
  borderWidth: "50%",
};

const getActiveTab = (obj) => {
  switch (obj.pathname) {
    case "/home":
      return 0;
    case "/projects":
      return 1;
    case "/explore":
      return 2;
    default:
      return 0;
  }
};
function NavbarX(props) {
  const [collapsed, setCollapsed] = useState(
    window.innerWidth < 600 ? true : false
  );
  const [ActiveTab, setActiveTab] = useState(getActiveTab(useLocation()));
  const toggleNavbar = () => setCollapsed(!collapsed);

  console.log(useLocation());
  let loc = useLocation();

  useEffect(() => {
    setActiveTab(getActiveTab(loc));
  }, [loc]);

  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand to='/' className='navbar-brand'>
          <img src={navLogo} className='navbar-logo' />
          mayank_mp5
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' className='mx-3' />
        <Navbar.Collapse id='basic-navbar-nav' className='nav-list-container'>
          <Nav className='ml-auto'>
            <Link
              to='/home'
              className={"nav-link "}
              style={ActiveTab === 0 ? underline : {}}>
              🏠Home
            </Link>

            <Link
              to='/projects'
              className={"nav-link "}
              style={ActiveTab === 1 ? underline : {}}>
              👨‍🏫Projects
            </Link>

            <Link
              to='/explore'
              className={"nav-link "}
              style={ActiveTab === 2 ? underline : {}}>
              🤩Explore
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavbarX;
