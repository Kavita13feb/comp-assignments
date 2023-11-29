import React, { useState } from 'react'
import "../Styles/register.css" 
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export const Login = () => {

    const loginRequest= {"LoginName":"B1122334455","LoginPwd":"b@123"}
    const [userDetails,setUserDetails]=useState(loginRequest)
    const navigate=useNavigate()
    const handleForm=(e)=>{
// console.log(e.target.value)
        setUserDetails({...userDetails,[e.target.name]:e.target.value})
    }
    const handleLogin=async(e)=>{
      e.preventDefault() 
      console.log(userDetails)
      try {
        let Registerres=await axios.post(process.env.REACT_APP_Loginapi,userDetails)
        console.log(Registerres)
        navigate("/dashboard")
        setUserDetails(loginRequest)

      } catch (error) {
        console.log(error)
      }

    }
  return (
    <div>
        <h1>Login</h1>
        <form action="" onSubmit={handleLogin}className='registerForm'>
           
            
            <input onChange={handleForm} type="text" placeholder='Name' maxLength={60} name='LoginName' />
            
           
            <input onChange={handleForm} type="password" placeholder='password' name='LoginPwd' />


                <input type="submit"/>
        


        </form>
    </div>
  )
}
