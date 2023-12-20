import Appname from './components/Appname';
import Addtodo from './components/Addtodo';
import Error from './components/Error';
import { useState } from 'react';


import TodoItems from './components/TodoItems';



function App() {
 



const [todoItems ,setToDoItems] = useState([]);

const handleonNewItem = (itemName , itemDueDate)=>{
  const newTodoItems = [...todoItems , {name: itemName ,dueDate: itemDueDate}];
  setToDoItems(newTodoItems);
};

const handleDeleteItems = (todoitemName) => {
  const newTodoItems = todoItems.filter(item => item.name !== todoitemName);
  setToDoItems(newTodoItems);
}

  return <center classNameName='todo-container'>
      
      <div classNameName="container text-center">

      <Appname />
      <Addtodo onNewItem={handleonNewItem} />
      <Error todo={todoItems} />
     
      
      <TodoItems onDelete={handleDeleteItems} todoitems={todoItems}></TodoItems>
    
    </div>

  
  </center>
}

export default App;
