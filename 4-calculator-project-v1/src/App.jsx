
import styles from './App.module.css';
import Display from './components/Display'
import ButtonContainer from './components/ButtonContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


function App() {
  
const [calval , setCalVal] = useState("");

// const onButtonClick = (event)=> console.log(event);

const onButtonClick = (buttontext)=> {
  if(buttontext === 'C'){
    setCalVal('');

  }else if(buttontext === '='){
    const result = eval(calval);
    setCalVal(result);

  }else{
    const newDisplayValue = calval + buttontext;
    setCalVal(newDisplayValue);

  }

}

  return (
  <div classNameName={styles.calculator}>
  <h1 classNameName='text-center'>Calculator</h1>
   <Display calVal ={calval}/>
   <ButtonContainer
   onButtonClick={onButtonClick}></ButtonContainer>
   
  </div>

     
  )
}

export default App
