const express = require("express");
const router = express.Router();
const { getPost, addPost } = require("../controllers/post");
router.get("/list", getPost);
router.post("/add", addPost);

module.exports = router;
