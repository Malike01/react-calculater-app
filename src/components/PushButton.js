import React from 'react'

function PushButton({symbol,handleClick}) {
  return (
    <div 
    onClick={()=> handleClick(symbol)}
    className='button-wrapper' >{symbol}</div>

  )
}
export default PushButton
