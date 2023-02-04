import "bootstrap/dist/css/bootstrap.min.css";
import "./styleNav.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function TopNav({ onChange, value }) {
  const [navbar, setnavbar] = useState(false);

  const changenav = () => {
    if (window.scrollY >= 450) {
      setnavbar(true);
    } else {
      setnavbar(false);
    }
  };
  window.addEventListener("scroll", changenav);

  return (
    <Navbar
      className={navbar ? "estilonav active" : "estilonav"}
      collapseOnSelect
      expand="md"
      variant="dark"
    >
      <Container>
        <img
          alt="pokebox"
          className="navbar-brand"
          src="https://drive.google.com/uc?export=view&id=1i1Ftq6jNY6gnwOlFfMkL_qorTBjclU8P"
        />

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className=" justify-content-center margem"
        >
          <Nav>
            <Nav.Link className="gap" href="#features">
              Features
            </Nav.Link>
            <Nav.Link className="gap" href="#pricing">
              Pricing
            </Nav.Link>
            <Nav.Link className="gap" href="#deets">
              More deets
            </Nav.Link>
            <Nav.Link className="gap" eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;
