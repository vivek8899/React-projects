import React from 'react'

const CurrTime = () => {
  let time = new Date();
  return (
    <p className="lead">This is the current Time:{time.toLocaleTimeString()} and Today's Date : {time.toLocaleDateString()} </p>
  )
}

export default CurrTime