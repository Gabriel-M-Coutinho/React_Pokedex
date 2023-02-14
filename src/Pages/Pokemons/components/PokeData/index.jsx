import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import React, {  useEffect } from "react";

const PokemonEvolutions = ({ pokename }) => {
 

 

  

  useEffect(() => {
  
  }, []);

  return (
    <div className="datapag">
      <p>{pokename}</p>
    </div>
  );
};

export default PokemonEvolutions;
