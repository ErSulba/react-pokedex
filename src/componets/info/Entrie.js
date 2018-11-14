import React from 'react'

export default function Entrie({entries}) {
  /* TODO: add logic to iterate trought all entries */
  if (entries === undefined) {
    return null
  }
  const mapa = entries
  return (
    <div>
      <p> this is a pokdex entrie</p>
    </div>
  )
}
