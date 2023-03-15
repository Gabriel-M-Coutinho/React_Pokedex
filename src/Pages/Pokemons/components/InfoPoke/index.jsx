import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { useCallback, useEffect, useState } from "react";

function InfoPoke({dados,id}) {
  
  const [moves, setmoves] = useState([]);
  const [abilitys, setabilitys] = useState([]);
  

  const getability = useCallback(() => {
    let arr = [];
    dados.abilities.forEach((element) => {
      arr.push(element.ability.name);
    });
    setabilitys(arr);
  }, [dados.abilities]);

  const getmoves = useCallback(() => {
    let arr = [];
    let o = dados.moves;

    o.forEach((element) => {
      let obj = {
        name: element.move.name,
        level_learned: element.version_group_details[0].level_learned_at,
        method_learn: element.version_group_details[0].move_learn_method.name,
      };
      arr.push(obj);
    });

    setmoves(arr);
  }, [dados.moves]);

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
          <b>ID:</b> {dados.id}
        </li>
        <li className="itenslista">
          <b>WEIGHT:</b> {dados.weight}
        </li>
        <li className="itenslista">
          <b>HEIGHT:</b> {dados.height}
        </li>
        <li className="itenslista">
          <b>BASE EXP:</b> {dados.base_experience}
        </li>
      </ul>
      {/* --------------------------- estatos de batalha --------------------------- */}
      <p className="subtitulo linha">
        <span>Stats</span>
      </p>
      <ul className="d-flex flex-row">
        <li className="statslista">
          <b>HP:</b> {dados.stats[0].base_stat}
        </li>
        <li className="statslista">
          <b>ATK:</b> {dados.stats[1].base_stat}
        </li>
        <li className="statslista">
          <b>DEF:</b> {dados.stats[2].base_stat}
        </li>
        <li className="statslista">
          <b>SP ATK:</b> {dados.stats[3].base_stat}
        </li>
        <li className="statslista">
          <b>SP DEF:</b> {dados.stats[4].base_stat}
        </li>
        <li className="statslista">
          <b>SPEED:</b> {dados.stats[5].base_stat}
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
            <li key={index} className="itenslista">
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
