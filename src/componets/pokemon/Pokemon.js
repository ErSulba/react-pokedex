import React, { Component } from 'react'
import Info from '../info/info';
import Axios from 'axios';
import Search from './components/search';
import Pokemon from './../../utils/Pokemon'
import converString from './../../utils/misc';

export default class Pokedex extends Component {
  state = {
    pokemon: null,
    text: '',
    isOk: false,
  }

  getPokemon = async event => {
    let value = converString(event.target.value) 
    if (value !== '' ) {
      try {
      const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${value}/`)
      const {species: {url}} = response.data
      const speciesResponse = await Axios.get(url)
      const pokemon =  new Pokemon(response.data, speciesResponse.data)
      // this.getPokemonSpecies(url)
      this.setState({
        pokemon,
        isOk : true
      })
      
      }catch(error){
        console.error(error)
        this.setState({isOk: false})
      }
    }   
  }
  render() {
    return (
      <div>
        <h1> React Pokedex </h1>
        <Info {...this.state.pokemon} isOk={this.state.isOk} />
        <Search handleOnchange={this.getPokemon} />
      </div>
    )
  }
}
