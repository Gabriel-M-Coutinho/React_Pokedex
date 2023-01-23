import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function Busca({ onChange, value }) {
  /* --------------------------- Estilo da SearchBox -------------------------- */
  return (
    <div align="center" className="md-auto" style={{ padding: "30px" }}>
      <input
        type="search"
        className="form-control rounded-pill"
        placeholder="Nome ou ID"
        style={{ width: "60%", textAlign: "center" }}
        onChange={onChange}
        value={value}
      ></input>
    </div>
  );
}

export default Busca;
