import React from 'react'
import Image from './Image';

export default function Info(props) {
  const sprites = props.sprites
  // const default_sprite = sprites.front_default
  return (
    <div>
      <h1>
          {props.name}
      </h1>
      <Image name={props.name} {...sprites} />
    </div>
  )
}
