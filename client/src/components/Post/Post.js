import './Post.css'

const Post = () => {
  return (
    <div className='post'>
          <img className='postImg' src="https://images.pexels.com/photos/273239/pexels-photo-273239.jpeg" alt="" srcset="" />
          <div className="postInfo">
               <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
               </div>
               <span className="postTitle">
                    Lorem, ipsum dolor sit amet;
               </span>
               <hr />
               <span className="postDate">
                    1 hour ago
               </span>
          </div>
          <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, vero esse qui provident aliquam tenetur sequi adipisci distinctio natus sit perspiciatis, ratione a, pariatur quasi ducimus voluptas eum et dolor? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae incidunt id ducimus repellat laboriosam cupiditate! Quis voluptas cum enim et sed est fugiat ab necessitatibus iure, praesentium ex provident, magni ullam animi exercitationem repellat perferendis dolor rerum accusantium veritatis! Voluptates.</p>
    </div>
  )
}

export default Post