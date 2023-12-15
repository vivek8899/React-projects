
import styles from './App.module.css';
import Display from './components/Display'
import ButtonContainer from './components/ButtonContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  

  return (
  <div className={styles.calculator}>
   <Display/>
   <ButtonContainer></ButtonContainer>
   
  </div>

     
  )
}

export default App
