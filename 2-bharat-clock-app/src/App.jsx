import ClockHeading from './compomnents/ClockHeading';
import ClockSlogan from './compomnents/ClockSlogan';
import CurrTime from './compomnents/CurrTime';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return <div classNameName="container text-center">
    <ClockHeading/>
    <ClockSlogan/>
    <CurrTime/>
  </div>
}

export default App
