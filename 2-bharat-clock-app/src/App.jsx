import ClockHeading from './compomnents/ClockHeading';
import ClockSlogan from './compomnents/ClockSlogan';
import CurrTime from './compomnents/CurrTime';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return <center>
  <div className="text-center container mt-5">
    <ClockHeading/>
    <ClockSlogan/>
    <CurrTime/>
    </div>
  </center>
}

export default App
