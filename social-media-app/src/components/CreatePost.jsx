import React, { useContext } from 'react'
import { useRef } from 'react';

import { PostList } from '../store/Post-List-Store'


const CreatePost = () => {

  const { addPost } = useContext(PostList);

const userIdElement = useRef();
const postTitleElement = useRef();
const postContentElement = useRef();
const reactionsElement = useRef();

const onSubmitHandler= (event)=>{
  event.preventDefault();
  const userId = userIdElement.current.value;
  const postTitle = postTitleElement.current.value;
  const postContent = postContentElement.current.value;
  const reactions = reactionsElement.current.value;
 

  userIdElement.current.value='';
  postContentElement.current.value='';
  postTitleElement.current.value='';
  reactionsElement.current.value='';
  addPost(userId , postTitle , postContent , reactions);
};
  return (
   
      <form className='create-post' onSubmit={onSubmitHandler}>

<div className="mb-3">
    <label htmlFor="userId" className="form-label">User Id</label>
    <input type="text"  ref={userIdElement} className="form-control" id="userid" placeholder='Enter your Id' />
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" ref={postTitleElement} className="form-control" id="title" placeholder='Enter your title here' />
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Content</label>
    <textarea rows={4}  ref={postContentElement} type="text" className="form-control" id="body" placeholder='Describe Your Post' />
  </div>
  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">Number of Reactions</label>
    <input type="text" ref={reactionsElement} className="form-control" id="reactions" placeholder='How many people reacted to this post' />
  </div>
  
  <button type="submit" className="btn btn-primary">Post</button>
</form>
    
  )
}

export default CreatePost
