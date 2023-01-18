
import PokeCard from './components/PokeCards/index'
import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonVermais from './components/VerMais';
import Pesquisa from './components/InputSearch/index'

class Home extends React.Component{ 


    state = {
    pokemons:[],
    allpokemons:[],
    page:0,
    pokemonsPerPage:21,
    searchValue:''
    }





componentDidMount(){
    this.Loadpokemon()
}

Loadpokemon = async () => {
    const{page,pokemonsPerPage} = this.state;
    const pokemonresponse = fetch(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`)
        const [dados] = await Promise.all([pokemonresponse])
        const resultado = await dados.json()
            const resultadoconvertido = await resultado.results
            const pokemons =  resultadoconvertido.map(function(item, indice){return {url:item.url,name:item.name,id:indice + 1}})
                this.setState({pokemons:pokemons.slice(page,pokemonsPerPage),allpokemons:pokemons})
}




loadMorePokemon = () =>{
  const{
    pokemons,
    allpokemons,
    page,
    pokemonsPerPage,
  } = this.state
  
  const nextpage = page + pokemonsPerPage;
  const nextPokemons = allpokemons.slice(nextpage,nextpage + pokemonsPerPage)
  pokemons.push(...nextPokemons)

  this.setState({pokemons,page:nextpage})
 
  }

  handleChange = (e) =>{

    const{value} = e.target;
    this.setState({searchValue:value})
    



  }


render(){
    const {pokemons,page,pokemonsPerPage,allpokemons,searchValue} = this.state;
    const noMorePokemon = page + pokemonsPerPage >= allpokemons.length
    const filteredPokemon = !!searchValue ? 
      allpokemons.filter(pokemon =>{
        return pokemon.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
      }) 
        : pokemons;


/* -------------------------------------------------------------------------- */
/*                            ELEMENTOS PAG INICIAL                           */
/* -------------------------------------------------------------------------- */
/* ------------ SearchBar[1] PokeCard[2] FraseNTem[3] Buttom+[4] ------------ */
  return (
    <div align="center" className='FundoCor'>
      <Pesquisa mudar={this.handleChange}valor={searchValue}
      />      
     
      {filteredPokemon.length > 0 &&(
           <div className="d-flex flex-row flex-wrap mb-3 justify-content-center" style={{ margin: '0px 30px 0px 30px' }} >
           {filteredPokemon.map(pokemons =>(<PokeCard key={pokemons.id}id={pokemons.id} name={pokemons.name} url={pokemons.url} />))}
         </div>
      )}

      {filteredPokemon.length === 0 && (
        <>
        <h1>Não existe um pokemon com esse nome :c</h1>
        </>
      )}
   
      {!searchValue && (
        <ButtonVermais loadmore={this.loadMorePokemon} desabilitar={noMorePokemon}/>
      )}
    </div>
  );
}
}

export default Home;
