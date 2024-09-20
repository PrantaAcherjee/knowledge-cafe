import Bookmark from "../bookmark/Bookmark";

const Bookmarks=({bookmarks})=>{
    return(
        <>
        <div className="md:w-1/3">
          Bookmarked Books {bookmarks.length}
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