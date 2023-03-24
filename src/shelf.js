
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

function unshelfBook() {

}




