function SubmitButton({guessedLetters, setGuessedLetters}) {

  const updateGuessedLetters = () => {
    let input = document.getElementById('input-field').value.toLowerCase()
    document.getElementById('guessed-letters-section').hidden = false
    if(guessedLetters.includes(input)){
      alert("You already guessed that letter")
    } else {
      let guessed = [...guessedLetters, input]
      setGuessedLetters(guessed)
    }
  }
  return <button id="submit-button" className="submit-button" onClick={updateGuessedLetters}>Enter</button>
}

export default SubmitButton