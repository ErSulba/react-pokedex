import React from 'react'

export default function Entrie({entries}) {
  let key = 0
  const pokedex_entries = entries.map(entrie => {
    if (entrie.language.name === 'en' & entrie.version.name === 'moon') {
      return <p key={key++} >{entrie.flavor_text} </p>
    }
  })
  return (
    <div>
      {pokedex_entries}
    </div>
  )
}
