import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function PokeCard({ name, url, id }) {
  /* ----------------------------- estados do PokeCard ---------------------------- */
  const [sprite, setsprite] = useState();
  const [types, settypes] = useState([]);

  /* ----------------------------- Component Did Mount ---------------------------- */
  useState(() => {
    GetSprite();
  }, []);
  /* ------------------------ function get request sprite ------------------------- */
  async function GetSprite() {
    let result = await fetch(url);
    let resultadoconvertido = await result.json();
    let sprite = await resultadoconvertido.sprites.other["official-artwork"]
      .front_default;
    let types = gettypes(resultadoconvertido);
    settypes(types);
    setsprite(sprite);
    console.log("getsprite usado");
  }
  /* -------------------------------- get types ------------------------------- */
  function gettypes(dados) {
    let types = [];
    let arr = dados.types;

    arr.forEach((e) => {
      types.push(e.type.name);
    });
    return types;
  }

  /* ---------------------------- retorno html jsx ---------------------------- */
  return (
    <div className="flex" style={{ fontFamily: "Jost", width: "150px" }}>
      <Card>
        <div
          className="rounded mx-auto d-block"
          style={{
            width: "100px",
            height: "100px",
            marginTop: "25px",
            backgroundColor: "gray",
          }}
        ></div>
        <Card.Img
          className="position-absolute zoom"
          style={{ width: "100%" }}
          src={sprite}
        />
        <Card.Body>
          <Card.Title>
            <h3
              className="text-capitalize"
              style={{
                marginTop: "2px",
                fontSize: "18px",
              }}
            >
              {name}
            </h3>
          </Card.Title>
          <Card.Text>
            {/*{id} {url}*/}
            {/* ------------------------------ box dos tipos ----------------------------- */}
            <div
              className="text-uppercase d-flex justify-content-center"
              style={{
                marginTop: "2px",
                fontSize: "8px",
                fontWeight: "normal",
                color: "white",
              }}
            >
              {types.map((t,index) => (
                
                <div
                  className={`rounded ${t} ${index}`}
                  style={{
                    margin: "0px -7px 0px -7px",
                    width: "45px",
                    padding:"2px"
                  }}
                  key={t}
                  
                >
                  {" "}
                  {t}{" "}
                </div>
              ))}
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default PokeCard;
