const express = require("express");
const router = express.Router();

// kök dizindeki isteklere yanıt verin
// EJS şablonunu kullanarak HTML sayfası oluşturun
router.get("/", function (req, res) {
  res.render("index", { title: "Home" });
});

router.get("/about", function (req, res) {
  res.render("pages/about", { title: "About" });
});

router.get("/blog", function (req, res) {
  res.render("pages/blog", { title: "Blog" });
});

router.get("/contact", function (req, res) {
  res.render("pages/contact", { title: "Contact" });
});

router.get("/login", function (req, res) {
  res.render("pages/auth/login", { title: "Login" });
});

router.get("/register", function (req, res) {
  res.render("pages/auth/register", { title: "Register" });
});

router.get("/posts/add-post", function (req, res) {
  res.render("pages/add-post", { title: "Add Post" });
});

module.exports = router;
