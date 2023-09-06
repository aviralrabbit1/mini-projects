import React from 'react'
import Title from './components/Title'
import Wrapper from './components/Wrapper'
import Screen from './components/Screen'
import Buttonbox from './Buttonbox'
import Buttons from './components/Buttons'

const Calculator = () => {
  return (
    <div>
      <Wrapper>
        <Title value="Aviral's Calculator" />
        <Screen/>
        <Buttonbox/>
        <Buttons/>
      </Wrapper>
    </div>
  )
}

export default Calculator
