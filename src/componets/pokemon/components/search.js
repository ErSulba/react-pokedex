import React from 'react'
import styles from './search.module.scss'
export default function Search({handleOnchange}) {
  return (
    <div className={styles.search}>
      <div>
      <input onChange={handleOnchange} placeholder='search pokemon by dex number or name' />
      </div>
    </div>
  )
}
