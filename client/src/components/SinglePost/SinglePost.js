import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './SinglePost.css'

import {Context} from '../../context/Context'


function SinglePost() {



     const location = useLocation()
     const path = location.pathname.split('/')[2]
     const [post, setPost] = useState({})
     const PF = "http://localhost:5000/images/"

     const {user} = useContext(Context);


     const [title, setTitle] = useState("")
     const [desc, setDesc] = useState("")
     const [updateMode, setUpdateMode] = useState(false);



     useEffect(() => {
          const getPost = async() => {
               const res = await axios.get('/posts/' + path);
               setPost(res.data)
          }
          getPost();
     }, [path])



     const handleDelete = async (e) => {

          console.log(path)

          try {
               await axios.delete(`/posts/${post._id}`, {
                    data: {username: user.username}
               })
               window.location.replace("/")
          } catch(err) {
               console.log(err)
          }
     }


  return (
    <div className='singlePost'>
          <div className="singlePostWrapper">
               {post.photo && (<img src={`${PF}${post.photo}`} alt="" className="singlePostImg" />)}  
               <h1 className="singlePostTitle">
                    {post.title}

                    
                    {post.username === user?.username && (

                         <div className="singlePostEdit">
                              <i className="singlePostIcon far fa-edit" onClick={() => setUpdateMode(true) }></i>
                              <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                         </div>

                    )}
               </h1>
               <div className="singlePostInfo">
                    <span className='singlePostAuthor'>
                         <Link className='link' to={`/?user=${post.username}`}>
                              Author: <strong>{post.username}</strong>
                         </Link>
                    </span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
               </div>
               <p className='singlePostDesc'>
                   {post.desc}
               </p>
          </div>
    </div>
  )
}

export default SinglePost