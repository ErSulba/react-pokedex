import React, { Component } from 'react'
import Info from '../info/info';
import Axios from 'axios';
import Search from './components/search';

export default class Pokemon extends Component {
  state = {
    pokemon: null,
    text: '',
    isOk: false,
    speciesData: null
  }

  getPokemon = async event => {
    let value = event.target.value
    if (value !== '' ) {
      try {
      const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${value}/`)
      const {species: {url}} = response.data 
      this.setState({
        pokemon: response.data,
        isOk: true
      })
      this.getPokemonSpecies(url)
      
    }catch(error){
      console.error(error)
      this.setState({isOk: false})
    }
    }   
  }
  getPokemonSpecies = async (speciesUrl) => {
    try {
      const response = await Axios.get(speciesUrl)
      this.setState({speciesData: response.data})
    } catch (error) {
      
    }
  }
  render() {
    return (
      <div>
        <p> This is a test</p>
        <Info {...this.state.pokemon} isOk={this.state.isOk}/>
        <Search handleOnchange={this.getPokemon} />
      </div>
    )
  }
}
