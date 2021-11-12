import React from 'react'
import { Div } from './Container'
import {useState} from 'react'
import axios from 'axios'
import { Forms } from './Form'
import  '../css/register.css'
import {Link,useHistory} from 'react-router-dom'

function Login() {
  const history = useHistory();
    const[user,setuser] = useState({
        email: "",
        password : ""
    })

    const [message,setmessage] = useState("")

    const {email,password} = user;

    const oninput = e =>{
        setuser({
            ...user,[e.target.name]:e.target.value
        });
    }

 const submit = async  e =>{
    e.preventDefault();
    const response = await fetch('http://localhost:3002/user/login',{
      method :'POST',
      headers :{
         'Content-Type' :'application/json',
      },
      body :JSON.stringify({
        email,
        password,
      })
    })

    const data = await response.json();
    if(data.error){
        setmessage(data.error)
       }
       else{
        setmessage("Registered successfully")
        history.push('/page5')
       }

    

    
  }



    return (
        <div>
            <Div>
                <Link to="/register">
            <img src="http://localhost:3000/Images/backarrow1.svg" id="arrow" alt="" id="arrow" /></Link>
        <div id="headinglog">Login</div>
       

            <div id="formdiv">
            <Forms funct={submit}>
                <input type="email" name="email"  placeholder="Enter email"  value={email} onChange={e=>oninput(e)}/><br/><br/>
                <input type="text" name="password" placeholder="Enter password" value={password} onChange={e=>oninput(e)}/><br/><br/>
               <input type="submit" id="submit"  value="Sign in"/>
               {message}
            </Forms>
            </div>
            </Div>
        </div>
    )
}

export default Login
