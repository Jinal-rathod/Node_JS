const Post = require("../models/Post");

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find().populate("author");
  res.render("index", { posts });
};

exports.createPost = async (req, res) => {
  const { title, content } = req.body;

  await Post.create({
    title,
    content,
    author: req.session.user._id,
  });

  res.redirect("/dashboard");
};

exports.getDashboard = async (req, res) => {
  const posts = await Post.find({ author: req.session.user._id });
  res.render("dashboard", { posts, user: req.session.user });
};
