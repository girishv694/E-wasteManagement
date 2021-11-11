import React from 'react'
import { Div } from './Container'
import {useState} from 'react'
import axios from 'axios'
import { Forms } from './Form'
import  '../css/register.css'

function Login() {

    const[user,setuser] = useState({
        email: "",
        password : ""
    })

    const {email,password} = user;

    const oninput = e =>{
        setuser({
            ...user,[e.target.name]:e.target.value
        });
    }

    // const submit = async e =>{
    //     e.preventDefault();
    //    const response =  await axios.post('http://localhost:3001/api/signin',user)

    //     const data1 = await response.json()

    //     if(data1.User){
    //         alert("login successful")
    //     }
    // }



 const submit = async  e =>{
    e.preventDefault();
    const response = await fetch('http://localhost:3001/api/signin',{
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
    console.log(data)

    if(data.User){
        alert("login successful")
        window.location.href="/page5"
    }
    else{
        alert("unsucessful")
    }
  }



    return (
        <div>
            <Div>
            <img src="http://localhost:3000/Images/backarrow1.svg" id="arrow" alt="" id="arrow" />
        <div id="headinglog">Login</div>

            <div id="formdiv">
            <Forms funct={submit}>
                <input type="email" name="email"  placeholder="Enter email"  value={email} onChange={e=>oninput(e)}/><br/><br/>
                <input type="text" name="password" placeholder="Enter password" value={password} onChange={e=>oninput(e)}/><br/><br/>
               <input type="submit" id="submit"  value="Sign in"/>
            </Forms>
            </div>
            </Div>
        </div>
    )
}

export default Login
