const express = require("express");
const router = express.Router();
const { getComments, addComment } = require("../controllers/comments");
router.get("/post/:id/comment", getComments);
router.post("/post/:id/comment", addComment);

module.exports = router;
