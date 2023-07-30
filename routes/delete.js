const express = require('express');
const router = express.Router();
const asyncMySQL = require('../mysql/connection');

router.delete('/book/:id', async (req, res) => {
  const id = Number(req.params.id);

  //check that id is a number
  if (Number.isNaN(id)) {
    res.send('invalid id');
    return;
  }

  const result = await asyncMySQL(
    `DELETE from \`book-details\` WHERE isbn LIKE ${id}`
  );
  res.send('The book with the id: ' + id + ' was removed');
});

module.exports = router;
