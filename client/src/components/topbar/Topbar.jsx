import { Link } from 'react-router-dom';
import './Topbar.css';

import { useContext } from 'react';
import { Context } from '../../context/Context';



const Topbar = () => {
     const {user, dispatch} = useContext(Context)


     const handleLogout = (e) => {
          dispatch({
               type:'LOGOUT'
          })
     }


  return (
    <div className='top'>
          <div className="topLeft">
          <i className="topIcon fa-brands fa-square-facebook"></i>
          <i className="topIcon fa-brands fa-square-twitter"></i>
          <i className="topIcon fa-brands fa-square-pinterest"></i>
          <i className="topIcon fa-brands fa-square-instagram"></i>

          </div>
          <div className="topCenter">
               <ul className="topList">
                    <li className='topListItem'>
                         <Link className='link' to="/">HOME</Link>
                    </li>
                    <li className='topListItem'>
                         <Link className='link' to="/">CONTACT</Link>
                    </li>
                    <li className='topListItem'>
                         <Link className='link' to="/write">WRITE</Link>
                    </li>
                    <li className='topListItem' onClick={handleLogout}>
                              {user && "LOGOUT"}
                    </li>
                    
               </ul>
          </div>
          <div className="topRight">
          {user 
               ? (
               <Link to="/settings">
                    <img className="topImg" src={user.profilePic} alt="Profile" width="300px" />
               </Link>)
               :(
               <ul className="topList">
               <li className='topListItem'>
                    <Link className='link' to="/login">LOGIN</Link>
               </li>
               <li className='topListItem'>
               <Link className='link' to="/register">REGISTER</Link>
               </li>
               </ul>
               
          )}
               
               <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
          </div>
    </div>
  )
}

export default Topbar