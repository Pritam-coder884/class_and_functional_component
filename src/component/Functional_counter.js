import React, { useState } from 'react'

const Functional_counter = () => {
//   const [count,setCount]=useState(null);  
  const [count,setCount]=useState(0);
  const increaseCounter=()=>{
    setCount(count+1)
  }
  return (
    <div>
        <h1>Simple counter using Function based components</h1>
       <p>{count}</p>
        <button onClick={increaseCounter}>ADD</button>
    </div>
  )
}

export default Functional_counter