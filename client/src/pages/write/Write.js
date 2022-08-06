import './Write.css'

function Write() {
  return (
    <div className='write'>
    <img src="https://images.pexels.com/photos/373584/pexels-photo-373584.jpeg" alt=""  className='writeImg'/>
          <form action="" className="writeForm">
               <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                         <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
               </div>
               <div className="writeFormGroup">
                    <textarea placeholder='Tell your story...' type="text" className='writeInput writeText'></textarea>
               </div>
               <button className="writeSubmit">Publish</button>
          </form>
    </div>
  )
}

export default Write