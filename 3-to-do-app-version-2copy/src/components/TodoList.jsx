import React from 'react'
import styles from "./TodoList.module.css"

function TodoList({task, task_date , onDeleteClick}) {

  

  return (
    <div className={`row ${styles.kgRow}`}>
    <div className="col-6">
    {task}
     </div>
    <div className="col-4">
     {task_date}
    </div>
    <div className="col-2">
      <button  onClick={()=> onDeleteClick(task)} ontype='button' className={`btn btn-danger ${styles.kgButton} `}>Delete
      </button>
    </div>
  </div>
  )
}

export default TodoList
