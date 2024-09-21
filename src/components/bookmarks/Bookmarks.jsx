import Bookmark from "../bookmark/Bookmark";

const Bookmarks=({bookmarks,readingTime})=>{
    return(
        <>
        <div className="md:w-1/3 m-7  bg-gray-300 p-3">
        <h2 className="text-2xl text-center text-blue-600">Reading Spent Time {readingTime} Minute</h2>
        <h2 className="text-3xl text-center">Bookmarked Books: {bookmarks.length}</h2>
          
          {
            bookmarks.map((bookmark,idx)=>
            <Bookmark key={idx} 
            bookmark={bookmark}>
            </Bookmark>)
          }
        </div>
        
        
        </>
    )
}
export default Bookmarks;