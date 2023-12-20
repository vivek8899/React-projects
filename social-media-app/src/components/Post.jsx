import React, { useContext } from 'react'
import { AiFillDelete } from "react-icons/ai"
import { PostList } from '../store/Post-List-Store';

const Post = ({ post }) => {

  const {deletePost} = useContext(PostList);

  return (
    <div className="card post-card">
    
    <div className="card-body">
      <h5 className="card-title">{post.title}
      <span  className="position-absolute top-0 start-100
      translate-middle badge round-pill bg-danger" onClick={()=> deletePost(post.id)}><AiFillDelete/></span>
      
      </h5>
      <p className="card-text">{post.body}</p>
      <div className="alert alert-success reactions" role="alert">
        this post is liked by {post.reactions} people.
      </div>
     

    </div>
  </div>
      
   
  )
}

export default Post
