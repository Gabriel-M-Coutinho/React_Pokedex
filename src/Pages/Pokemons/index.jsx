import dadosJSON from "./dados.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { useEffect, useState, useCallback } from "react";
import PokeIMG from "../Pokemons/components/PokeIMG/index";
import PokeData from "../Pokemons/components/PokeData/index";
import { useLocation } from "react-router-dom";
import InfoPoke from "./components/InfoPoke";

function Poke() {
  const location = useLocation();
  const { state } = location;

  const [evolutionChain, setEvolutionChain] = useState(null);

  document.body.style.backgroundColor = "#0c041b";

  const getPokemonEvolutions = useCallback(async (name) => {
    let arr = dadosJSON.find((poke) => poke.name === name);
    const evolution = arr.evo;

    setEvolutionChain(evolution);
  }, []);

  useEffect(() => {
    getPokemonEvolutions(state.name);
  }, [getPokemonEvolutions, state.name]);

  return (
    <div className="d-flex flex-wrap estilobox">
      <PokeIMG />
      <p className="subtitulo linha" style={{ margin: "14vw 0vw 5vw 0vw" }}>
        <span>Evolutions</span>
      </p>
      <div className="centralizartudo">
        <div className="d-flex flex-wrap justify-content-center">
          {evolutionChain
            ? evolutionChain.map((evo) => {
                return (
                  <PokeData
                    pokename={evo.name.toLowerCase()}
                    key={evo.name}
                    id={state.id}
                  />
                );
              })
            : "loanding.."}
        </div>
        <div>
          <InfoPoke />
        </div>
      </div>
    </div>
  );
}

export default Poke;
