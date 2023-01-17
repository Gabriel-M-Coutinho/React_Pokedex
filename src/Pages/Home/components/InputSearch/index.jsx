import './styles.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'

class Pesquisa extends React.Component{

/* --------------------------- Estilo da SearchBox -------------------------- */
render(){return(
    <div align="center" className='md-auto' style={{ padding:'30px'}}>
        <input type="search" className="form-control rounded-pill" placeholder='Nome do Pokemon'
         style={{ width: '40rem', textAlign:'center' }}
         onChange={this.props.mudar} value={this.props.valor}
         >
        </input>
    </div>
)}}


export default Pesquisa
