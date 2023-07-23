const express = require('express');
const router = express.Router();

router.patch('/book/:isbn', (req, res) => {
  console.log(req.body, req.params.isbn);
  const { isbn, title, author } = req.body;

  const indexOf = req.books.findIndex((book) => {
    return book.isbn === req.params.isbn;
  });

  if (indexOf < 0) {
    return res.send('ISBN not found');
  }

  if (title) {
    req.books[indexOf].title = title;
  }

  if (author) {
    req.books[indexOf].author = author;
  }

  req.books[indexOf] = { ...req.books[indexOf], ...req.body };

  res.send('The data was successfully updated');
});

module.exports = router;
