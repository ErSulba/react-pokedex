import React from 'react'
import styles from './Name.module.scss'

export default function Name({name}) {
  return (
    <h1 className={styles.name} >{name} </h1>
  )
}
