import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { useEffect,useState,useCallback } from "react";
import PokeIMG from "../Pokemons/components/PokeIMG/index";
import PokeData from "../Pokemons/components/PokeData/index";
import { useLocation } from "react-router-dom";

function Poke() {
  const location = useLocation();
  const { state } = location;

  const [evolutionChain, setEvolutionChain] = useState(null);

  document.body.style.backgroundColor = "#0c041b";

  const getevolution = useCallback(()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${state.id}`)
    .then((res) => res.json())
    .then((data) => {
      const evolutionChainUrl = data.evolution_chain.url;

      fetch(evolutionChainUrl)
        .then((res) => res.json())
        .then((data) => {
          setEvolutionChain(data.chain);
        })
        .catch((err) => {
          console.error(err);
        });
    })
    .catch((err) => {
      console.error(err);
    });
  },[state.id])



  useEffect(() => {
   getevolution()
  }, [getevolution]);




  return (
    <div className="d-flex flex-wrap estilobox">
      {evolutionChain ?(
      evolutionChain.evolves_to.map(evolution => {
        return  <PokeData pokename2={evolution.species.name} key={evolution.species.name} />
      })):("loanding..")
      }
      <PokeIMG />
      
    </div>
  );
}

export default Poke;
