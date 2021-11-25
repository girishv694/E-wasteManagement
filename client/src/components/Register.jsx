import { React } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../css/page11.css'
import { Div } from './Container'
import { Forms } from './Form'
import '../css/register.css'
import { useHistory } from 'react-router-dom'
function Register() {
  const history = useHistory()
  const [sp, setSp] = useState(' ')
  const [user, setuser] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
  })

  const [message, setmessage] = useState('')
  const { username, email, password, phone } = user

  const inputchange = (e) => {
    setuser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const submit = async (e) => {
    e.preventDefault()

    if (username && password && phone && email) {
      const response = await fetch('http://localhost:3002/user/register', {
        // const response = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
          phone,
        }),
      })

      const data = await response.json()
      if (data.error) {
        setmessage(data.error)
      } else {
        setmessage('Registered successfully')
        history.push('/login')
      }
    } else {
      setmessage('Fill all the fields')
    }
  }

  return (
    <div>
      {/* onSubmit={e=>submit(e)} */}
      <Div>
        <Link to='/congrats' id='#'>
          <img
            src='http://localhost:3000/Images/backarrow1.svg'
            id='arrow'
            alt=''
            id='arrow'
          />
        </Link>

        <div id='headinglog'>Registration</div>
        <div id='formdiv'>
          <Forms funct={submit}>
            <div className="message">
              {message}
            </div>

            <input
              type='text'
              name='username'
              id='username'
              placeholder='username'
              value={username}
              onChange={(e) => inputchange(e)}
              required
            />
            <br />
            <br />
            <input
              type='email'
              name='email'
              id='email'
              placeholder='email'
              value={email}
              onChange={(e) => inputchange(e)}
              required
            />
            <br />
            <br />

            <input
              type='number'
              name='phone'
              id='phone'
              placeholder='Mobile No'
              value={phone}
              onChange={(e) => inputchange(e)}
              required
            />

            <br />
            <br />
            <input
              type='password'
              name='password'
              id='password'
              placeholder='password'
              value={password}
              onChange={(e) => inputchange(e)}
              required
            />
            <br />
            <br />
            <input type='submit' id='submit' value='Signup' />
          </Forms>
        </div>

        <p id='signpara'>
          already have an account?
          <Link to='/login' id='signinlink'>
            {sp}Sign in
          </Link>
        </p>
      </Div>
    </div>
  )
}

export { Register }
