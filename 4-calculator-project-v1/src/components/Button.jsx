import React from 'react'
import styles from './Button.module.css'

const Button = ({buttonArr}) => {
  return (
    <>
      {buttonArr.map(item => <button key={item} className={styles.button}>{item}</button>)}
  
    </>
  )
}

export default Button
