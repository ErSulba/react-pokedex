import React from 'react'

export default function Search({handleOnchange}) {
  return (
    <div>
      <input onChange={handleOnchange} placeholder='search pokemon by dex number or name' />
    </div>
  )
}
