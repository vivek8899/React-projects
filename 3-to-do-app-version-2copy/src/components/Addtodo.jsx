import React from 'react';
//import { BiMessageAdd} from "react-icons/bi"
import styles from './Addtodo.module.css';
import { useState } from 'react';


const Addtodo = ({onNewItem}) => {

  const [todoName , setTodoName] = useState("");
  const [todoDate , setTodoDate] = useState("");

const handleTodoName = (event) =>{

  setTodoName(event.target.value);
 
};

const handleTodoDate = (event) =>{

 setTodoDate(event.target.value);

};

const handleAddButton = ()=>{
   onNewItem(todoName , todoDate);
   setTodoDate("");
   setTodoName("");


};

  return (
    <div classNameName={`row ${styles.kgRow}`}>
    <div classNameName="col-6">
      <input type="text" placeholder="Enter to do here" value={todoName} onChange={handleTodoName} />
    </div>
    <div classNameName="col-4">
      <input type="date"  value={todoDate} onChange={handleTodoDate}/>
    </div>
    <div classNameName="col-2">
      <button type='button' onClick={handleAddButton} classNameName={`btn btn-success ${styles.kgButton}`}> 
    Add
      {/* <BiMessageAdd/> */}
      </button>
    </div>
  </div>
  )
}

export default Addtodo
