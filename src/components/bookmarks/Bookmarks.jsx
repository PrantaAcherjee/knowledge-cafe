import Bookmark from "../bookmark/Bookmark";

const Bookmarks=({bookmarks})=>{
    return(
        <>
        <div className="md:w-1/3 m-7  bg-gray-300 p-3">
        <h2 className="text-3xl text-center">Bookmarked Books: {bookmarks.length}</h2>
          
          {
            bookmarks.map(bookmark=>
            <Bookmark key={bookmark.id} 
            bookmark={bookmark}>
            </Bookmark>)
          }
        </div>
        
        
        </>
    )
}
export default Bookmarks;