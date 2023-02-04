import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styleBusca.css";

function Busca({ onChange, value }) {
  /* --------------------------- Estilo da SearchBox -------------------------- */
  return (
    <div align="center" className="md-auto" style={{ padding: "30px" }}>
      <input
        type="search"
        className="cabecalhoSB form-control rounded-pill"
        placeholder="Nome ou ID"
        onChange={onChange}
        value={value}
      ></input>
    </div>
  );
}

export default Busca;
