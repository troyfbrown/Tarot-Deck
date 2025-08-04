import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CardDisplay from './CardDisplay'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Welcome To The Tarot Deck</h1>
        <h2>Major Arcana</h2>
        <div class="card-container">
          <CardDisplay id="0" title="The Fool"/>
          <CardDisplay id="1" title="The Magician"/>
          <CardDisplay id="2" title="High Priestess"/>
          <CardDisplay id="3" title="The Empress"/>
          <CardDisplay id="4" title="The Emperor"/>
          <CardDisplay id="5" title="High Priest"/>
          <CardDisplay id="6" title="The Lovers"/>
          <CardDisplay id="7" title="The Chariot"/>
          <CardDisplay id="8" title="Strength"/>
          <CardDisplay id="9" title="The Hermit"/>
          <CardDisplay id="10" title="The Wheel of Fortune"/>
          <CardDisplay id="11" title="Justice"/>
          <CardDisplay id="12" title="The Hanged Man"/>
          <CardDisplay id="13" title="Death"/>
          <CardDisplay id="14" title="Temperance"/>
          <CardDisplay id="15" title="Chains"/>
          <CardDisplay id="16" title="The Tower"/>
          <CardDisplay id="17" title="The Star"/>
          <CardDisplay id="18" title="The Moon"/>
          <CardDisplay id="19" title="The Sun"/>
          <CardDisplay id="20" title="Judgement"/>
          <CardDisplay id="21" title="The World"/>
        </div>
        
      </div>
    </>
  )
}

export default App
