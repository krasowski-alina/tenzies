import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import './App.css';
import Confetti from "react-confetti"
import image from './dice.png'

import Die from './Die';


function App() {
  const [ dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  
  useEffect(()=> {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allValue = dice.every(die => die.value === firstValue)
    if (allHeld && allValue){
      setTenzies(true)
    }
  }, [dice])
  function generateNewDice(){
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(3)
    }
}
  function allNewDice() {
    const randomNumbers = [];
      for(let i =0; i < 10; i++){
        randomNumbers.push(generateNewDice())
      }
    return randomNumbers
  }

  const rollDice = () => {
    if(!tenzies){
      setDice(prevDice => prevDice.map(die => {
        return die.isHeld?
          die :
          generateNewDice()
      }))
    } else {
      setTenzies(false)
      setDice(allNewDice())
    }
  
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
      {tenzies && <Confetti/>}
      <h1 className="title">Tenzies <img src={image} className="diceImage" alt="dice"/></h1>
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
      <button 
        onClick={rollDice}
        className="roll-dice"
        >
        {tenzies? "New game" : "Roll"}
      </button>
    </main>
  );
}

export default App;

