import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "jquery/dist/jquery";
import "bootstrap/dist/js/bootstrap.min.js";

import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

import "./common.css";
import navLogo from "./img/nav_logo.png";

// Close and Option Buttons
import Option from "./img/options.png";
import Close from "./img/close.png";

const underline = {
  borderBottom: "2px solid rgb(75, 9, 9, 0.623)",
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

  // console.log(useLocation());
  let loc = useLocation();

  useEffect(() => {
    setActiveTab(getActiveTab(loc));
  }, [loc]);

  useEffect(() => {}, [ActiveTab]);

  return (
    <>
      <Navbar
        bg='light'
        expand='lg'
        expanded={!collapsed}
        className='bottom-border-red'>
        <Link to='/' style={{ textDecoration: "none" }}>
          <Navbar.Brand className='navbar-brand parent-head'>
            <img src={navLogo} className='navbar-logo' />
            <p className='head-underline'>Mayank_MP5</p>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle
          aria-controls='basic-navbar-nav'
          className='mx-3 options-toggle'>
          <img
            src={collapsed ? Option : Close}
            className='options-toggle'
            onClick={toggleNavbar}
          />
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav' className='nav-list-container'>
          <Nav className='ml-auto' onClick={() => toggleNavbar()}>
            <Link
              to='/home'
              className={"text-black nav-link "}
              style={ActiveTab === 0 ? underline : {}}
              onClick={() => toggleNavbar()}>
              🏠Home
            </Link>

            <Link
              to='/projects'
              className={"text-black nav-link "}
              style={ActiveTab === 1 ? underline : {}}
              onClick={() => toggleNavbar()}>
              👨‍🏫Projects
            </Link>

            <Link
              to='/explore'
              className={"text-black nav-link "}
              style={ActiveTab === 2 ? underline : {}}
              onClick={() => toggleNavbar()}>
              🤩Explore
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavbarX;
