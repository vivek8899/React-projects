import React, { useState  , useEffect} from 'react'

const CurrTime = () => {

const [time , setTime] = useState(new Date());


  useEffect(() => {
    const intervals = setInterval(()=>{
      setTime(new Date());
    } , 1000);
    return () => {
      clearInterval(intervals);
    }
  },[]);


  return (
    <p className="lead">This is the current Time:{time.toLocaleTimeString()} and Today's Date : {time.toLocaleDateString()} </p>
  );
};

export default CurrTime
