
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};

function shelfBook(book, shelf) {
  // access genre
  // write conditional to keep length of shelf under <= 3
  if (shelf.length === 3) {
    return null;
    } 
  return shelf.unshift(book);
};

function unshelfBook(book, shelf) {
  // should remove a book by name
  // iterate through elements in the array
  for (var i = 0; i < shelf.length; i++) {
    // conditional to check for matching name
    if (book === shelf[i].title) {
      shelf.splice(i, 1);
    }
  }
};

function listTitles(shelf) {
  // list titles on shelf in string
  // array for titles
  var bookTitles = []; 
  // iterate through books on shelf
  for (var i = 0; i < shelf.length; i++) {
    bookTitles.push(shelf[i].title);
  }
  return bookTitles.join(', ');
};

function searchShelf(shelf, bookTitle) {
  // iterate through elements in the shelf
  for (var i = 0; i < shelf.length; i++) {
    if (bookTitle === shelf[i].title) {
      return true;
    } 
  }
  return false;
};
