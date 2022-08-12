import './Header.css';

function Header() {
  return (
    <div className="header">
          <div className="headerTitles">
               <span className='headerTitleSm'>React & Node</span>
               <span className='headerTitleLg'>Blog</span>
          </div>    
          {/* <img className='headerImg' src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg" alt="Header" /> */}
    </div>
  )
}

export default Header