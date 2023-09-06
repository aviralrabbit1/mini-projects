import React from 'react'
import Title from './components/Title'
import Wrapper from './components/Wrapper'
import Screen from './components/Screen'
import Buttonbox from './components/ButtonBox'
import Button from './components/Button'
import './Calculator.css'

const Calculator = () => {
  return (
    <div className='main'>
      <Wrapper>
        <Title value="Aviral's Calculator" />
        <Screen value="0" />
        <Buttonbox>
          <Button
            className=""
            value="0"
            onClick={() => {
              console.log("Button clicked!");
            }}
          />
        </Buttonbox>
      </Wrapper>
    </div>
  )
}

export default Calculator
