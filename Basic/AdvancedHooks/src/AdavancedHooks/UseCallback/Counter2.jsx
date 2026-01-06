import React, { useCallback } from 'react'
import {useState} from 'react'

const Counter2 = () => {
  const [count,setCount]=useState(0)

  const increment=useCallback(
    ()=>setCount(prev=>prev+1)
    ,[])

  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter2
