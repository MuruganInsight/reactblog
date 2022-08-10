import { Link } from 'react-router-dom'
import './Post.css'

const Post = ({post}) => {
  return (
    <div className='post'>
     {
          post.photo && (
               <img className='postImg' src="https://images.pexels.com/photos/273239/pexels-photo-273239.jpeg" alt="" srcset="" />
          )
     }
          
          <div className="postInfo">
               <div className="postCats">
                    {
                         post.categories.map(c => (
                              <Link className='link' key={c} to={`/?cat=${c}`}>
                                   <span className="postCat">{c}</span>
                              </Link>
                         ))
                    }
               </div>
               <Link className="link" to={`/post/${post._id}`}>
               <span className="postTitle">
                   {post.title}
               </span>
               </Link>
               <hr />
               <span className="postDate">
                   {new Date(post.createdAt).toDateString()}
               </span>
          </div>
          <p className='postDesc'>{post.desc}</p>
    </div>
  )
}

export default Post