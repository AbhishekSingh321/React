import {useState} from 'react'

export default function CustomFilterList(){
  const [search,setSearch]=useState("")
  const names = ['William','Max','Eleven','Dustin']
  const filterNames = names.filter(name=>name.toLowerCase().includes(search.toLowerCase()))

  return(
    <div>
      <h1>Filter List</h1>
     <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
      <ul>
        {filterNames.map((name,index)=>
        <li key={index}>{name}</li>
        )}
      </ul>
    </div>
  )
}