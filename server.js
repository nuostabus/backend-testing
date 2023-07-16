const express = require('express');
const app = express();
const books = require('./data.json');

app.use((req, res, next) => {
  req.books = books;
  next();
});

app.use('/get', require('./routes/get'));

const port = process.env.PORT || 6001;
app.listen(port, () => {
  console.log('The server is running on port ' + port);
});

//add a book
//remove a book
//edit a put
