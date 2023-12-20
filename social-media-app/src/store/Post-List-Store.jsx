import { createContext , useReducer } from "react";



//context defination
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});



//reducer for useReducer
const postListReducer = (currPostList , action) => {
  let newPostList = currPostList;
  if(action.type === 'DELETE_POST'){
    newPostList = currPostList.filter(post => post.id !== action.payload.postId);
  }
  else if(action.type == 'ADD_POST'){
    newPostList  = [action.payload , ...currPostList];
  }
  return newPostList;
}






// context provider
const PostListProvider = ({ children }) =>{

//useReducerHook
const [postList , dispatchPostList] = useReducer(postListReducer , DEFAULT_POSTLIST);


//AddPost Handler
const addPost = (userId , postTitle , postContent , reactions) => {
  
dispatchPostList({
  type:"ADD_POST",
  payload:{
    id: Date.now(),
    title: postTitle,
    body: postContent,
    reactions: reactions,
    userId: userId
  }
})  

};


//DeletePosthandler
const deletePost = (postId) => {
dispatchPostList({
  type: "DELETE_POST",
  payload: {
    postId,
  },

})
};





return <PostList.Provider value={
  {postList , addPost , deletePost}
}>{children}</PostList.Provider>
};



//Default data
const DEFAULT_POSTLIST = [{
  id: "1",
  title: 'Update about trip',
  body: 'hi friends how are you',
  reactions: 0,
  userId: 'user-2'
},
{
  id: "2",
  title: 'Update about trip 2',
  body: 'hi friends chloge',
  reactions: 2,
  userId: 'user-4'
 
}];


export default PostListProvider;

