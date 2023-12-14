import React from 'react'

function TodoList1() {

  let task = 'Buy Milk';
  let task_date = '4/10/2023';

  return (
    <div className='row kg-row'>
    <div className="col-6">
    {task}
     </div>
    <div className="col-4">
     {task_date}
    </div>
    <div className="col-2">
      <button type='button' className='btn btn-danger kg-button'>Delete
      </button>
    </div>
  </div>
  )
}

export default TodoList1
