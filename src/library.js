

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  // takeStock
};

function createLibrary(library) {
  var obj = {
    name: library,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return obj;
};

function addBook(library, book) {
  // access correct shelf and push book
  // sort based on genre using bracket notation
  library.shelves[book.genre].push(book); 
};

function checkoutBook(library, book, genre) {
  // access book on shelf based on genre
  var shelf = library.shelves[genre];
  // for loop to iterate through the books on shelf.
  for (var i = 0; i < shelf.length; i++) {
    // conditional to check if book === book on shelf.
    if (book === shelf[i].title) {
       shelf.splice(i, 1); 
       return (`You have now checked out ${book} from the ${library.name}.`)
    } 
  }
  return `Sorry, there are currently no copies of ${book} available at the ${library.name}.` 
};

