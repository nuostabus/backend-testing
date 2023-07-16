const express = require('express');
const app = express();
const booksData = require('./data.json');

//routes

//send all books
app.get('/', (req, res) => {
  console.log('New request from the front');

  let _books = [...booksData];

  //send specific titles
  if (req.query.title) {
    _books = _books.filter((book) => {
      return book.title.toLowerCase().includes(req.query.title.toLowerCase());
    });
  }

  res.send(_books);
});
const port = process.env.PORT || 6001;

app.listen(port, () => {
  console.log('The server is running on port ' + port);
});

//all titles
//js titles
//add a book
//remove a book
//edit a put

// const express = require('express');
// const router = express.Router();

// //route
// router.get('/', (req, res) => {
//   console.log('Quotes route ran');
//   const { character, num } = req.query;

//   let _simpsons = [...req.simpsons];

//   //if specific characters is asked for
//   if (character) {
//     _simpsons = _simpsons.filter((char) => {
//       return char.character.toLowerCase().includes(character.toLowerCase());
//     });
//   }

//   //if specific quantity is asked for
//   if (num && Number(num) > 0 && _simpsons.length > num) {
//     _simpsons.length = num;
//   }

//   res.send(_simpsons);
// });

// module.exports = router;
