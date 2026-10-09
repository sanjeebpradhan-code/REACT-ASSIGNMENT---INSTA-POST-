import React from 'react'
import Post from './Components/Post'
import './index.css'

function App() {
  return (
    <div className='posts '>
      <h1 className="text-center text-xl font-bold my-4">
        Mini Image Feed
        </h1>

      <Post image="/images/image1.jpg" name="Gayathri" />
      <Post image="/images/image2.jpg" name="yash" />
      <Post image="/images/image3.jpg" name="Rahul" />
    </div>
  )
}

export default App