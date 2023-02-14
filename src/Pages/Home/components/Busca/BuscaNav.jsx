import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function Busca({ onChange, value }) {
  /* --------------------------- Estilo da SearchBox -------------------------- */
  return (
    <div align="center">
      <input
        type="search"
        className="BuscaNavbar form-control rounded-pill"
        placeholder="Nome ou ID"
        onChange={onChange}
        value={value}
      ></input>
    </div>
  );
}

export default Busca;
