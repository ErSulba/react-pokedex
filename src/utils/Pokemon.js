class Pokemon {
  constructor(data){
    this.id = data.id
    this.name = data.name;
    this.sprite = data.sprite.front_default
    this.type = data.types
    this.type = data.moves
  }
}

export default Pokemon