import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function PokeIMG() {
  const location = useLocation();
  const { state } = location;
  const [types, settypes] = useState([]);

  /* --------------------------- render de component -------------------------- */
  useEffect(() => {
    gettypes(state)
  }, [state]);

  /* ---------------------------- pegando os tipos ---------------------------- */
  const gettypes = (state)=>{
    let types = [];
    let arr = state.types;

    arr.forEach((e) => {
      types.push(e.type.name);
    });

   settypes(types)
  }


  /* ------------------------------ inicio da pag ----------------------------- */
  return (
    <div align="center" className={`pokepag ${types[0]} gradient`}>
      <div className="pokepagfront">
        <div className="pokepagcircle">
          <img
            align="center"
            className="pokepagimg"
            src={state.sprites.other["official-artwork"].front_default}
            alt={state.species.name}
          />
        </div>
        <h1 className="pokepagname">
          {state.species.name}
          <br></br>
          <p className="pokepagname">id: {state.id}</p>
        </h1>
      </div>
    </div>
  );
}

export default PokeIMG;
