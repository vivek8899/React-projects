import React, { useContext, useEffect, useState } from 'react';
import Post from './Post';
import { PostList as Postlistdata } from '../store/Post-List-Store';
import WelcomeMsg from './WelcomeMsg';
import LoadingSpinner from './LoadingSpinner';

const PostList = () => {

  const { postList , addInitialPost } = useContext(Postlistdata); 

  const [ fetching , setFetching ] = useState(false);


  //useEffect [] - dependency List
  useEffect(() => {

const controller = new AbortController();
const signal  = controller.signal;

    setFetching(true)
    fetch("https://dummyjson.com/posts" , { signal })
  .then((res) => res.json())
  .then(data => {
    addInitialPost(data.posts);
    setFetching(false)
  }

  );

//useEffect cleanup --> will destroy when the component die
return () => {
  console.log("Cleaning up UseEffect");
  controller.abort();
}  
} , []);

 

  return (
   
    <>
    {
      fetching && <LoadingSpinner/>
    }
     { !fetching && postList.length === 0 && ( <WelcomeMsg  /> )}
    {
      
      !fetching && postList.map( (post) => (<Post  key={post.id} post={post}/>))
    }
     
    </>
  );
};

export default PostList
