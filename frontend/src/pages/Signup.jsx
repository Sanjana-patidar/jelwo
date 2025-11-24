import React, { use, useState } from 'react'
import './signup.css'
import axios from "axios";
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import { useForm } from "react-hook-form";
const Signup = () => {
    const navigate = useNavigate();
     const [isSignup, setIsSignup] = useState(true);
     const [message, setMessage] = useState("");
     //useform hook libaray
     const { 
        register, 
        handleSubmit,
        formState: { errors},reset } = useForm();
// onSubmit function
 const onSubmit = async (data) => {
    try {
      if (isSignup) {
        const res = await axios.post("http://localhost:5000/api/users/signup", data);
        setMessage(res.data.message);
      } else {
        
        const loginData = {
          email: data.email,
          password: data.password
        };
        const res = await axios.post("http://localhost:5000/api/users/login", loginData);
        setMessage(res.data.message + " - Welcome " + res.data.user.name);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        navigate('/home'); // Redirect to home page after successful login

      }
      reset();
    } catch (err) {
      setMessage(err.response?.data?.message || "Server error");
    }
  };

  return (
    <div>
        <div className='create-acc text-center text-white pt-5 pb-5'>
           <Link to='/' className='text-decoration-none' > <p><span className='text-danger fw-bold'>HOME</span> - CREATE ACCOUNT</p></Link>
            <h3>Create Account</h3>
        </div>
       <div className="form1 ">
        <h1  className='text-center text-danger head'>{isSignup ? "Create Account" : "Login Account"}</h1>
         <form onSubmit= {handleSubmit(onSubmit)}>
            {isSignup && 
              <div className="name">
                <label> <PersonIcon className='text-danger'/> Name:</label>
                <input 
                type="text" 
                 {...register("name", { required: " * Name is required" })}
                placeholder='Enter your Name' 
                />
                {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
            </div>
            }
            <div className="name">
                <label> <MarkEmailReadIcon className='text-danger '/> Email:</label>
                <input
                 type="text" 
                 {...register("email", { 
                    required: "Email is required",
                    pattern: { value: /\S+@\S+\.\S+/, message: " * Invalid email" }
                    })}
                 placeholder='Enter your Email' />
                  {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
            </div>
            <div className="name">
                <label> <EnhancedEncryptionIcon className='text-danger'/> Password:</label>
                <input type="password" 
                {...register("password", { required: " * Password is required" })}
                placeholder='Enter your Password' />
                {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
            </div>
            <div>
                <button type='submit' className='btn btn-danger fs-4 ps-5 pe-5 pt-2 pb-2 signbtn w-100'>{ isSignup ? "Signup" : "Login"}</button>
            </div>
        </form>
        <div className='mt-3'>
            <p >{isSignup ? "Already have an Account ?" : "Don't have an account ?"}
            <span onClick={()=> setIsSignup(!isSignup)} className='text-danger ps-2 toggle'>{isSignup ? "Login" : "Signup"}</span></p>
            {message &&  
               <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert variant="filled" severity="success">
                    {message}
                </Alert>
               </Stack>
            }
        </div>
       </div>
    </div>
  )
}

export default Signup
