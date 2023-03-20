import dadosJSON from "./dados.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { useEffect, useState, useCallback } from "react";
import PokeIMG from "../Pokemons/components/PokeIMG/index";
import PokeData from "../Pokemons/components/PokeData/index";
import { useParams } from "react-router-dom";
import InfoPoke from "./components/InfoPoke";
import PokeShine from "./components/PokeShine";

function Poke({ Sprite }) {
  const params = useParams();
  const { id } = params;
  const [evolutionChain, setEvolutionChain] = useState(null);
  const [result, setresult] = useState();

  document.body.style.backgroundColor = "#0c041b";

  const RequestPoke = useCallback(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((result) => {
        return result.json();
      })
      .then((poke) => {
        const data = poke;
        setresult(data);
      });
  }, [id]);

  const getPokemonEvolutions = useCallback((data) => {
    if (data !== undefined) {
      const arr = dadosJSON.find((poke) => poke.name === data.name);
      const evolution = arr.evo;
      setEvolutionChain(evolution);
    }
  }, []);

  useEffect(() => {
    RequestPoke();
    getPokemonEvolutions(result);
  }, [getPokemonEvolutions, RequestPoke, result]);

  return (
    <div autoFocus>
      <div>{result && <PokeIMG json={result} />}</div>
      <div className="centralizartudo">
        <div style={{ margin: "0px 0px 150px 0px" }}>
          {result && <PokeShine json={result} />}
        </div>
        <div
          className="d-flex flex-wrap justify-content-center"
          style={{ margin: "-100px 0px -50px" }}
        >
          {evolutionChain
            ? evolutionChain.map((evo) => {
                return (
                  <PokeData
                    pokename={evo.name.toLowerCase()}
                    key={evo.name}
                    id={evo.id}
                  />
                );
              })
            : "loanding.."}
        </div>
        <div>{result && <InfoPoke id={id} dados={result} />}</div>
      </div>
    </div>
  );
}

export default Poke;
