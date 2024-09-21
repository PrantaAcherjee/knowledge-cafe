import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {
  const [bookmarks,setBookmarks]=useState([]);
  const [readingTime,setReadingTime]=useState(0); 

  const handleAddToBookmark=(blog)=>{
    // console.log('add to bookmark')
    const newBookmarks=[...bookmarks,blog]
    setBookmarks(newBookmarks)

  }
   
  const handleMarkAsRead=(id,time)=>{
    // console.log(time,'reading')
    setReadingTime(readingTime+time)

    // remove from list 
    const remainingBookmarks=bookmarks.filter(bookmark=>bookmark.id!==id);
    setBookmarks(remainingBookmarks)
  }

  return (
    <>
       <Header/>
       <div className='md:flex'>
       <Blogs handleAddToBookmark={handleAddToBookmark}
       handleMarkAsRead={handleMarkAsRead}/>
       <Bookmarks bookmarks={bookmarks}
       readingTime={readingTime}/>
       </div>
       
    </>
  )
}

export default App
