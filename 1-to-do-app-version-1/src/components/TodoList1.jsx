import React from 'react'

function TodoList1() {

  let task = 'Buy Milk';
  let task_date = '4/10/2023';

  return (
    <div classNameName='row kg-row'>
    <div classNameName="col-6">
    {task}
     </div>
    <div classNameName="col-4">
     {task_date}
    </div>
    <div classNameName="col-2">
      <button type='button' classNameName='btn btn-danger kg-button'>Delete
      </button>
    </div>
  </div>
  )
}

export default TodoList1
