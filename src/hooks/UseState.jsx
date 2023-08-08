import React, { useState } from 'react'

function UseState() {

    const [Counter, SetCounter] = useState(0)

    const handleClickPlus = ()=>{
        SetCounter(prev=>prev+1)
    }

    const handleClickDown = ()=>{
        SetCounter(prev=>prev-1)
    }

  return (
    <>
     <div>
        <h1>{Counter}</h1>
        <button onClick={handleClickPlus}>+</button>
        <button onClick={handleClickDown}>-</button>
     </div>
    </>
  )
}

export default UseState