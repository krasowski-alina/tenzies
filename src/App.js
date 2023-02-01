
import { useState } from 'react';
import './App.css';
import Die from './Die';

function App() {

  const allNewDice = () => {
    const randomNumbers = [];
    for(let i =0; i < 10; i++){
      randomNumbers.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false
        })
    }
    return randomNumbers
  }

  const [ dice, setDice] = useState(allNewDice())

  const rollDice = () => {
    setDice(allNewDice())
  }
  return (
    <main>
      <div className="dice-container">
        {dice.map((die, index) => (
          <Die value={die.value} key={index}/>
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
