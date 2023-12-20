import React, { useContext } from 'react';
import Post from './Post';
import { PostList as Postlistdata } from '../store/Post-List-Store';

const PostList = () => {

  const { postList } = useContext(Postlistdata)
  return (
    <div>{
      
      postList.map( (post) => (<Post  key={post.id} post={post}/>))
    }
     
    </div>
  )
}

export default PostList
