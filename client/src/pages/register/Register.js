import { Link } from 'react-router-dom'
import './Register.css'

function Register() {
  return (
    <div className='register'>
    <span className="registerTitle">Register</span>
          <form action="" className="registerForm">

               <label>UserName</label>
               <input className="registerInput"  type="text"  placeholder='Enter your name' />

               <label>Email</label>
               <input className="registerInput"  type="email"  placeholder='Enter your email' />

               <label>Password</label>
               <input  className="registerInput" type="password"  placeholder='Enter your email' />

               <button className="registerButton">Register</button>
          </form>

          <button className='registerLoginButton'>
               <Link className='link' to="/login">Login</Link>
          </button>
     
    </div>
  )
}

export default Register