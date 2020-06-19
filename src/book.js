function createTitle(title) {
  return 'The ' + title;
}

function buildMainCharacter(charName, charAge, charPronouns) {
  return {
    name: charName,
    age: charAge,
    pronouns: charPronouns
  }
}

function saveReview(newReview, current = []) {
  return current.indexOf(newReview) < 0 ? current.push(newReview) : current
}

function calculatePageCount(title) {
  return 20 * title.length
}

function writeBook(title, char, genre) {
  return {
    title: title,
    mainCharacter: char,
    pageCount: calculatePageCount(title),
    genre: genre
  }
}

function editBook(book) {
  book.pageCount *= (3/4)
}
module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
