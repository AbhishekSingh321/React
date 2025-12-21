import {useEffect,useState} from "react";

export default function UserSearchList(){
  const [users,setUsers]=useState([]);
  const [search,setSearch]=useState("");

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(r=>r.json())
      .then(d=>setUsers(d));
  },[]);

  const filtered=users.filter(user=>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <h1>This Data is Fetch from API</h1>
    <input placeholder="Search user..." value={search} onChange={e=>setSearch(e.target.value)}/>
      <ul>
        {filtered.map(user=>(
         <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

