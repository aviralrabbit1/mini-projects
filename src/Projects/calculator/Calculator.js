import React from 'react'
import Title from './components/Title'
import Wrapper from './components/Wrapper'
import Screen from './components/Screen'
import Buttonbox from './components/ButtonBox'
import Button from './components/Button'
import './Calculator.css'

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const Calculator = () => {
  return (
    <div className='main'>
      <Wrapper>
        <Title value="Aviral's Calculator" />
        <Screen value="0" />
        <Buttonbox>
        {
          btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={() => {
                  console.log(`${btn} clicked!`);
                }}
              />
            );
          })
        }
        </Buttonbox>
      </Wrapper>
    </div>
  )
}

export default Calculator
