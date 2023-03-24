

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
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

// should be able to take stock of how many books are on a shelf
function takeStock(library, genre) {
  // access shelf
  var shelf = library.shelves[genre]
  var bookCounter = 0;
  // if a shelf is not specified, return number of entire collection
  if (genre === undefined) {
    bookCounter = library.shelves.fantasy.length + library.shelves.fiction.length + library.shelves.nonFiction.length;
    // iterate through all books on all shelves.
    // for (var i = 0; i < library.shelves.fantasy; i++) {
    //   library.shelves.fantasy[i]
    return `There are a total of ${bookCounter} books at the ${library.name}.`
    } 
  // There are a total of 3 books at the Denver Public Library.
  return `There are a total of ${shelf.length} ${genre} books at the ${library.name}.`;
}


var hyperion = {
  title: "Hyperion",
  mainCharacter: { name: "The Shrike", age: null, pronouns: "they" },
  pageCount: 482,
  genre: "fantasy"
};

var dune = {
  title: "Dune",
  mainCharacter: { name: "Paul", age: 15, pronouns: "he/him" },
  pageCount: 421,
  genre: "fantasy"
};

var prideAndPrejudice = {
  title: "Pride and Prejudice",
  mainCharacter: { name: "Eliabeth Bennet", age: 20, pronouns: "she/her" },
  pageCount: 432,
  genre: "fiction"
}

var auroraLibrary = createLibrary("Aurora Public Library");

addBook(auroraLibrary, hyperion);
addBook(auroraLibrary, dune);
addBook(auroraLibrary, prideAndPrejudice);

// console.log(takeStock(auroraLibrary));