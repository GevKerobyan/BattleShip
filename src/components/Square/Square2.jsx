import React, { useEffect, useReducer, useState } from 'react'
import { ACTIONS, myDefaultState, reducer, alph, nums } from '../../state/myState';

function Square2(element) {
  const [shipState, shipDispatch] = useReducer(reducer, myDefaultState)
  const [isClicked, setClicked] = useState(false)

  const handleClick = (el) => {
    if (!el.isOccupied) {
      // shipDispatch({type: ACTIONS.SHOOT, element:el})
      console.log(el.coordinates)


    }
  }

// useEffect(()=>{
//   console.log(element.coordinates)
// },[shipState])

  return (
    <div
      draggable={false}
      className={`square2 ${isClicked ? "clicked2" : ""}`}
      onClick = {()=>handleClick(element)}
    ></div>
  )
}

export default Square2