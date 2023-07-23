const express = require('express');
const router = express.Router();

router.post('/book', (req, res) => {
  const { isbn, title, author } = req.body;
  const { books } = req;

  const checkingDuplicates = (isbn) => {
    return books.filter((book) => book.isbn == isbn);
  };

  if (
    !isbn ||
    !title ||
    !author ||
    isNaN(Number(isbn)) ||
    typeof title !== 'string' ||
    typeof author !== 'string'
  ) {
    return res.send('invalid or incomplete request');
  } else if (checkingDuplicates(isbn).length > 0) {
    return res.send('invalid - duplicate ISBN entry');
  }
  req.books.push({ isbn, title, author });
  res.send('Your data has been successfully added');
});

module.exports = router;

//9781593279509
