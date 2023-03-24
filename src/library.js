

module.exports = {
  createLibrary,
  addBook,
  // checkoutBook,
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
  // access correct shelf
  library.shelves.fantasy.push(book); 
};

// var denverLibrary = createLibrary("Denver Public Library");

//       var dracula = {
//         title: "Dracula",
//         mainCharacter: { name: "Count Dracula", age: undefined, pronouns: "he/him" },
//         pageCount: 418,
//         genre: "fantasy"
//       };

//       addBook(denverLibrary, dracula);

//       console.log(denverLibrary.shelves.fantasy);