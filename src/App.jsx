import { useState } from 'react'
import Columns from './components/Columns'
import GameScreen from './pages/GameScreen'

function App() {


  const columnsData = [
    [ //1
      { suit: 'clubs', value: 1, isFaceUp: true },
      { suit: 'clubs', value: 2, isFaceUp: true },
    ],
    [ //2
      { suit: 'diamonds', value: 3, isFaceUp: true },
      { suit: 'diamonds', value: 4, isFaceUp: true },
    ],
    [ //3
      { suit: 'hearts', value: 5, isFaceUp: true },
    ],
    [ //4
      { suit: 'spades', value: 6, isFaceUp: false },
    ],
  ];

  return (
    <>
      <div>


        <GameScreen></GameScreen>
      </div>

    </>
  )
}

export default App
