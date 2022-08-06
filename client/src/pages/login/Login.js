import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
  return (
    <div className='login'>
    <span className="loginTitle">Login</span>
          <form action="" className="loginForm">
               <label>Email</label>
               <input className="loginInput"  type="email"  placeholder='Enter your email' />

               <label>Password</label>
               <input  className="loginInput" type="password"  placeholder='Enter your email' />

               <button className="loginButton">Login</button>
          </form>

          <button className='loginRegisterButton'>
               <Link className='link' to="/register">Register</Link>
          </button>
     
    </div>
  )
}

export default Login