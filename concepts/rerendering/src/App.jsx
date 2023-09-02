import { useState } from 'react'
import { Display } from './components/Display'
import { Buttons } from './components/Buttons'
const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>

      <Buttons
        handleClick={increaseByOne}
        text='plus'
      />
      <Buttons
        handleClick={setToZero}
        text='zero'
      />     
      <Buttons
        handleClick={decreaseByOne}
        text='minus'
      />           
    </div>
  )
}

export default App