import React from 'react'
import TodoList from './TodoList'

const TodoItems = ({todoitems , onDelete}) => {
  return (
    <>
        <div className='item-container'>
        {todoitems.map(
          item =>   <TodoList  onDeleteClick={onDelete} key={item.name} task={item.name}  task_date={item.dueDate} />
        )}
    
     
      </div>
    </>
      
    
  )
}

export default TodoItems
