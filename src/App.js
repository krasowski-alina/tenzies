
import { nanoid } from 'nanoid';
import { useState } from 'react';

import './App.css';
import Die from './Die';


function App() {
  const [ dice, setDice] = useState(allNewDice())

  function allNewDice() {
    const randomNumbers = [];
      for(let i =0; i < 10; i++){
        randomNumbers.push({
          value: Math.ceil(Math.random() * 6),
          isHeld: false,
          id: nanoid(3)
        })
      }
    return randomNumbers
  }
  const rollDice = () => {
    setDice(allNewDice())
  }
  const holdDice = (id) => {
    setDice(prevDice => prevDice.map(die => {
      return die.id === id ?
            {...die, isHeld: !die.isHeld} :
            die
    }))
  }
  return (
    <main>
      <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <div className="dice-container">
            {dice.map((die) => (
                <Die 
                value = { die.value }
                isHeld = { die.isHeld }
                holdDice = { ()=> holdDice(die.id) }
                key  = { die.id }/>
            ))}
        </div>
      <button onClick={rollDice}
        className="roll-dice">
        Roll
      </button>
    </main>
  );
}

export default App;
