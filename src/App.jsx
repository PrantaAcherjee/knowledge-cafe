import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {
  const [bookmarks,setBookmarks]=useState([]);
  const addToBookmark=()=>{
    console.log('add to bookmark')
  }

  return (
    <>
       <Header/>
       <div className='md:flex'>
       <Blogs handleAddToBookmark={addToBookmark}/>
       <Bookmarks/>
       </div>
       
    </>
  )
}

export default App
