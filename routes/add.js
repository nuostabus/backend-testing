const express = require('express');
const router = express.Router();
const asyncMySQL = require('../mysql/connection');

router.post('/book', async (req, res) => {
  const { isbn, title, author } = req.body;

  if (
    !isbn ||
    !title ||
    !author ||
    isNaN(Number(isbn)) ||
    typeof title !== 'string' ||
    typeof author !== 'string'
  ) {
    return res.send('invalid or incomplete request');
  }

  try {
    await asyncMySQL(
      `INSERT INTO \`book-details\` (isbn, title, author) VALUES ("${isbn}", "${title}", "${author}" )`
    );
    res.send('Your data has been successfully added');
  } catch (error) {
    res.send('error: duplicate entry');
  }
});

module.exports = router;
