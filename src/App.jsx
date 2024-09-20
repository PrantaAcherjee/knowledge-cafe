import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {
  const [bookmarks,setBookmarks]=useState([]);
  const addToBookmark=(blog)=>{
    // console.log('add to bookmark')
    const newBookmarks=[...bookmarks,blog]
    setBookmarks(newBookmarks)

  }

  return (
    <>
       <Header/>
       <div className='md:flex'>
       <Blogs handleAddToBookmark={addToBookmark}/>
       <Bookmarks bookmarks={bookmarks}/>
       </div>
       
    </>
  )
}

export default App
