
import PropTypes from 'prop-types';
import { BsBookmarkDash } from "react-icons/bs";
const Blog=({blog,handleAddToBookmark,handleMarkAsRead})=>{
    const {id,title,cover,author_img,author,reading_time,posted_date,hashtags}=blog;

    //  console.log(blog)

    return(
        <div className='m-7'>
         
         <img className='w-full' src={cover} alt={title} />
         <h2 className='text-3xl'>Title: {title}</h2>
         {
            hashtags.map((hash,idx)=><span key={idx}><a href="">#{hash}</a></span>)
         }
         <div className='flex justify-between'>
            <div className='flex'>
             <img className='w-14' src={author_img} alt="" />
             <div className='ml-6'>
                <h2 className='2xl'>{author}</h2>
                <p>{posted_date}</p>
                <button onClick={()=>handleMarkAsRead(id,reading_time)} className='text-blue-400 underline'>Mark As Read</button>
             </div>
            </div>
            
            <div>
             <span>{reading_time} Min Read</span>
             <button
             onClick={() => handleAddToBookmark(blog)}
             ><BsBookmarkDash /></button>
            </div>
         </div>
        </div>
    )
}

Blog.propTypes={
    blog: PropTypes.object.isRequired
}

export default Blog;