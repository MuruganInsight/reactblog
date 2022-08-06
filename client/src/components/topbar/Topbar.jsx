import { Link } from 'react-router-dom';
import './Topbar.css';

const Topbar = () => {
     const user = false;
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
                    <li className='topListItem'>
                         <Link className='link' to="/">
                              {user && "LOGOUT"}
                         </Link>
                    </li>
                    
               </ul>
          </div>
          <div className="topRight">
          {user ? (<img className="topImg" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="Profile" width="300px" />)
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