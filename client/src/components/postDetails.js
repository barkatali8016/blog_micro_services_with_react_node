import Comments from "./comments/comments";

const PostDetails = (props) => {
  return (
    <div className="card-deck mt-5">
      <div className="alert alert-dark">
        <button
          onClick={props.back}
          type="button"
          className="btn btn-secondary mr-5"
        >
          Go back
        </button>
        <h5 className="ml-5 d-inline-block">View Details</h5>
      </div>
      <div className="card">
        <img
          className="card-img-top custom-height m-2"
          src={props.post.imgUrl || props.post.defaultImgUrl}
          alt="Card  cap"
        />
        <div className="card-body">
          <h5 className="card-title">{props.post.title}</h5>
          <p className="card-text">{props.post.description}</p>
          <Comments post={props.post} />
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
};
export default PostDetails;
