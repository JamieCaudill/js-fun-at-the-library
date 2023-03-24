
module.exports = {
  shelfBook,
  unshelfBook,
  // listTitles,
  // searchShelf
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







