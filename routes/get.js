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
  const title = req.query.title;

  if (title) {
    const results = await asyncMySQL(
      `SELECT * FROM \`book-details\` WHERE title LIKE ${title};`
    );
    if (results.length > 0) {
      res.send(results);
      return;
    } else {
      res.send(`No match`);
      return;
    }
  }

  //get all data from SQL

  if (!title) {
    const results = await asyncMySQL(`SELECT * FROM \`book-details\`;`);
    res.send(results);
    return;
  }
  // if (_books.length > 0) {
  //   res.send(_books);
  // } else {
  //   res.send('Nothing found, try another title');
  // }
});

module.exports = router;
