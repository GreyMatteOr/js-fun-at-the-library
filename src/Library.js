function createLibrary(name) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    },
    checkedOut: []
  }
}

function addBook(library, book) {
  library.shelves[book.genre].push(book)
}

function checkoutBook(library, bookTitle) {
  var isShelved = false
  for (var shelf of Object.keys(library.shelves)) {
    var originalLength = library.shelves[shelf].length
    for (var i = 0; i < originalLength; i++) {
      if (library.shelves[shelf][0].title == bookTitle) {
        library.checkedOut.push(library.shelves[shelf].shift())
        isShelved = true;
      } else {
        library.shelves[shelf].push(library.shelves[shelf].shift())
      }
    }
  }
  return isShelved ? 'You have now checked out ' + bookTitle + ' from the ' + library.name : 'Sorry, there are currently no copies of ' + bookTitle + ' available at the ' + library.name
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
