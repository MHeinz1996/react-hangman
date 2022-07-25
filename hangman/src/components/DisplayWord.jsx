function DisplayWord({puzzle, guessedLetters}) {
  let displayedWord = []

  for(let i=0; i<puzzle.length; i++) {
    if(guessedLetters.includes(puzzle[i])) {
      displayedWord.push(puzzle[i])
    } else {
      displayedWord.push('_ ')
    }
  }
  
  if(!displayedWord.includes('_ ')) {
    alert("Congrats! You guessed the word correctly!")
    document.getElementById('input-field').hidden = true
    document.getElementById('submit-button').hidden = true
    document.getElementById('play-again').hidden = false
  }

  return <h2>{displayedWord}</h2>
}

export default DisplayWord