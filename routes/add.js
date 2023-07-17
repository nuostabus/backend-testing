const express = require('express');
const router = express.Router();

router.post('/book', (req, res) => {
  const { isbn, title, author } = req.body;
  if (
    !isbn ||
    !title ||
    !author ||
    typeof isbn !== 'number' ||
    typeof title !== 'string' ||
    typeof author !== 'string'
  ) {
    res.send('invalid or incomplete request');
  }
});

module.exports = router;
