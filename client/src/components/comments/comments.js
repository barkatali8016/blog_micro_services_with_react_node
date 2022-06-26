import CreateComments from "./createComments";
import Comment from "./comment";
import { useEffect, useState } from "react";
import axios from "axios";
const Comments = (props) => {
  const [comments, setComments] = useState([]);
  const [isFetchComment, setIsFetchComment] = useState(false);
  const clickFetchComment = () => {
    setIsFetchComment(!isFetchComment);
  };
  const getCommentsByPostId = async () => {
    const requrl = `http://localhost:3002/api/post/${props.post.id}/comment`;
    const response = await axios.get(requrl);
    console.log(response);
    setComments(response.data.comments);
  };
  useEffect(() => {
    getCommentsByPostId();
    return () => {};
  }, [isFetchComment]);
  const commentList = comments.map((comment) => (
    <Comment key={comment.id} comment={comment} />
  ));
  return (
    <div className="alert alert-secondary m-5" role="alert">
      <CreateComments
        post={props.post}
        getCommentsByPostId={clickFetchComment}
      />
      {commentList}
    </div>
  );
};
export default Comments;
