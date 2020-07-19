import React from 'react';
import Display from './components/Display';
import {JediContext} from '../src/components/context/context'
import Counter from './components/counter';

function App() {

  const [show, setShow] = React.useState(false)
  const [inputValue, setInputValue] = React.useState('')

  let inputRef = React.useRef()

  const handleClick = () => {
    setShow(!show)
  } 

  const handleClickSubmit = () => {
    setInputValue(inputRef.current.value)
    console.log(inputRef.current.value);
    console.log(inputValue);
  }
  

  return (
    <div className="App">
      <JediContext.Provider value = {show}>
        <Display/>
      </JediContext.Provider>
      <button onClick={handleClick}>
        +
      </button>
      <hr style={{marginBottom: 20 + 'px'}}/>
      <input type={'text'} ref={inputRef}/>
      <button onClick={handleClickSubmit}>submit</button>
      <hr style={{marginBottom: 20 + 'px'}}/>
      <Counter/>

    </div>
  );
}

export default App;