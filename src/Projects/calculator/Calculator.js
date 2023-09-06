import React from 'react'
import Title from './components/Title'
import Wrapper from './components/Wrapper'
import Screen from './components/Screen'
import Buttonbox from './components/ButtonBox'
import Buttons from './components/Buttons'

const Calculator = () => {
  return (
    <div>
      <Wrapper>
        <Title value="Aviral's Calculator" />
        <Screen value="0" />
        <Buttonbox>
          <Buttons/>
        </Buttonbox>
      </Wrapper>
    </div>
  )
}

export default Calculator
