import {useContext, useState} from 'react';
import Sidebar from '../../components/sidebar/Sidebar'
import './Settings.css'
import {Context} from '../../context/Context'

import axios from 'axios'



function Settings() {

     const {user} = useContext(Context)
     const [username, setUsername] = useState(user.username)
     const [email, setEmail] = useState(user.email)
     const [password, setPassword] = useState(user.password)
     const [file, setFile] = useState(null);


     const handleSubmit = async (e) => {

          console.log('handle click')
          e.preventDefault();

          const updatedUser = {
               userId : user._id,
               username,
               email,
               password
          }

          if(file) {
               const data = new FormData();
               const filename = Date.now() + file.name;
               data.append("name", filename);
               data.append("file", file);
               updatedUser.profilePic = filename

               try {
                    await axios.post("/upload", data)
               } catch(e) {

               }
          }

          try {
               await axios.put(`/user/${user._id}`, updatedUser);

          } catch(err){

          }


     }




  return (
    <div className="settings">
          <div className="settingsWrapper">
               <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your account</span>
                    <span className="settingsDeleteTitle">Delete your account</span>
               </div>

               <form action="" className="settingsForm" onSubmit={handleSubmit}>
                    <label>Profile Picutre</label>
                    <div className="settingsPP">
                         <img src={user.profilePic} alt="" srcset="" />
                         <label htmlFor='fileInput'>
                              <i className="settingsPPIcon far fa-user-circle"></i>
                         </label>
                         <input type="file" id="fileInput" style={{display: "none"}} 
                              onChange={e => setFile(e.target.files[0])}
                         />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder={username} onChange={e => setUsername(e.target.value)} />
                    <label>Email</label>
                    <input type="email" placeholder={email} onChange={e => setEmail(e.target.value)}/>
                    <label>Password</label>
                    <input type="password" onChange={e => setPassword(e.target.value)} />

                    <button className="settingsSubmit" type="submit">Update</button>
               </form>
          </div>
          <Sidebar />
    </div>
  )
}

export default Settings