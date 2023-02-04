import "bootstrap/dist/css/bootstrap.min.css";
import Busca from "../Busca/BuscaCab";
import "./styleCab.css";

function Cabecalho({ onChange, value }) {
  return (
    <div className="fundotopo">
      <div className="justify-content-center">
        <div className="align-items-center">
          <h3>discover your next</h3>
          <h2>Pokemon</h2>
        </div>
      </div>
      <div className="estilobusca">
        <Busca onChange={onChange} value={value} />
      </div>
    </div>
  );
}

export default Cabecalho;
