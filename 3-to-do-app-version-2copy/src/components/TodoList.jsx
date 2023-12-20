import React from 'react'
import styles from "./TodoList.module.css"

function TodoList({task, task_date , onDeleteClick}) {

  

  return (
    <div classNameName={`row ${styles.kgRow}`}>
    <div classNameName="col-6">
    {task}
     </div>
    <div classNameName="col-4">
     {task_date}
    </div>
    <div classNameName="col-2">
      <button  onClick={()=> onDeleteClick(task)} classNameName={`btn btn-danger ${styles.kgButton} `}>Delete
      </button>
    </div>
  </div>
  )
}

export default TodoList
