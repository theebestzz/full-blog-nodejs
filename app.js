// gerekli modülleri yükleyin
require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const path = require("path");

const port = process.env.PORT || 8000;

// uygulamayı oluşturun
const app = express();

app.use(express.static("public"));

// şablon dosyalarının bulunduğu klasörü belirtin
app.set("views", path.join(__dirname, "src"));

// kullanacağınız şablon motorunu belirtin
app.set("view engine", "ejs");

// kök dizindeki isteklere yanıt verin
// EJS şablonunu kullanarak HTML sayfası oluşturun
app.get("/", function (req, res) {
  res.render("index", { title: "Home" });
});

app.get("/about", function (req, res) {
  res.render("pages/about", { title: "About" });
});

app.get("/blog", function (req, res) {
  res.render("pages/blog", { title: "Blog" });
});

app.get("/contact", function (req, res) {
  res.render("pages/contact", { title: "Contact" });
});

app.get("/login", function (req, res) {
  res.render("pages/auth/login", { title: "Login" });
});

app.get("/register", function (req, res) {
  res.render("pages/auth/register", { title: "Register" });
});

// sunucuyu başlatın
app.listen(port, function () {
  console.log(`Sunucu ${port} numaralı portta çalışıyor...`);
});
