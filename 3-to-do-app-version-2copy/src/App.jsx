import Appname from './components/Appname';
import Addtodo from './components/Addtodo';

import TodoItems from './components/TodoItems';



function App() {
 
  const todoItems = [{
    name: "Buy Milk",
    dueDate: "09/04/2023"
  } ,
{
  name: "homework",
  dueDate: "10/04/2023"
}];

  return <center className='todo-container'>
      
      <div className="container text-center">
      <Appname />
      <Addtodo />
      <TodoItems todoitems={todoItems}></TodoItems>
    
    </div>

  
  </center>
}

export default App;
