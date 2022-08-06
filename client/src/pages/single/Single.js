import Sidebar from '../../components/sidebar/Sidebar';
import SinglePost from '../../components/SinglePost/SinglePost';
import './Single.css';

function Single() {
  return (
    <div className='single'>
         <SinglePost />
          <Sidebar />
    </div>
  )
}

export default Single