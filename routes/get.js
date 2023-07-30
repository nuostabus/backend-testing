const express = require('express');
const router = express.Router();
const asyncMySQL = require('../mysql/connection');

//send all books
router.get('/books', async (req, res) => {
  // let _books = [...req.books];

  // //send specific titles
  // if (req.query.title) {
  //   _books = _books.filter((book) => {
  //     return book.title.toLowerCase().includes(req.query.title.toLowerCase());
  //   });
  // }

  // if (_books.length > 0) {
  //   res.send(_books);
  // } else {
  //   res.send('Nothing found, try another title');
  // }

  const title = req.query.title;

  //get data from SQL
  const results = await asyncMySQL(`SELECT * FROM \`book-details\`;`);

  console.log(results);
});

module.exports = router;
