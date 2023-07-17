const express = require('express');
const router = express.Router();

router.delete('/book/:id', (req, res) => {
  const id = Number(req.params.id);

  //check that id is a number
  if (Number.isNaN(id)) {
    res.send('invalid id');
    return;
  }

  const indexOf = req.books.findIndex((item) => {
    return Number(item.isbn) === id;
  });

  if (indexOf < 0) {
    res.send(`the id wasn't found`);
  }

  req.books.splice(indexOf, 1);

  res.send('The book with the id: ' + id + ' was removed');
});

module.exports = router;
