import './styles.css'
import React from 'react'


class Search extends React.Component{

render(){
    return(<input type='search' onChange={this.prop.onChange} value={this.prop.value}></input>)
}




}


export default Search