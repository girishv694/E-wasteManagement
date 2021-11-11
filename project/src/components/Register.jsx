import {React} from 'react'
import { Link } from 'react-router-dom'
import{useState} from 'react'
// import"../css/Page.css"
import '../css/page11.css'
import axios from 'axios'
import { Div } from './Container'

function Register() {

  const[user,setuser] = useState({
    username : "",
    email : "",
    password:""

  })

  const [error,seterror] = useState("")

  const {username,email,password} = user;

  const inputchange = (e) =>{
  setuser({
    ...user,[e.target.name]:e.target.value
  })
  };

  // const submit = async  e =>{
  //   e.preventDefault();
  //   const response = await fetch('http://localhost:3001/register',{
  //     method :'POST',
  //     headers :{
  //        'Content-Type' :'application/json',
  //     },
  //     body :JSON.stringify({
  //       username,
  //       email,
  //       password,
  //     })
  //   })

  //   const data = await response.json();
  //   console.log(data)
  // }


  const submit = async e =>{
    e.preventDefault();
    const data =  await axios.post('http://localhost:3001/api/register',user)
    
  if(data){
    seterror("Registered successfully")
  }
  else{
    seterror("Please check entered details")
  }
    



  }


  return (
    <div className='header'>
    
        <Div>
         <form onSubmit={e=>submit(e)}> 
         <input type="text" name="username" id="username" placeholder="username" value={username} onChange={e=>inputchange(e)}/><br/><br/>
         <input type="email" name="email" id="email" placeholder="email" value={email}  onChange={e=>inputchange(e)}/><br/><br/>
         <input type="text" name="password" id="password" placeholder="password" value={password}  onChange={e=>inputchange(e)}/><br/><br/>
         <button>Register</button>

         </form>

         <p>already have an account? <Link to="/login">Sign in</Link></p>
         {error}
         
        </Div>
        </div>
  )}
  

export { Register }
