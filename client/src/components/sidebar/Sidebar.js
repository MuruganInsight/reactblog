import './Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
     <div className="sidebarItem">
          <span className="sidebarTitle">About Me</span>
          <img src="https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg" alt="About me" />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat dolor eveniet, dolorem dolore repudiandae necessitatibus expedita. Facilis vitae doloremque fuga.</p>
     </div>
     <div className="sidebarItem">
          <span className='sidebarTitle'>Categories</span>
          <ul className="sidebarList">
               <li className="sidebarListItem">Life</li>
               <li className="sidebarListItem">Music</li>
               <li className="sidebarListItem">Style</li>
               <li className="sidebarListItem">Sport</li>
               <li className="sidebarListItem">Cinema</li>

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