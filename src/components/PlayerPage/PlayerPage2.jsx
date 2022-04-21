import React, { useReducer } from 'react'
import { ACTIONS, alph, myDefaultState, nums, reducer } from '../../state/myState';
import Square from '../Square/Square';

function PlayerPage2() {
   const [boardState, boardDispatch] = useReducer(reducer, myDefaultState);

   const topAlph = alph.map((item) => {
      return <div className='top-letter'>{item}</div>
   })
   const sideNum = nums.map((item) => {
      return <div className='side-number'>{item}</div>
   })

   

   return (
      <div className='game-page-wrapper'>
         <div className='game-options-wrapper'>

         </div>
         <div className='game-arena-wrapper'>
            <div className='game-board-own board'>
               <div className='coordinate-alphabet'>{topAlph}</div>
               <div className='coordinate-digits'>{sideNum}</div>
               {boardState.player2.ownBoard.map((item) => {
                   console.log('consoling: element :::', item)
                  return item.map((element) => {
                    
                     return <Square key={element.id} ></Square>
                  })
               })}
            </div>
            <div className='game-board-opp board'>
               <div className='coordinate-alphabet'>{topAlph}</div>
               <div className='coordinate-digits'>{sideNum}</div>
               {boardState.player2.opponentBoard.map((item) => {
                  return item.map((element) => {
                     return <Square key={element.id}></Square>
                  })
               })}
            </div>
         </div>
         
         <div className='game-enemy-fleet'></div>
      </div>)
}

export default PlayerPage2