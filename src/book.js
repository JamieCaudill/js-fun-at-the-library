// book.js

function createTitle(title) {
  return `The ${title}`;
};

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns
  }
};

function saveReview(review, reviews) {
  // check to see if new review is already in reviews array
  for (var i = 0; i < reviews.length; i++) {
    if (review === reviews[i]) {
      return null;
    }   
  }
  reviews.push(review);
};

function calculatePageCount(title) {
  // add 20 pages per letter in the title
  var counter = 0;
  for (var i = 0; i < title.length; i++) {
    counter = counter + 20;
  }
  return counter;
};

function writeBook(bookTitle, bookCharacter, genre) {
  var library = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    genre: genre,
    pageCount: calculatePageCount(bookTitle)
  }
  return library;
};

function editBook(title) {
  return title.pageCount = (title.pageCount/4 * 3);
};


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}