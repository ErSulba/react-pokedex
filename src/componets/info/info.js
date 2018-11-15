import React from 'react'
import Image from './Image';
import Moves from './moves';
import Entrie from './Entrie';
import Name from './Name';

export default function Info(props) {
  const isOk = props.isOk
  if (!isOk) {
    return null
  }
  return (
    <div>
      <Name name={props.name} />
      <Image name={props.name} sprite={props.sprite} />
      <Entrie entries={props.entries} />
      <Moves moves={props.moves} ></Moves>
    </div>
  )
}
