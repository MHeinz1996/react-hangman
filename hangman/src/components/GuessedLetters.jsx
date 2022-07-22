import {useState, useEffect} from 'react'

function GuessedLetters({puzzle, guessedLetters}) {
  let lives = 6
  
  if(guessedLetters.length !== 0) {
    for(let i=0; i<guessedLetters.length; i++) {
      if(!puzzle.includes(guessedLetters[i])) {
        lives--
      }
    }
  }
  
  if(lives === 0) {
    alert('You lose!')
    document.getElementById('input-field').hidden = true
    document.getElementById('submit-button').hidden = true
    document.getElementById('play-again').hidden = false
  }

  return(
    <div>
      <h3>Lives: {lives}</h3>
      <h4 id="guessed-letters-section" hidden>Guessed Letters:</h4>
      <p>{guessedLetters}</p>
    </div>
  )
}

export default GuessedLetters