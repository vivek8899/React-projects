import React from 'react'

const Error = ({todo}) => {
  return (<>
    {
      todo.length === 0 && <h3>To do List is Empty</h3>
    }
  </>
    
     
    
    )
}

export default Error
