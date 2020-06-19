var checkoutBook = require('../src/library.js').checkoutBook;
var searchShelf = require('../src/shelf.js').searchShelf;

class Librarian {
  constructor(name, library) {
    this.name = name
    this.library = library
  }
  greetPatron(name, isMorning = false) {
    return isMorning ? 'Good morning, ' + name + '!' : 'Hello, ' + name + '!'
  }
  findBook(bookTitle){
    var exists = checkoutBook(this.library, bookTitle)
    exists = ( exists[0] == 'Y' )
    return exists ? 'Yes, we have ' + bookTitle : 'Sorry, we do not have ' + bookTitle
  }
  calculateLateFee(days){
    return Math.ceil(days * .25)
  }
}

module.exports = Librarian;
