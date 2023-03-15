import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { useLocation } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

function InfoPoke() {
  const location = useLocation();
  const [moves, setmoves] = useState([]);
  const [abilitys, setabilitys] = useState([]);
  const { state } = location;

  const getability = useCallback(() => {
    let arr = [];
    state.abilities.forEach((element) => {
      arr.push(element.ability.name);
    });
    setabilitys(arr);
  }, [state.abilities]);

  const getmoves = useCallback(() => {
    let arr = [];
    let dados = state.moves;

    dados.forEach((element) => {
      let obj = {
        name: element.move.name,
        level_learned: element.version_group_details[0].level_learned_at,
        method_learn: element.version_group_details[0].move_learn_method.name,
      };
      arr.push(obj);
    });

    setmoves(arr);
  }, [state.moves]);

  useEffect(() => {
    getmoves();
    getability();
  }, [getmoves, getability]);

  /* ------------------------------ inicio da pag ----------------------------- */
  return (
    <div align="center" className="infodiv">
      <p className="subtitulo linha">
        <span>About</span>
      </p>
      <ul className="d-flex flex-row">
        <li className="itenslista">
          <b>ID:</b> {state.id}
        </li>
        <li className="itenslista">
          <b>WEIGHT:</b> {state.weight}
        </li>
        <li className="itenslista">
          <b>HEIGHT:</b> {state.height}
        </li>
        <li className="itenslista">
          <b>BASE EXP:</b> {state.base_experience}
        </li>
      </ul>
      {/* --------------------------- estatos de batalha --------------------------- */}
      <p className="subtitulo linha">
        <span>Stats</span>
      </p>
      <ul className="d-flex flex-row">
        <li className="statslista">
          <b>HP:</b> {state.stats[0].base_stat}
        </li>
        <li className="statslista">
          <b>ATK:</b> {state.stats[1].base_stat}
        </li>
        <li className="statslista">
          <b>DEF:</b> {state.stats[2].base_stat}
        </li>
        <li className="statslista">
          <b>SP ATK:</b> {state.stats[3].base_stat}
        </li>
        <li className="statslista">
          <b>SP DEF:</b> {state.stats[4].base_stat}
        </li>
        <li className="statslista">
          <b>SPEED:</b> {state.stats[5].base_stat}
        </li>
      </ul>
      {/* ---------------------------- Movesets e level ---------------------------- */}
      <br></br>
      <p className="subtitulo linha">
        <span>Abilities</span>
      </p>
      <ul className="d-flex flex-row">
        {abilitys.length > 0 &&
          abilitys.map((m, index) => (
            <li key={index} className="statslista">
              {m}
            </li>
          ))}
      </ul>
      <p className="subtitulo linha">
        <span>Moves</span>
      </p>
      <ul className="d-flex flex-row">
        <li className="Htablestyle">
          <b>NAME:</b>
        </li>
        <li className="Htablestyle">
          <b>METHOD:</b>
        </li>
        <li className="Htablestyle">
          <b>LEVEL:</b>
        </li>
      </ul>
      {moves.length > 0 &&
        moves.map((m, index) => (
          <ul key={index} className="d-flex flex-row">
            <li className="tablestyle">{m.name}</li>{" "}
            <li className="tablestyle">{m.method_learn}</li>
            <li className="tablestyle">{m.level_learned}</li>
          </ul>
        ))}
      <div style={{ marginBottom: "8%" }}></div>
    </div>
  );
}

export default InfoPoke;
