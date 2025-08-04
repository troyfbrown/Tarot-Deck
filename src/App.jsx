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
          <CardDisplay id="0" title="The Fool" subtitle="(Amphisbaena)"/>
          <CardDisplay id="1" title="The Magician" subtitle="(Winged Cat)"/>
          <CardDisplay id="2" title="High Priestess" subtitle="(Ua Zit)"/>
          <CardDisplay id="3" title="The Empress" subtitle="(Morrigan)"/>
          <CardDisplay id="4" title="The Emperor" subtitle="(Pegasus)"/>
          <CardDisplay id="5" title="High Priest" subtitle="(Ruhk)"/>
          <CardDisplay id="6" title="The Lovers" subtitle="(Faun)"/>
          <CardDisplay id="7" title="The Chariot" subtitle="(Centaurs)"/>
          <CardDisplay id="8" title="Strength" subtitle="(Oriental Dragon)"/>
          <CardDisplay id="9" title="The Hermit" subtitle="(Old Lady of the Elder)"/>
          <CardDisplay id="10" title="The Wheel of Fortune" subtitle="(Sphinx)"/>
          <CardDisplay id="11" title="Justice" subtitle="(Lion-Dogs)"/>
          <CardDisplay id="12" title="The Hanged Man" subtitle="(Medusa)"/>
          <CardDisplay id="13" title="Death" subtitle="(Anansi)"/>
          <CardDisplay id="14" title="Temperance" subtitle="(Lady of the Lake)"/>
          <CardDisplay id="15" title="Chains" subtitle="(Fenris Wolf)"/>
          <CardDisplay id="16" title="The Tower" subtitle="(Kraken)"/>
          <CardDisplay id="17" title="The Star" subtitle="(Firebird)"/>
          <CardDisplay id="18" title="The Moon" subtitle="(Unicorn)"/>
          <CardDisplay id="19" title="The Sun" subtitle="(Winged Lion)"/>
          <CardDisplay id="20" title="Judgement" subtitle="(Dragons)"/>
          <CardDisplay id="21" title="The World" subtitle="(Rainbow Serpent)"/>
        </div>
        
      </div>
    </>
  )
}

export default App
