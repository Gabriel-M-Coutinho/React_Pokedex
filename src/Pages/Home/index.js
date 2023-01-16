import PokeCard from '../../components/PokeCards/index';
import React from 'react';
import './styles.css';

class Home extends React.Component{ 


    state = {
    pokemons:[],
    }





componentDidMount(){
    this.Loadpokemon()
}

Loadpokemon = async () => {
    const pokemonresponse = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    //    const [dados] = await Promise.all([pokemonresponse])
        const resultado = await pokemonresponse.json()
            let resultadoconvertido = await resultado.results
            let pokemons =  resultadoconvertido.map(function(item, indice){return {url:item.url,name:item.name,id:indice + 1}})
                this.setState({pokemons})
}



render(){
    const {pokemons} = this.state;
  return (

    <div align="center" >
        {console.log(pokemons)}
      {pokemons.map(pokemons =>(<PokeCard key={pokemons.id}id={pokemons.id} name={pokemons.name} url={pokemons.url} />))}
    </div>
  );
}
}


export default Home;
