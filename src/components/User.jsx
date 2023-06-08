import React, { useEffect, useState } from 'react';
import axios from "axios";

const User = () => {
    const [users, setUser]=useState([]);
    const [query, setQuery] = useState("");

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => setUser(res.data));

    },[])

    const handleClick=()=>{
        if(query)
        {setUser([...users,{name: query}])}
        setQuery("");
    }

    
  return (
    <div>
      <h1>List of users</h1>
      <div className='user'>
        
            { users.map((user, index)=>
           { return <div key={index} id={index}>{user.name}</div>}
            )}
        
       </div> 
        <div style={{padding: "20px"}} >
        <input type="text"  value={query}  placeholder=" Enter username" onChange={(e)=>setQuery(e.target.value)} />
        <button className='btn-dark' onClick={handleClick}>Add user</button>
        </div>
        
        
    </div>
  )
}

export default User;