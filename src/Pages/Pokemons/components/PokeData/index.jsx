import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import React, { useCallback, useEffect, useState } from "react";
import {Link} from "react-router-dom"

const PokemonEvolutions = ({ pokename , id }) => {
  const [Sprite, SetSprite] = useState("");

  const getsprite = useCallback(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        SetSprite(result.sprites.other["official-artwork"].front_default);
      });
  }, [id]);

  useEffect(() => {
    getsprite();
  }, [getsprite]);

  return (
    <div className="divdata">
        {Sprite ? (
          <Link className="card" to={`/pokemon/${id}`} foto={Sprite}>
          <img className="sprite" src={Sprite} alt="loading..."></img>
          </Link>
        ) : (
          <></>
        )}
      <p className="name">{pokename}</p>
    </div>
  );
};

export default PokemonEvolutions;
