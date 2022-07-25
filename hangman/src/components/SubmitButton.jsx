function SubmitButton({guessedLetters, setGuessedLetters}) {

  const updateGuessedLetters = () => {
    let input = document.getElementById('input-field').value.toLowerCase()
    if(guessedLetters.includes(input)){
      alert("You already guessed that letter")
    } else if(input === '' || input === ' ') {
      alert("You must enter a letter")
    } else {
      let guessed = [...guessedLetters, input]
      setGuessedLetters(guessed)
      document.getElementById('guessed-letters-section').hidden = false
    }
    document.getElementById('input-field').value = ''
  }
  return <button id="submit-button" className="submit-button" onClick={updateGuessedLetters}>Enter</button>
}

export default SubmitButton