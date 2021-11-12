import {React} from 'react'
import { Link } from 'react-router-dom'
import{useState} from 'react'
// import"../css/Page.css"
import '../css/page11.css'
import axios from 'axios'
import { Div } from './Container'
import {Forms} from './Form'
import '../css/register.css'
import {useHistory} from 'react-router-dom'
function Register() {
  const history = useHistory();

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




  const submit = async  e =>{
    e.preventDefault();

    if(username && email && password){
    
    const res = await fetch('http://localhost:3002/user/register',{
      method :'POST',
      headers :{
         'Content-Type' :'application/json',
      },
      body :JSON.stringify({
        username,
        email,
        password,
      })
    })

    const data = await res.json();
   if(data.error){
    seterror(data.error)
   }
   else{
     seterror("Registered successfully")
     history.push('/login')
   }
    
    
  }
  }

return (
    <div >
    {/* onSubmit={e=>submit(e)} */}
        <Div>
        <img src="http://localhost:3000/Images/backarrow1.svg" id="arrow" alt="" id="arrow" />
      
        <div id="headinglog">Registration</div>
         <div id="formdiv">
           {error}
           
         <Forms funct={submit} > 
         <input type="text" name="username" id="username" placeholder="username" value={username} onChange={e=>inputchange(e)}/><br/><br/>
         <input type="email" name="email" id="email" placeholder="email" value={email}  onChange={e=>inputchange(e)}/><br/><br/>
         <input type="text" name="password" id="password" placeholder="password" value={password}  onChange={e=>inputchange(e)}/><br/><br/>
        <input type="submit" id="submit" value="Signup"/>

         </Forms>
         </div>

         <p id="signpara">already have an account? <Link to="/login" id="signinlink">Sign in</Link></p>
         
        </Div>
        </div>
  )}
  

export { Register }
