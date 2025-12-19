export default function List(){
  const names = ['William','Max','Eleven','Dustin']
  const filterNames = names.filter(name=>name.length==6)
  return(
    <div>
      <hr />
      <h1>Rendering List</h1>
      <ul>
        {names.map((name,index)=>
        <li key={index}>{name}</li>
        )}
      </ul>
      <hr />
      <h1>Filtered Name</h1>
      <ul>
        {filterNames.map((name,index)=>
        <li key={index}>{name}</li>
        )}
      </ul>
      <hr />
    </div>
  )
}