import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./style.css";
import { useLocation } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

function PokeIMG() {
  const location = useLocation();
  const { state } = location;
  const [sprite, setsprite] = useState();
  const [isShine, setisShine] = useState(false);
  const [types, settypes] = useState([]);

  /* ---------------------------- trocando sprite ---------------------------- */

  const changesprite = () => {
    if (isShine === true) {
      setisShine(false);
      setsprite(state.sprites.other["official-artwork"].front_default);
    }
    if (isShine === false) {
      setisShine(true);
      setsprite(state.sprites.other["official-artwork"].front_shiny);
    }
  };

  /* ---------------------------- pegando os tipos ---------------------------- */
  const gettypes = useCallback((state) => {
    let types = [];
    let arr = state.types;

    arr.forEach((e) => {
      types.push(e.type.name);
    });

    settypes(types);
    setsprite(state.sprites.other["official-artwork"].front_default);
  }, []);

  /* --------------------------- render de component -------------------------- */
  useEffect(() => {
    gettypes(state);
  }, [state, gettypes]);

  /* ------------------------------ inicio da pag ----------------------------- */
  return (
    <div align="center" className={`pokepag ${types[0]} gradient`}>
      <div className="pokepagfront">
        <div className="pokepagcircle">
          <img
            align="center"
            className="pokepagimg"
            src={sprite}
            alt={state.species.name}
          />
        </div>
        <h1 className="pokepagname">
          {state.species.name}
          <br></br>
          <div className="d-flex justify-content-center">
            {types.map((t, index) => (
              <div key={t} className="pokepagtype rounded">
                <div className={`rounded ${t} ${index} color`} key={t}>
                  {t}
                </div>
              </div>
            ))}
          </div>
        </h1>
        <div className="divbuttonshine">
          <Button
            onClick={changesprite}
            className="justify-content-center shinebotao"
            variant="primary"
            size="sm"
            style={{ margin: "0px 0px" }}
          >
            Shine View
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PokeIMG;
