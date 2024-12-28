import React, { useEffect, useState } from "react";
import "./Header.css";
import NetflixLogo from "../../assets/images/NetflixLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Change 50 to your desired scroll threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Navbar
      expand="lg"
      className={`header_outer_container mx-0 ${
        scrolled ? "bg-dark navbar-dark" : "bg-tranparent navbar-light"
      }`}
    >
      <Container className="d-flex align-items-center justify-content-between mx-auto header_container">
        <Navbar.Brand href="/" className="">
          <img src={NetflixLogo} alt="Netflix Logo" width="100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav header_container bg-black text-white-50 bg-dark">
          <Nav className="me-auto ms-3 expandClass">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#">TVShows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Latest</Nav.Link>
            <Nav.Link href="#">MyList</Nav.Link>
            <Nav.Link href="#">Browse by Languages</Nav.Link>
          </Nav>
          <Nav className="me-auto d-none  d-lg-flex  justify-content-between ">
            <Nav.Link href="#link">
              {" "}
              <SearchIcon />
            </Nav.Link>
            <Nav.Link href="#link">
              <NotificationsNoneIcon />
            </Nav.Link>
            <Nav.Link href="#link">
              <AccountBoxIcon />
            </Nav.Link>
            <Nav.Link href="#link">
              <ArrowDropDownIcon />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;  