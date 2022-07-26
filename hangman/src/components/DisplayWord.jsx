import Confetti from './Confetti'

function DisplayWord({puzzle, guessedLetters}) {
  let displayedWord = []
  let celebrate = false

  for(let i=0; i<puzzle.length; i++) {
    if(guessedLetters.includes(puzzle[i])) {
      displayedWord.push(puzzle[i])
    } else {
      displayedWord.push('_ ')
    }
  }
  
  if(!displayedWord.includes('_ ') && displayedWord.length > 0) {
    celebrate = true
    displayedWord = "Congrats! You guessed the word correctly!"
    document.getElementById('input-field').hidden = true
    document.getElementById('submit-button').hidden = true
    document.getElementById('play-again').hidden = false
  }

  return (
    <div>
      <h2>{displayedWord}</h2>
      {celebrate && <Confetti />}    
    </div>
  )
}

export default DisplayWord