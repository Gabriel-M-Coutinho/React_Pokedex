import "bootstrap/dist/css/bootstrap.min.css";
import "./styleNav.css";
import { useState } from "react";
import Busca from "../Busca/BuscaNav";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function TopNav({ onChange, value }) {
  const [navbar, setnavbar] = useState(false);

  const changenav = () => {
    if (window.scrollY >= 680) {
      setnavbar(true);
    } else {
      setnavbar(false);
    }
  };
  window.addEventListener("scroll", changenav);

  return (
    <div className="divsize">
      <Navbar
        className={navbar ? "estilonav active " : "estilonav"}
        variant="dark"
      >
        <Container>
          <img
            alt="pokebox"
            className="navbar-brand"
            src="https://drive.google.com/uc?export=view&id=1i1Ftq6jNY6gnwOlFfMkL_qorTBjclU8P"
          />{" "}
        </Container>
        <Nav
          className={
            navbar
              ? "justify-Content-End visivel"
              : "justify-Content-End invisivel"
          }
        >
          <Busca onChange={onChange} value={value} />
        </Nav>
      </Navbar>
    </div>
  );
}

export default TopNav;
