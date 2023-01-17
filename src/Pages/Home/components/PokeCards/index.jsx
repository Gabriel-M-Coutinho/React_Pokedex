import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'

class PokeCard extends React.Component{
    state = {}

    componentDidMount(){
        this.SpritePokemon()
    }

    SpritePokemon = async () =>{
        const response =  fetch(this.props.url)
        const [dadospk] = await Promise.all([response])
        const resposta = await dadospk.json()
        const foto = await resposta.sprites.other['official-artwork'].front_default
        this.setState({foto})
            
    }

/* --------------------------- Estilo do PokeCard --------------------------- */
    render(){const sprite = String(this.state.foto)        
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
                    {this.props.name}</h3>
                </Card.Title>
                    <Card.Text>
                        {this.props.id} {this.props.url}
                    </Card.Text>
            </Card.Body>
            </Card>
        </div>  
        );
    }
}

export default PokeCard;


