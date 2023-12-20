import React from 'react'

const Addtodo = () => {
  return (
    <div classNameName='row kg-row'>
    <div classNameName="col-6">
      <input type="text" placeholder="Enter To Do Here" />
    </div>
    <div classNameName="col-4">
      <input type="date" />
    </div>
    <div classNameName="col-2">
      <button type='button' classNameName='btn btn-success kg-button'>Add
      </button>
    </div>
  </div>
  )
}

export default Addtodo
