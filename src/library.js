

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
  shelf.pop();
  return (`You have now checked out ${book} from the ${library.name}.`)
};

var dracula = {
  title: "Dracula",
  mainCharacter: { name: "Count Dracula", age: undefined, pronouns: "he/him" },
  pageCount: 418,
  genre: "fantasy"
};

var bornACrime = {
  title: "Born a Crime",
  mainCharacter: { name: "Trevor Noah", age: 36, pronouns: "he/him" },
  pageCount: 304,
  genre: "nonFiction"
};

var prideAndPrejudice = {
  title: "Pride and Prejudice",
  mainCharacter: { name: "Eliabeth Bennet", age: 20, pronouns: "she/her" },
  pageCount: 432,
  genre: "fiction"
};

var denverLibrary = createLibrary("Denver Public Library");

addBook(denverLibrary, dracula);
addBook(denverLibrary, bornACrime);
addBook(denverLibrary, prideAndPrejudice);

console.log(denverLibrary.shelves);
var result1 = checkoutBook(denverLibrary, "Pride and Prejudice", "fiction");

console.log(denverLibrary.shelves);