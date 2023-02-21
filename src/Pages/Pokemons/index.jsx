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
          let current = data.chain
          let evolutions = []
          while(current){
            evolutions.push(current.species.name)
            current = current.evolves_to[0]
          }
          setEvolutionChain(evolutions)
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
      <PokeIMG />
      {evolutionChain ?(
      evolutionChain.map(name => {
        return  <PokeData pokename={name} key={name} />
      })):("loanding..")
      }
      
      
    </div>
  );
}

export default Poke;
