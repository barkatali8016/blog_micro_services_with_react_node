const POSTS = require("../posts.json");
const { v4: uuidv4 } = require("uuid");
exports.getPost = (req, res) => {
  // console.log(POSTS);
  res.json({
    success: 1,
    msg: "All post found.",
    posts: POSTS,
  });
};

exports.addPost = (req, res) => {
  if (
    JSON.stringify(req.body) != JSON.stringify({}) &&
    req.body.title &&
    req.body.description
  ) {
    const post = {
      id: uuidv4(),
      title: req.body.title,
      description: req.body.description,
      comments: [],
      userId: 1,
      defaultImgUrl:
        "https://user-images.githubusercontent.com/43302778/106805462-7a908400-6645-11eb-958f-cd72b74a17b3.jpg",
    };
    POSTS.push(post);
    res.json({
      success: 1,
      msg: "Post added successfully.",
      posts: POSTS,
    });
  } else {
    res.json({
      success: 0,
      msg: "Body can not be empty.",
    });
  }
};
