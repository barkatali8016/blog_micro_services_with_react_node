import Card from "./card";

const ListPost = (props) => {
  const cardItems = props.posts.map((post) => (
    <Card key={post.id} post={post} viewDetails={props.viewDetails} />
  ));
  return <div className="card-deck card-list">{cardItems}</div>;
};
export default ListPost;
