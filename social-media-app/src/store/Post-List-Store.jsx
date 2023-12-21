import { createContext , useReducer } from "react";



//context defination
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPost: () =>{},
});



//reducer for useReducer
const postListReducer = (currPostList , action) => {
  let newPostList = currPostList;
  if(action.type === 'DELETE_POST'){
    newPostList = currPostList.filter(post => post.id !== action.payload.postId);
  }else if(action.type === "ADD_INITIAL_POST"){
    newPostList = action.payload.posts;

  }else if(action.type == 'ADD_POST'){
    newPostList  = [action.payload , ...currPostList];
  }
  return newPostList;
}






// context provider
const PostListProvider = ({ children }) =>{

//useReducerHook
const [postList , dispatchPostList] = useReducer(postListReducer , []);


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

const addInitialPost = (posts) => {
  
  dispatchPostList({
    type:"ADD_INITIAL_POST",
    payload:{
    posts,
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
  {postList , addPost , deletePost , addInitialPost}
}>{children}</PostList.Provider>
};






export default PostListProvider;

