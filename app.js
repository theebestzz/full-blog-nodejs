// gerekli modülleri yükleyin
require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const port = process.env.PORT || 8000;
const uri = process.env.MONGODB_URI;

// uygulamayı oluşturun
const app = express();

// parse application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// statik klasör
app.use(express.static("src/public"));

// şablon dosyalarının bulunduğu klasörü belirtin
app.set("views", path.join(__dirname, "src"));

// kullanacağınız şablon motorunu belirtin
app.set("view engine", "ejs");

// sayfa route işlemleri
const pages = require("./routes/pages");
app.use("/", pages);

// veritabanı bağlantısı
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB veritabanına başarıyla bağlandı!"))
  .catch((err) =>
    console.error("MongoDB veritabanına bağlanırken hata oluştu:", err)
  );

// sunucuyu başlatın
app.listen(port, function () {
  console.log(`Sunucu ${port} numaralı portta çalışıyor...`);
});
