import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import './style.css'
import PokeCard from "./components/PokeCard";
import VerMais from "./components/VerMais";
import Busca from './components/Busca/Busca';


function Home() {
/* ----------------------------- estados do home ---------------------------- */
    const [pokemons,setpokemon] = useState([])
    const [searchvalue,setsearchvalue] = useState('')
    const [allpokemons,setallpokemons] = useState([])
    const [page,setpage] = useState(0)
    const [pokemonsperpage] = useState(18)
    


/* ------------------------ Funcao de request na api ------------------------ */
   const GetPokemon =  useCallback( async (page,pokemonsperpage) => {
        if(pokemons.length === 0 || pokemons.length < 1 ){
            console.log('get pokemon usado')
            const response = fetch( 'https://pokeapi.co/api/v2/pokemon?limit=898&offset=0')
            const [pks] = await Promise.all([response])
            const dados = await pks.json()
            const resultadoconvertido = await  dados.results
            const pokemons = await resultadoconvertido.map(function(item, indice){return {url:item.url,name:item.name,id:indice + 1}})       
            setpokemon(pokemons.slice(page,pokemonsperpage)) 
            setallpokemons(pokemons) 
        }              
    },[pokemons])
/* --------------------------- Component did mount -------------------------- */
    useEffect (()=>{
        GetPokemon(page,pokemonsperpage)
        //console.log(allpokemons)
    },[GetPokemon,page,pokemonsperpage])

/* ------------------------ funcao pegando dados do inputsearch e enviando ao estado----------------------- */
    function handleChange(e){
        const {value} = e.target
        setsearchvalue(value)
       
    }
/* ----------------------------- funcao loadmorepokemon ---------------------------- */
  
  function loadmorepokemon(){
  
        
      const pokes = pokemons  
      const nextpage = page + pokemonsperpage;
      const nextPokemons = allpokemons.slice(nextpage,nextpage + pokemonsperpage)
      pokes.push(...nextPokemons)
      setpokemon(pokes)
      setpage(nextpage)
  }
  

/* ----------------------- retorno do filtro do input ----------------------- */
  const noMorePokemon = page + pokemonsperpage >= allpokemons.length
    const filteredPokemon = !!searchvalue ? 
      allpokemons.filter(pokemon =>{
        return pokemon.name.toLowerCase().includes(searchvalue.toLocaleLowerCase())
      }) 
        : pokemons;
   
/* ----------------------------- render html jsx ---------------------------- */
    return (

        <div align="center" className='FundoCor'>
        {/* ----------------------------- input de pesquisa----------------------------- */}
        <Busca onChange={handleChange} value={searchvalue}
      />     

       {/* ----------------------------- For in Poke Cards ----------------------------- */}
        {filteredPokemon.length > 0 &&(
           <div className="d-flex flex-row flex-wrap mb-3 justify-content-center" style={{ margin: '0px 30px 0px 30px' }} >
           {filteredPokemon.map(pokemons =>(<PokeCard key={pokemons.id}id={pokemons.id} name={pokemons.name} url={pokemons.url} />))}
         </div>
      )}

      {/* ----------------------------- botao VerMais ----------------------------- */}
    {!searchvalue && (  
       <VerMais onClick={loadmorepokemon} 
        desabilitar={noMorePokemon}
       />)}
       </div>
    );
}


export default Home;