import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import React, {  useCallback, useEffect, useState } from "react";

const PokemonEvolutions = ({ pokename }) => {
  const [Sprite,SetSprite] = useState('')
 

  const getsprite = useCallback(()=>{
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
      .then((result)=>{
        return result.json()
      
      }).then((result)=>{
        SetSprite(result.sprites.other["official-artwork"].front_default)
      })
  },[pokename])

  

  useEffect(() => {
    getsprite()
  }, [getsprite]);

  return (
    <div className="datapag">
      <p>{pokename}</p>
     {Sprite? <img src={Sprite} alt='loading...' ></img> : <></>} 
    </div>
  );
};

export default PokemonEvolutions;
