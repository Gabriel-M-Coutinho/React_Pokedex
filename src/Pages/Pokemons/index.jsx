
import dadosJSON from './dados.json';
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

  const getPokemonEvolutions = useCallback( async (name) => {
    

    let arr = dadosJSON.find((poke)=> poke.name === name )
    const evolution = arr.evo
    console.log( evolution)

    setEvolutionChain(evolution)

    
   
  },[])
    


  useEffect(() => {
    getPokemonEvolutions(state.name)
   
  }, [getPokemonEvolutions,state.name]);




  return (
    <div className="d-flex flex-wrap estilobox">
      <PokeIMG />
      {evolutionChain ?(
      evolutionChain.map(name => {
        return  <PokeData pokename={name.toLowerCase()} key={name} id={state.id}/>
      })):("loanding..")
      }
      
      
    </div>
  );
}

export default Poke;
