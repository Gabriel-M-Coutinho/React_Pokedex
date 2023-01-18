import './styles.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class ButtonVerMais extends React.Component{

/* --------------------------- botão ver mais -------------------------- */
render(){return(
    <Button
    className="justify-content-center"
    onClick={this.props.loadmore}
    variant="primary"
    size="lg"
    disabled={this.props.desabilitar}
    style={{ margin: '30px 0px 50px 0px' }}>
    Ver mais
    </Button>
)}}


export default ButtonVerMais