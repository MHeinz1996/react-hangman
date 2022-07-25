import './App.css'
import { useState, useEffect } from 'react'
import Input from './components/Input'
import SubmitButton from './components/SubmitButton'
import DisplayWord from './components/DisplayWord'
import GuessedLetters from './components/GuessedLetters'
import PlayAgain from './components/PlayAgain'
import axios from 'axios'

function App() {
  const [puzzle, setPuzzle] = useState('')
  const [guessedLetters, setGuessedLetters] = useState([])

  const getPuzzle = async () => {
    try {
      const response = await axios.get('https://random-word-api.herokuapp.com/word')
      setPuzzle(response.data[0])
    } catch(error) {
        console.log(error)
    }
  }

  // setPuzzle on mount
  useEffect(() => {getPuzzle()}, [])

  return (
    <div className="App">
      <h1>Hangman</h1>
      <hr />
      <DisplayWord puzzle={puzzle} guessedLetters={guessedLetters}/>
      <Input />
      <SubmitButton guessedLetters={guessedLetters} setGuessedLetters={setGuessedLetters}/>
      <PlayAgain />
      <hr />
      <GuessedLetters puzzle={puzzle} guessedLetters={guessedLetters} />
    </div>
  )
}

export default App
