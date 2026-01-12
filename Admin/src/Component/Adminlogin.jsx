import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './Adminlogin.css';
const Adminlogin = () => {
   const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const navigate = useNavigate();

     // admin login function
     const submit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/admin/login`, {
      email,
      password,
    });

    if (res.data.msg === "Login success") {
      alert("Admin Login Successful");
      navigate("/admin");
    }

  } catch (error) {
    // axios catches 400, so handle here
    if (error.response) {
      alert(error.response.data.msg); 
      
    } else {
      alert("Server error");
    }
  }
};

  return (
    <div className="container-1">
      <div className='login-container'>
      <form onSubmit={submit} >
        <div>
          <h5> Admin Login</h5>
        </div>
         <div className='admin-field'>
            <input 
            type="text" 
            placeholder=' Enter email '
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
             />
         </div>
         <div className='admin-field mt-3'>
            <input 
            type="password"
            placeholder='Enter password ' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
         </div>
        <div className=' mt-4'>
             <button type="submit" class="btn btn-danger"> <i class="fa-solid fa-lock"></i> Login</button>
        </div>
       </form>
    </div>
    </div>
  )
}

export default Adminlogin
