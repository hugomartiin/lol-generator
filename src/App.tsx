import { useState } from 'react'
import { Joke } from './types/interfaces.ts'
import Header from './components/Header.tsx'
import Button from './components/Button.tsx'
import JokeDisplay from './components/JokeDisplay.tsx'
import { getRandomJoke } from './services/jokeAPI.ts'

function App() {
  const [joke, setJoke] = useState<Joke | null>(null)
  const [showPunchline, setShowPunchline] = useState<boolean>(false)
  const [showError, setShowError] = useState<boolean>(false)

  async function handleClick() {
    try {
      const newJoke = await getRandomJoke()
      setJoke(newJoke)
      setShowPunchline(false)
      setShowError(false)
    } catch {
      setShowError(true)
      setJoke(null)

    }
  }

  function handlePunchline() {
    setShowPunchline(true);
  }

  return (
    <div className='app'>
      <Header />
      <Button text={'Get Joke'} onClick={handleClick} />
      <JokeDisplay joke={joke} handlePunchline={handlePunchline} showPunchline={showPunchline} showError={showError} />
    </div>
  )
}

export default App
