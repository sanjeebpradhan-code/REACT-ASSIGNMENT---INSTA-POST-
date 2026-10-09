
import React, { useState } from 'react';

const Post = (props) => {

  const [likes, setLikes] = useState(0);

  const handleLikes = () => {
    setLikes(likes + 1);
    console.log(likes + 1); 
  };

  return (

    <div className="w-full flex justify-center my-4 min-h-screen bg-gradient-to-tr from-violet-500 via-pink-500 to-orange-400 py-8">


       <div className="  border border-gray-300 rounded-2xl p-4 w-80 bg-white flex flex-col items-center justify-center gap-3">
      
      <img src={props.image} alt={props.name} className="w-full h-72 object-cover rounded-lg"  />

      <p>{props.name}</p>

      <button onClick={handleLikes} className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
        Likes❤️ {likes}
      </button>
         
    </div>
    
    </div>
   
  );
};

export default Post;