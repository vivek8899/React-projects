
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import CreatePost from './components/CreatePost';
import PostList from "./components/PostList";
import { useState } from 'react';
import "./App.css";
import PostListProvider from './store/Post-List-Store';

function App() {
 const [selectedTab , setSelectedTab] = useState("Home");

  return (
 
    <PostListProvider>
  <div className="app-container">
  <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></SideBar>
  <div className="content">
  <Header />
 
  {selectedTab === "Home" ?  <PostList></PostList> :  <CreatePost></CreatePost>}
 
  <Footer />
  </div>
  </div>
  </PostListProvider>
  )
}

export default App