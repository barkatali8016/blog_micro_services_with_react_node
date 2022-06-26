import { useRef } from "react";
import axios from "axios";
const CreateComments = (props) => {
  const commentRef = useRef();
  const addComment = async (comment) => {
    const requrl = `http://localhost:3002/api/post/${props.post.id}/comment`;
    const response = await axios.post(requrl, comment);
    console.log(response);
  };
  const submitComment = (event) => {
    event.preventDefault();
    if (commentRef.current.value) {
      const comment = {
        content: commentRef.current.value,
      };
      addComment(comment);
      commentRef.current.value = "";
      props.getCommentsByPostId();
    } else {
      alert("Type a comment.");
    }
  };
  return (
    <form onSubmit={submitComment}>
      <div className="form-group">
        <textarea
          ref={commentRef}
          type="text"
          className="form-control"
          id="comments"
          aria-describedby="comments"
          placeholder="Type a comments"
        ></textarea>
        {/* <small id="comments" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small> */}
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Add Comment
      </button>
    </form>
  );
};

export default CreateComments;
