const express = require("express");
const router = express.Router();
const Post = require("../models/postModel");

// POST 게시글 생성
router.post("/", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(400).json({ message: "게시글 저장 실패", error: err.message });
  }
});

// GET 전체 게시글 조회
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: "서버 오류", error: err.message });
  }
});

module.exports = router;
