import React, { Component } from 'react'
import Info from '../info/info';
import Axios from 'axios';
import Search from './components/search';

export default class Pokemon extends Component {
  state = {
    pokemon: 'bulbasaur',
    text: ''
  }

  getPokemon = async event => {
    try {
      const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${event.target.value}/`)
      // console.log(response)
      this.setState({
        pokemon: response.data
      })
      // console.log(this.state.pokemon)
    }catch(error){
      console.error(error)
    }
   
  }

  render() {
    return (
      <div>
        <p> This is a test</p>
        <Info {...this.state.pokemon}/>
        <Search handleOnchange={this.getPokemon} />
      </div>
    )
  }
}
