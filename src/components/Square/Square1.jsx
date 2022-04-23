import React, { useEffect, useReducer, useState } from 'react'
import { ACTIONS, myDefaultState, reducer, alph, nums } from '../../state/myState';

function Square1({ element, putShips, shipSize }) {
  const [shipState, shipDispatch] = useReducer(reducer, myDefaultState)

  return (
    
     <div 
      draggable={false}
      className={`square1 ${(element.isDisabled ? "disabled" : "") ? "" : (element.isOccupied ? "isOccupied" : "")}`}
      onClick={() => {
        if (!shipState[element.owner].isSet) {
          putShips(element, shipSize)
        } else return
      }
      }
    ></div> 
  )
}

export default Square1