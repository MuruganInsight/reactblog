import Post from '../Post/Post'
import './Posts.css'

function Posts({posts}) {
    return ( 
        <div className="posts">
            {
                posts.map(p => (
                    <Post post={p} key={p._id} />
                ))
            }
        </div>
        
    )
}

export default Posts