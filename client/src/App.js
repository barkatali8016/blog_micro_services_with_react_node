import { useEffect, useState } from "react";
import "./App.css";
import CreatePost from "./components/createPost";
import ListPost from "./components/listPost";
import axios from "axios";
import PostDetails from "./components/postDetails";
function App() {
  const [posts, setPost] = useState([]);
  const [isViewDetails, setIsViewDetails] = useState(false);
  const [postDeails, setPostDeails] = useState({});
  const getPosts = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/posts/list");
      if (response.status === 200) {
        setPost(response.data.posts);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const viewDetails = (post) => {
    setPostDeails(post);
    setIsViewDetails(true);
  };
  const backToList = () => {
    setIsViewDetails(false);
  };
  useEffect(() => {
    getPosts();
    return () => {};
  }, []);

  return (
    <div className="container">
      {!isViewDetails && (
        <>
          {" "}
          <h1 className="mb-3">Create New Post</h1>
          <CreatePost getPosts={getPosts} />
          <hr />
          <ListPost posts={posts} viewDetails={viewDetails} />
        </>
      )}

      {isViewDetails && <PostDetails post={postDeails} back={backToList} />}
    </div>
  );
}

export default App;
