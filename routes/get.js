const express = require('express');
const router = express.Router();
const asyncMySQL = require('../mysql/connection');

//send all books
router.get('/books', async (req, res) => {
  const results = await asyncMySQL(`SELECT * FROM \`book-details\`;`);

  if (results.length > 0) {
    return res.send(results);
  }
  return res.send('something went wrong');
});

router.get('/books/:title', async (req, res) => {
  const title = req.params.title;

  const results = await asyncMySQL(
    `SELECT * FROM \`book-details\` WHERE title LIKE ${title};`
  );

  if (results.length > 0) {
    res.send(results);
    return;
  }

  res.send(`No match`);
  return;
});

module.exports = router;
