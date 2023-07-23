const express = require('express');
const router = express.Router();
// const booksData = require('../data.json');

//send all books
router.get('/books', (req, res) => {
  let _books = [...req.books];

  //send specific titles
  if (req.query.title) {
    _books = _books.filter((book) => {
      return book.title.toLowerCase().includes(req.query.title.toLowerCase());
    });
  }

  if (_books.length > 0) {
    res.send(_books);
  } else {
    res.send('Nothing found, try another title');
  }
});

module.exports = router;
