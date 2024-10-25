import React, { useState } from 'react'
import { GiDiceSixFacesFive, GiDiceSixFacesFour, GiDiceSixFacesOne, GiDiceSixFacesSix, GiDiceSixFacesThree, GiDiceSixFacesTwo } from "react-icons/gi";
import '/src/components/dice.css';

const sides = [
    <GiDiceSixFacesOne />,
    <GiDiceSixFacesTwo />,
    <GiDiceSixFacesThree />,
    <GiDiceSixFacesFour />,
    <GiDiceSixFacesFive />,
    <GiDiceSixFacesSix />
];

const DiceRoll = () => {
    const[die1, setDie1] = useState(sides[0])
    const[die2, setDie2] = useState(sides[4])

    const rollTheDice = () =>{
        setDie1(sides[Math.floor(Math.random() * sides.length)])
        setDie2(sides[Math.floor(Math.random() * sides.length)])
    }
  return (
    <div className="dicecontainer">
        <div className="head"><h1>DICE</h1></div>

        <div className="diese">
        <div className="dice">{die1}</div>
        <div className="dice">{die2}</div>
        </div>

    <button onClick={rollTheDice} className='btn'>Roll Dice</button>
    </div>
  )
}

export default DiceRoll