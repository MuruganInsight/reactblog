import './SinglePost.css'

function SinglePost() {
  return (
    <div className='singlePost'>
          <div className="singlePostWrapper">
               <img src="https://images.pexels.com/photos/373584/pexels-photo-373584.jpeg" alt="" className="singlePostImg" />
               <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet consectetur
                    <div className="singlePostEdit">
                         <i className="singlePostIcon far fa-edit"></i>
                         <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
               </h1>
               <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author: <strong>Safak</strong></span>
                    <span className="singlePostDate">1 hour ago</span>
               </div>
               <p className='singlePostDesc'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, tenetur? Beatae assumenda impedit, quaerat in ipsum fugit veniam mollitia eligendi eos eaque eveniet? Reprehenderit minus quo inventore adipisci repellendus velit rerum hic totam eum iste, officia tenetur, aspernatur eos placeat corrupti mollitia voluptatem, dignissimos ab cum numquam perspiciatis sint aut. Eos cum consequuntur aspernatur culpa doloremque animi ducimus, corrupti voluptas consequatur reprehenderit quas facilis eveniet expedita dolorem eius quae et, dignissimos maxime placeat quisquam mollitia iste, laudantium nemo. Officia, veritatis adipisci culpa libero vel ipsam eius id nemo perspiciatis autem qui neque doloribus dolorem accusamus explicabo quod magni aut blanditiis? Earum inventore nihil voluptates! Ipsa quam, ipsam tempore aliquid expedita in dolorum eum numquam deserunt incidunt dolorem amet inventore, explicabo nisi quae totam sint distinctio itaque veritatis vel corrupti nobis voluptas. Eaque autem sit delectus eum est maiores odit, repellat accusantium, facilis temporibus id nemo praesentium illum natus ratione quos! Nemo pariatur, excepturi porro tempora ex optio adipisci. Facilis sunt soluta deleniti obcaecati dolorum? Eligendi tempore voluptate eum, enim voluptas repellendus soluta ad maxime laborum aspernatur! Non distinctio consequatur veritatis soluta esse numquam iure illo, recusandae dolores error labore dolore pariatur magni accusantium expedita. Nobis inventore culpa quasi pariatur at!
               </p>
          </div>
    </div>
  )
}

export default SinglePost