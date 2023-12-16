import React from 'react'
import styles from './Addtodo.module.css'
import { useState } from 'react';

const Addtodo = ({onNewItem}) => {

  const [todoName , setTodoName] = useState();
  const [todoDate , setTodoDate] = useState();

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
    <div className={`row ${styles.kgRow}`}>
    <div className="col-6">
      <input type="text" placeholder="Enter to do here" value={todoName} onChange={handleTodoName} />
    </div>
    <div className="col-4">
      <input type="date"  value={todoDate} onChange={handleTodoDate}/>
    </div>
    <div className="col-2">
      <button type='button' onClick={handleAddButton} className={`btn btn-success ${styles.kgButton}`}>Add
      </button>
    </div>
  </div>
  )
}

export default Addtodo
