import "bootstrap/dist/css/bootstrap.min.css";
import Busca from "../Busca/BuscaCab";
import "./styleCabold.css";

function Cabecalho({ onChange, value }) {
  return (
    <div className="fundotopo">
      <div className="d-flex justify-content-center align-items-center">
        {/*ESQUERDA*/}
        <img
          className="left1"
          src="https://drive.google.com/uc?export=view&id=14gB9ZDmbmYVj4wlsouo_L7u903spX85l"
          alt="POkeballs"
        />
        <img
          className="left2"
          src="https://drive.google.com/uc?export=view&id=1QlaVhIUV6yEYqA0JCj4rc4sdJ69UJSz4"
          alt="POkeballs"
        />
        {/*CENTRO*/}
        <img
          className="gifcenter"
          src="https://drive.google.com/uc?export=view&id=1VcEAly4pU0hPthx5h5mCKX-HCZ-XzzHX"
          alt="POkeballs"
        />
        {/*DIREITA*/}
        <img
          className="right2"
          src="https://drive.google.com/uc?export=view&id=14gB9ZDmbmYVj4wlsouo_L7u903spX85l"
          alt="POkeballs"
        />
        <img
          className="right1"
          src="https://drive.google.com/uc?export=view&id=1QlaVhIUV6yEYqA0JCj4rc4sdJ69UJSz4"
          alt="POkeballs"
        />
      </div>
      <div className="estilobusca">
        <Busca onChange={onChange} value={value} />
      </div>
    </div>
  );
}

export default Cabecalho;

/*
02 14gB9ZDmbmYVj4wlsouo_L7u903spX85l
03 1QlaVhIUV6yEYqA0JCj4rc4sdJ69UJSz4
04 19H4SU33p_EsajV1iDCSL1GBMQlUn_bpd
05 1CeVWlbl9qTiYZWH3JPjUux9rSI17JStp

*/
