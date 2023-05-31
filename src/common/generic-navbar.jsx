import React, { useState, useEffect } from "react";
import Link from "next/link";
import "jquery/dist/jquery";
import Image from "next/image";

import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

// IMPORTS: Images imports
const NavbarLogoIcon = "/static/common/nav-logo.png";
const OptionsIcon = "/static/common/options.png";
const CloseBtnIcon = "/static/common/close.png";

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
    case "/performance":
      return 3;
    default:
      return 0;
  }
};

function GenericNavbar(props) {
  const [collapsed, setCollapsed] = useState(true);
  const [ActiveTab, setActiveTab] = useState(0);
  const toggleNavbar = () => setCollapsed(!collapsed);

  const openApiVersionURL = () => {
    window.open("https://api-version.mayank5pande.com/", "_self");
  };

  useEffect(() => {
    if (window !== undefined) {
      // setCollapsed(window.innerWidth < 600 ? true : false);
      setActiveTab(getActiveTab(window.location));
    }
  }, []);

  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        expanded={!collapsed}
        className="bottom-border-red"
      >
        <Navbar.Brand href="/" className="navbar-brand parent-head">
          <Image
            src={NavbarLogoIcon}
            className="navbar-logo"
            width={50}
            height={50}
            alt="navbar"
          />
          <p className="head-underline">{` Mayank_MP5`}</p>
        </Navbar.Brand>
        <button
          aria-controls="basic-navbar-nav"
          className="mx-3 options-toggle"
          onClick={toggleNavbar}
        >
          <Image
            width={50}
            height={50}
            src={collapsed ? OptionsIcon : CloseBtnIcon}
            className="options-toggle"
            alt="options-toggle"
          />
          {/* X */}
        </button>
        <Navbar.Collapse id="basic-navbar-nav" className="nav-list-container">
          <Nav className="ml-auto" onClick={() => toggleNavbar()}>
            <Link
              href="/performance"
              className={"text-black nav-link "}
              style={ActiveTab === 3 ? underline : {}}
              onClick={() => toggleNavbar()}
            >
              📈Performance{` `}
              <span className="red-blink-me">new</span>
            </Link>
            <button
              className={
                "text-black nav-link border-0 bg-transparent text-left"
              }
              style={ActiveTab === 4 ? underline : {}}
              onClick={() => openApiVersionURL()}
            >
              ⛏API{` `}
              <span className="red-blink-me">new</span>
            </button>
            <div className="m-auto vertical-stopper">»</div>
            <Link
              href="/home"
              className={"text-black nav-link "}
              style={ActiveTab === 0 ? underline : {}}
              onClick={() => toggleNavbar()}
            >
              🏠Home
            </Link>

            <Link
              href="/projects"
              className={"text-black nav-link "}
              style={ActiveTab === 1 ? underline : {}}
              onClick={() => toggleNavbar()}
            >
              👨‍🏫Projects
            </Link>

            <Link
              href="/explore"
              className={"text-black nav-link "}
              style={ActiveTab === 2 ? underline : {}}
              onClick={() => toggleNavbar()}
            >
              🤩Explore
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default GenericNavbar;
