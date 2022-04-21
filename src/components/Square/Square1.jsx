import React, { useEffect, useReducer, useState } from 'react'
import { ACTIONS, myDefaultState, reducer, alph, nums } from '../../state/myState';

function Square1({ element, putShips, shipSize }) {
  const [shipState, shipDispatch] = useReducer(reducer, myDefaultState)

  // shipState.player1.map()

  // function setClassname() {
  //   return 
  // }

  return (
    <div
      draggable={false}
      className={`square1 ${(element.isDisabled ? "disabled" : "") ? "" :( element.partOf ? "partOf" : "")}`}
      onClick={() => {
        if (!shipState[element.owner].isSet) {
          console.log('element', element)
          putShips(element, shipSize)
        } else return
      }
      }
    ></div>
  )
}

export default Square1