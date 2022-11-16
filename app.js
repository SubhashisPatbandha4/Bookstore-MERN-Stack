const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const app = express();
app.use("/books", router);
mongoose
  .connect(
    "mongodb+srv://admin:VibgjiK9R23L4Ops@cluster0.ikjkulj.mongodb.net/bookstoreDB?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((e) => console.log("not connected"));
//
//
// 