const express = require('express');
const app = express();
const books = require('./data.json');

app.use((req, res, next) => {
  req.books = books;
  next();
});

//convert the body to json
app.use(express.json());

app.use('/get', require('./routes/get'));
app.use('/delete', require('./routes/delete'));
app.use('/post', require('./routes/add'));

const port = process.env.PORT || 6001;
app.listen(port, () => {
  console.log('The server is running on port ' + port);
});

//remove a book
//edit a put
