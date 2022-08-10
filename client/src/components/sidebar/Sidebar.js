import { useEffect, useState } from 'react';
import './Sidebar.css';
import axios from 'axios'
import { Link } from 'react-router-dom';

function Sidebar() {

     const [cats, setCats] = useState([])

     useEffect(() => {
          const fetchCats = async () => {
               const res = await axios.get('/categories');
               setCats(res.data)
          }

          fetchCats()
     })


  return (
    <div className='sidebar'>
     <div className="sidebarItem">
          <span className="sidebarTitle">About Me</span>
          <img src="https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg" alt="About me" />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat dolor eveniet, dolorem dolore repudiandae necessitatibus expedita. Facilis vitae doloremque fuga.</p>
     </div>
     <div className="sidebarItem">
          <span className='sidebarTitle'>CATEGORIES</span>
          <ul className="sidebarList">
               {
                    cats.map(c => (
                         <Link key={c.name} to={`/?cat=${c.name}`}>
                         <li  className="sidebarListItem">{c.name}</li>
                         </Link>
                    ))
               }
          </ul>
     </div>

     <div className="sidebarItem">
          <span className="sidebarTitle">Follow Us</span>
          <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
          </div>
     </div>

    </div>
  )
}

export default Sidebar