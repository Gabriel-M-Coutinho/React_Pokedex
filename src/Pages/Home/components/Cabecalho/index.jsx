import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Busca from "../Busca/BuscaCab";

function Cabecalho({ onChange, value }) {
  return (
    <div className="fundotopo">
      <div className="topo toposize">
        <div className="justify-content-center">
          <div className="EstiloTexto">
            <h3 className="h3cab">Discover your next</h3>
            <h2 className="h2cab">Pokemon</h2>
          </div>
        </div>
      </div>
      <div className="pesquisaCab">
        <Busca onChange={onChange} value={value} />
      </div>
    </div>
  );
}

export default Cabecalho;
