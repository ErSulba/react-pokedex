import React from 'react'
import Image from './Image';
import Moves from './moves';
import Entrie from './Entrie';
import Name from './Name';

export default function Info(props) {
  const sprites = props.sprites
  const isOk = props.isOk
  if (!isOk) {
    return null
  }
  return (
    <div>
      <Name name={props.name} />
      <Image name={props.name} {...sprites} />
      <Entrie  />
      <Moves moves={props.moves} ></Moves>
    </div>
  )
}
