const Comment = (props) => {
  return (
    <div className="alert alert-light m-5" role="alert">
      <div className="text-left comment-avatar d-flex align-items-center flex-wrap">
        {/* src="https://avatars.githubusercontent.com/u/44722087?v=4" */}
        {/* https://media-exp2.licdn.com/dms/image/C4D03AQFp88LYnGWu0A/profile-displayphoto-shrink_400_400/0/1656161008040?e=1661990400&v=beta&t=WnwG1NpHnAICzFqhqN1l1n2SxBVUPvA0Cs2Bb7JhV4c */}
        <img
          src={props.comment.avatar || props.comment.defaultAvatar}
          alt="avatars"
          className="rounded-circle"
        />
        <p className="font-weight-normal align-self-end ms-4">
          {props.comment.content}
        </p>
      </div>
    </div>
  );
};
export default Comment;
