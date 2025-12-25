import {useContext} from 'react'
import { UserContext } from '../context/UserContext'

export default function Login(){
  const { login } = useContext(UserContext);
  return(
    <>
     <button onClick={()=>login({ name: "Abhishek Singh", role: "Developer" })}>Login</button>
    </>
  )
}