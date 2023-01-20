import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

function PokeCard({name,url,id}){
/* ----------------------------- estados do PokeCard ---------------------------- */
    const [sprite,setsprite] = useState()
    const [types,settypes] = useState([])

/* ----------------------------- Component Did Mount ---------------------------- */
    useState(()=>{GetSprite()
    },[])
/* --------------------------- function get request sprite --------------------------- */
    async function GetSprite(){
        let result = await fetch(url)
        let resultadoconvertido = await result.json()
        let sprite = await resultadoconvertido.sprites.other['official-artwork'].front_default
        let types = gettypes(resultadoconvertido)
        settypes(types)
        setsprite(sprite)
        console.log('getsprite usado')
    }
/* -------------------------------- get types ------------------------------- */
function gettypes(dados){
    let types = []
    let arr = dados.types

    arr.forEach((e)=>{
        types.push(e.type.name)
    })  
    return types
}





/* ---------------------------- retorno html jsx ---------------------------- */
    return(
        <div className='flex'>
            <Card style={{ width: '18rem'}}>
                <div  className="rounded mx-auto d-block"
                style={{ width: '14rem', height: '14rem', marginTop: '30px', backgroundColor:'gray'}}
                ></div>
            <Card.Img className="position-absolute zoom"  style={{ width: '18rem'}}  src={sprite}  />
            <Card.Body>
                <Card.Title><h3 className="text-capitalize"
                    style={{ marginTop: '10px' }}>
                    {name}</h3>
                </Card.Title>
                    <Card.Text>
                        {id} {url}
                        {types.map((t)=>(  <h1> {t}</h1>             ))}
                    </Card.Text>
            </Card.Body>
            </Card>
        </div> 
    )
}
export default PokeCard