import React, { Component } from 'react'
import Info from '../info/info';
import Axios from 'axios';

export default class Pokemon extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: 'test',
      pokemon: '',
    }
    this.getData = this.getData.bind(this)
    this.showText = this.showText.bind(this)
    this.getPokemon = this.getPokemon.bind(this)
  }
  getData(event){
    console.log(event.target.value)
  }
  showText(event){
    this.setState({
      text: event.target.value,
      pokemon: event.target.value,
    })
    this.getData(event)
    this.getPokemon()
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
        <input type='text' onChange={this.getPokemon} />
      </div>
    )
  }
}
