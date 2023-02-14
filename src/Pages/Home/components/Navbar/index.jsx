import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { useState } from "react";
import Busca from "../Busca/BuscaNav";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../../Images/logonav.png";

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
          <img alt="pokebox" className="navbar-brand" src={logo} />
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
