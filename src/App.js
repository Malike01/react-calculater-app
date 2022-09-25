import './App.css';
import { useState} from 'react'
import Tt1Keyboard from './components/Tt1Keyboard';
import Tt2Keyboard from './components/Tt2Keyboard';


function App() {
  const [keyboard, setKeyboard]= useState("tt1Keyboard")
 
  const handleClick = (keyboardState) => {
    setKeyboard(keyboardState)
  }
 
  return (
    <div className="App">
      <div className='card-calculate'>
        <div className='App-name'>Hesap Makinesi</div>
      {(() => {
        switch (keyboard) {
           case 'tt1Keyboard':
             return <Tt1Keyboard handleClick={handleClick}/>
           case 'tt2Keyboard':
             return <Tt2Keyboard handleClick={handleClick} />
           default:
             return null
            }
      })()}
    </div>
    </div>
  )
}

export default App;
