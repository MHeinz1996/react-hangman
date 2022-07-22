import { useState } from 'react'
import './App.css'
import WordList from './data/words'
import Input from './components/Input'
import SubmitButton from './components/SubmitButton'
import DisplayWord from './components/DisplayWord'
import GuessedLetters from './components/GuessedLetters'

function App() {
  const [puzzle, setPuzzle] = useState(WordList[(Math.floor(Math.random() * WordList.length))])
  const [guessedLetters, setGuessedLetters] = useState([])

  return (
    <div className="App">
      <h1>Hangman</h1>
      <hr />
      <DisplayWord puzzle={puzzle} guessedLetters={guessedLetters}/>
      <Input />
      <SubmitButton guessedLetters={guessedLetters} setGuessedLetters={setGuessedLetters}/>
      <hr />
      <GuessedLetters puzzle={puzzle} guessedLetters={guessedLetters} />
    </div>
  )
}

export default App
