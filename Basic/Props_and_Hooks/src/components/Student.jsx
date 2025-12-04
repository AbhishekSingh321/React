import {useState,useEffect} from 'react'
import './Student.css'

function Student({name,grade,check}){
  const [time,setTime]=useState(new Date())

  useEffect(()=>{
    const timer=setInterval(()=>{
                     setTime(new Date())
                     },1000)
    return () => clearInterval(timer)
  },[])

  return(
    <div className="card">
      <h1>{name}</h1>
      <p>Score : {grade}</p>
      <p>{check?'Passed':'Failed'}</p>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  )
}

export default Student