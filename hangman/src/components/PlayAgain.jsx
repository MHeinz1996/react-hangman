function PlayAgain() {
  const reload = () => {
    window.location.reload(false)
  }
  return <button id='play-again' onClick={reload} hidden>Play again?</button>
}

export default PlayAgain