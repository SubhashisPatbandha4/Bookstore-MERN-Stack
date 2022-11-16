const express = require("express");
const Book = require("../model/book");
const router = express.Router();

router.get("/", async (req, resp, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }

  if (!books) {
    return resp.status(404).json({ message: "no products found" });
  } else {
    console.log(books)
    return resp.status(202).json({ books });
  }
});

module.exports = router;
