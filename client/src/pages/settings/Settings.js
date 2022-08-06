import Sidebar from '../../components/sidebar/Sidebar'
import './Settings.css'

function Settings() {
  return (
    <div className="settings">
          <div className="settingsWrapper">
               <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your account</span>
                    <span className="settingsDeleteTitle">Delete your account</span>
               </div>

               <form action="" className="settingsForm">
                    <label>Profile Picutre</label>
                    <div className="settingsPP">
                         <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="" srcset="" />
                         <label htmlFor='fileInput'>
                              <i className="settingsPPIcon far fa-user-circle"></i>
                         </label>
                         <input type="file" id="fileInput" style={{display: "none"}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='Safak' />
                    <label>Email</label>
                    <input type="email" placeholder='Safak@gmail.com' />
                    <label>Password</label>
                    <input type="text" placeholder='Safak' />
                    <label>Username</label>
                    <input type="password" />

                    <button className="settingsSubmit">Update</button>
               </form>
          </div>
          <Sidebar />
    </div>
  )
}

export default Settings