import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { useCallback, useEffect, useState } from "react";

function PokeIMG({ json }) {
  const [sprite, setsprite] = useState();
  const [types, settypes] = useState([]);

  /* ---------------------------- trocando sprite ---------------------------- */

  /* ---------------------------- pegando os tipos ---------------------------- */
  const gettypes = useCallback(
    (state) => {
      let types = [];
      let arr = state.types;

      arr.forEach((e) => {
        types.push(e.type.name);
      });

      settypes(types);

      setsprite(json.sprites.other["official-artwork"].front_default);
    },
    [json.sprites.other]
  );

  /* --------------------------- render de component -------------------------- */
  useEffect(() => {
    gettypes(json);
  }, [json, gettypes]);

  /* ------------------------------ inicio da pag ----------------------------- */
  return (
    <div align="center" className={`pokepag ${types[0]} gradient`}>
      <div className="pokepagfront">
        <div className="pokepagcircle">
          <img
            align="center"
            className="pokepagimg"
            src={sprite}
            alt={json.species.name}
          />
        </div>
        <h1 className="pokepagname">
          {json.species.name}
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
      </div>
    </div>
  );
}

export default PokeIMG;
