import React from 'react'
import styles from './Button.module.css'

const Button = ({buttonArr , onButtonClickHandler}) => {
  return (
    <>
      {buttonArr.map(item => <button   onClick ={() => onButtonClickHandler(item)} key={item} className={styles.button} >{item}</button>)}
  
    </>
  )
}

export default Button
