import "./styleMais.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function VerMais(props) {
  return (
    <Button
      className="justify-content-center"
      onClick={props.onClick}
      variant="primary"
      size="lg"
      disabled={props.desabilitar}
      style={{ margin: "30px 0px 50px 0px" }}
    >
      Ver mais
    </Button>
  );
}
export default VerMais;
