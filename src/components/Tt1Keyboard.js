import React from 'react'
import PushButton from './PushButton'
import {useState} from 'react'
import Input from './Input';
import * as math from 'mathjs'

function Tt1Keyboard(props) {
  const [result,setResult]= useState("");
  const [number,setNumber] =useState("");

  const addToNumber = (val)=>{
    setNumber((text) => [...text, val + " "])
    setResult("");
  }
  const calculateResult= ()=>{
    setNumber("");
    const input = number.join("")
    setResult(math.evaluate(input))
  }

  return (
    <div className='tt1Keyboard'>
       <Input text={number} result={result} data-testid="add-input" />
       <div></div>
       <button className='switch-btn' onClick={ () => props.handleClick('tt1Keyboard')}>tt1</button> /  <button className='switch-btn' onClick={ () => props.handleClick('tt2Keyboard')}>tt2</button>
       <div className='calc-wrapper'>
       <div className='row'>
          <PushButton symbol="7"  handleClick={addToNumber}/>
          <PushButton symbol="8" handleClick={addToNumber}/>
          <PushButton symbol="9" handleClick={addToNumber}/>
          <PushButton symbol="<-"  handleClick={addToNumber}/>
        </div>
        <div className='row'>
          <PushButton symbol="4" handleClick={addToNumber}/>
          <PushButton symbol="5" handleClick={addToNumber}/>
          <PushButton symbol="6" handleClick={addToNumber}/>
          <PushButton symbol="+" handleClick={addToNumber}/>
        </div>
        <div className='row'>
          <PushButton symbol="1" handleClick={addToNumber}/>
          <PushButton symbol="2" handleClick={addToNumber}/>
          <PushButton symbol="3" handleClick={addToNumber}/>
          <PushButton symbol="-" handleClick={addToNumber}/>
        </div>
        <div className='row'>
          <PushButton symbol="0" handleClick={addToNumber}/>
          <PushButton symbol="*" handleClick={addToNumber}/>
        </div>
        <div className='row'>
          <PushButton symbol="="  handleClick={calculateResult}/>
          <PushButton symbol="/"  handleClick={addToNumber}/>
        </div>
    </div>
</div>
  )
}

export default Tt1Keyboard
