const express = require('express');
const router = express.Router();
const asyncMySQL = require('../mysql/connection');

router.patch('/book/:isbn', async (req, res) => {
  const { title, author } = req.body;

  const isbn = Number(req.params.isbn);

  //check that isbn is a number
  if (Number.isNaN(isbn)) {
    res.send('invalid id');
    return;
  }

  try {
    if (title && typeof title === 'string') {
      await asyncMySQL(
        `UPDATE \`book-details\` SET title = "${title}" WHERE isbn LIKE "${isbn}";`
      );
    }

    if (author && typeof author === 'string') {
      await asyncMySQL(
        `UPDATE \`book-details\` SET author = "${author}" WHERE isbn LIKE "${isbn}";`
      );
    }
  } catch (error) {
    res.send('error' + error.sqlMessage);
  }
  res.send('The data was successfully updated');
});

module.exports = router;
