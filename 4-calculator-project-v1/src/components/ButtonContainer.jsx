import React from 'react'
import Button from './Button'
import styles from './ButtonContainer.module.css'

const ButtonContainer = ({onButtonClick}) => {

  const buttonnumbers=['C' , '1' , '2' ,'+' , '3' , '4' ,'-','5' , '6','*' ,'7','8','/' ,'=','9' ,'0','.'];
  return (
    <div className={styles.buttonContainer}>
    <Button buttonArr={buttonnumbers} onButtonClickHandler={onButtonClick}></Button>
      
  </div>
  )
}

export default ButtonContainer
