import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class PokeCard extends React.Component{
    state = {
        
    }
    
    
    componentDidMount(){
        this.SpritePokemon()





    }

    SpritePokemon = async () =>{
        const response = await fetch(this.props.url)
        const resposta = await response.json()

        const foto = await resposta.sprites.other.dream_world.front_default
        this.setState({foto:foto})
            
    }





    render(){
        const sprite = String(this.state.foto)
        console.log(sprite)
        return (
            <div>    
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={sprite}/>
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
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


