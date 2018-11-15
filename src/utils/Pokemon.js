class Pokemon {
  constructor(data, species_data){
    this.id = data.id
    this.name = data.name;
    this.sprite = data.sprites.front_default
    this.type = data.types
    this.moves = data.moves
    this.entries = species_data.flavor_text_entries
  }
}

export default Pokemon