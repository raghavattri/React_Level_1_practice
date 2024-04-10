import React, { useState } from 'react';
import { Axios } from 'axios';
export function Register() {

    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmpassword,setconfirmPassword] = useState('');
    
     const handleSubmit = async (e)=>{
          e.preventDefault();
        if(confirmpassword!==password)
        {
             alert('password does not match')
              return;   
         }
        const res = await  Axios.post('localhost:3000/register',{username,email,password}).then((res)=> console.log(res));
         console.log(res);
     }

  return (
    <div>
        <form action="post" onSubmit={handleSubmit}>
        <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
           <label>email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmpassword}
            onChange={(e) => setconfirmPassword(e.target.value)}
            required
          />

          <button type="submit">submit</button>
        </form>
    </div>
  )
}

