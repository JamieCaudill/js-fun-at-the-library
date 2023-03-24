

module.exports = {
  createLibrary,
  // addBook,
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
}
