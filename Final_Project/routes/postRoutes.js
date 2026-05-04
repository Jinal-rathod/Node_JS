const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const { isAuthenticated } = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/roleMiddleware");

router.get("/", postController.getAllPosts);

router.get("/dashboard", isAuthenticated, postController.getDashboard);

router.get("/create", isAuthenticated, isAdmin, (req, res) => {
  res.render("createPost");
});

router.post("/create", isAuthenticated, isAdmin, postController.createPost);

module.exports = router;
