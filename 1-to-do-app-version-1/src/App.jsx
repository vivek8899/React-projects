import Appname from './components/Appname';
import Addtodo from './components/Addtodo';
import TodoList1 from './components/TodoList1';
import TodoList2 from './components/TodoList2';



function App() {
 

  return <center classNameName='todo-container'>
      
      <div classNameName="container text-center">
      <Appname />
      <Addtodo />
      <div classNameName='item-container'>
      <TodoList1 />
      <TodoList2 />
      </div>
    </div>

  
  </center>
}

export default App;
