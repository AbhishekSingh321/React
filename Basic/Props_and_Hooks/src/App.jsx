import Student from './components/Student'
import './App.css'

function App() {
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
    </>
  )
}

export default App
