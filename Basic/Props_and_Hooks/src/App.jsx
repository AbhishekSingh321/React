import Student from './components/Student'
import Hello from './components/Hello'
import './App.css'
import { useState } from 'react'
import Button from './components/Button'

function App() {
  const [count,setCount]=useState(0)

  const handleClick=()=>{
    setCount(count+1)
  }

  return (
    <>
    <h1>Scores Card</h1>
    <div className='students-card'>
      <Student name='will' grade={80} check={true} ></Student>
      <Student name='Mighty' grade={29} check={false} ></Student>
      <Student name='max' grade={39} check={true} ></Student>
      <Student name='dustin' grade={95} check={true} ></Student>
      <Student name='mike' grade={30} check={true} ></Student>
      <Student name='hopper' grade={45} check={true} ></Student>
      <Student name='saddie' grade={25} check={false} ></Student>
      <Student name='vecna' grade={70} check={true} ></Student>
      <Student name='demogorgon' grade={90} check={true} ></Student>
    </div>
    <hr />
    <Hello>
      <h1>Hello</h1>
      <p>Kaise ho jee!</p>
    </Hello>
    <Hello children="Hello jee Abhishek this side 😁"/>

    <hr />

    <h1>{count}</h1>
    <Button handleClick={handleClick}></Button>
    </>
  )
}

export default App
