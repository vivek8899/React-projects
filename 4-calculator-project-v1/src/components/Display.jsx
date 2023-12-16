import React from 'react';
import styles from './Display.module.css';

const Display = ({calVal}) => {
  return (
    <>
       <input type="text"  readOnly value={calVal} className={styles.display} />
    </>
  )
}

export default Display
