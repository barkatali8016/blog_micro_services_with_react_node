const COMMENTS = require("../data/comments.json");
const { v4: uuidv4 } = require("uuid");
exports.getComments = (req, res) => {
  const postId = req.params.id;
  const comments = COMMENTS.filter((comment) => comment.postId == postId);
  console.log(postId, comments, COMMENTS);
  if (comments.length) {
    return res.json({
      success: 1,
      msg: "Fetch comments successfully.",
      comments: comments,
    });
  }
  return res.json({
    success: 1,
    msg: "No comments found with this id.",
    comments: [],
  });
};
exports.addComment = (req, res) => {
  if (JSON.stringify(req.body) != JSON.stringify({}) && req.body.content) {
    console.log(req.params);
    const postId = req.params.id;

    const comment = {
      content: req.body.content,
      postId: postId,
      userId: 1,
      id: uuidv4(),
      avatar: "",
      defaultAvatar: "http://cdn.onlinewebfonts.com/svg/img_264157.png",
    };
    COMMENTS.unshift(comment);
    return res.json({
      success: 1,
      msg: "Comment added successfully.",
      comments: COMMENTS,
    });
  }
  return res.json({
    success: 0,
    msg: "Body can not be empty.",
  });
};
