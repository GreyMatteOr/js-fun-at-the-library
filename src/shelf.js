function shelfBook(book, shelf = []) {
  shelf.unshift(book)
  while (shelf.length > 3) {
    shelf.shift()
  }
}

function unshelfBook(book, shelf) {
  var originalSize = shelf.length
  for (var i = 0; i < originalSize; i++) {
    shelf[0].title == book ? shelf.shift() : shelf.push(shelf.shift())
  }
}

function listTitles(shelf) {
  var output = shelf.map((item) => {
    return ' ' + item.title
  })
  output = String(output)
  output = output.slice(1)
  return output
}

function searchShelf(shelf, book) {
  return listTitles(shelf).indexOf(book) >= 0
}

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
