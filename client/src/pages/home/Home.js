import './Home.css';
import Header from '../../components/Header/Header.js'
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';

function Home() {
  return (
     <>
          <Header />
          <div className='home'>
               <Posts/>
               <Sidebar />
          </div>
     </>
  )
}

export default Home