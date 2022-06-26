const Card = (props) => {
  return (
    <div
      className="card list-card"
      onClick={() => props.viewDetails(props.post)}
    >
      <img
        className="card-img-top"
        src={props.post.imgUrl || props.post.defaultImgUrl}
        alt={props.post.title}
      />
      <div className="card-body">
        <h5 className="card-title">{props.post.title}</h5>
        <p className="card-text">{props.post.description}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  );
};
export default Card;
