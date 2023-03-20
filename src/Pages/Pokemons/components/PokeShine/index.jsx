import "bootstrap/dist/css/bootstrap.min.css";
import { useCallback, useEffect, useState } from "react";

function PokeShine({ json }) {
  const [isShine, setisShine] = useState();
  const [backPNG, backSprite] = useState();
  const [frontPNG, frontSprite] = useState();

  /* ---------------------------- pegando os tipos ---------------------------- */
  const gettypes = useCallback(
    (state) => {
      let types = [];
      let arr = state.types;

      arr.forEach((e) => {
        types.push(e.type.name);
      });

      setisShine(json.sprites.other["official-artwork"].front_shiny);
      backSprite(json.sprites.back_default);
      frontSprite(json.sprites.front_default);
    },
    [json.sprites]
  );

  /* --------------------------- render de component -------------------------- */
  useEffect(() => {
    gettypes(json);
  }, [json, gettypes]);

  /* ------------------------------ inicio da pag ----------------------------- */
  return (
    <div className="divdata">
      <p className="subtitulo linha" style={{ margin: "80px 0px 40px 0px" }}>
        <span>Sprites</span>
      </p>
      <div className="d-flex flex-wrap">
        <div className="card">
          <img
            align="center"
            className="sprite"
            src={frontPNG}
            alt={json.species.name}
          />
        </div>
        <div className="card">
          <img
            align="center"
            className="sprite"
            src={backPNG}
            alt={json.species.name}
          />
        </div>
      </div>
      <p className="name" style={{ margin: "-10px 0px 50px 0px" }}>
        Game Sprites
      </p>
      <div className="card">
        <img align="center" className="sprite" src={isShine} alt="Loading..." />
      </div>
      <p className="name">Shine</p>
      <p className="subtitulo linha" style={{ margin: "40px 0px 40px 0px" }}>
        <span>Evolution</span>
      </p>
    </div>
  );
}

export default PokeShine;
