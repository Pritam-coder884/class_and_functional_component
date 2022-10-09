import React, { useState } from 'react'

const FunctionalComponent = (props) => {
  const [data,setData]=useState("")
  return (
    <div>FunctionalComponent
        <h1>My name is {props.name}</h1>
    </div>
  )
}

export default FunctionalComponent