import { useEffect, useReducer } from "react"

const alph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const myDefaultState = {

   player1: {
      isSet: false,
      winner: false,
      ownBoard:
         nums.map((digit) => {
            return alph.map((item) => {
               return {
                  owner: 'player1',
                  id: 'p1' + item + digit,
                  coordinates: { x: item, y: digit },
                  isPartOf: null,               /* ship ID */
                  isOccupied: false,            /* Is ship present */
                  isMissed: false,              /* Is hit but no ship */
                  isHit: false,                 /* Is hit with ship */
                  isDead: false,                /* Is part of dead ship */
                  isDisabled: false,            /* Is adjacent to another ship tile*/
               }
            })
         }),
      ships: {},
      opponentBoard: [],
   },
   player2: {
      isSet: false,
      winner: false,
      ownBoard:
         nums.map((digit) => {
            return alph.map((item) => {
               return {
                  owner: 'player2',
                  id: 'p2' + item + digit,
                  coordinates: { x: item, y: digit },
                  isPartOf: null,               /* ship ID */
                  isOccupied: false,            /* Is ship present */
                  isMissed: false,              /* Is hit but no ship */
                  isHit: false,                 /* Is hit with ship */
                  isDead: false,                /* Is part of dead ship */
                  isDisabled: false,            /* Is adjacent to another ship tile*/
               }
            })
         }),
      ships: {},
      opponentBoard: [/* player1.ownBoard */],
   }
}
myDefaultState.player1.opponentBoard = myDefaultState.player2.ownBoard;
myDefaultState.player2.opponentBoard = myDefaultState.player1.ownBoard;

const ACTIONS = {
   SETSHIP: 'SETSHIP',
   ENDSETTING: 'ENDSETTING',

   PASSTURN: 'PASSTURN',

   SHOOT: 'SHOOT',
   KILL: 'KILL',
}

function reducer(state, action) {

   switch (action.type) {

      case ACTIONS.SETSHIP: {

         let shipCoordIdsPreMap = []
         let shipCordIdsResult = []

         let disableColumnIndex = alph.indexOf(action.elX);
         let disableColumn;
         let disabledArr = [];

         // get ID's of ships in Array
         for (const prop in action.newShips.coords) {
            shipCoordIdsPreMap.push(action.newShips?.coords[prop].map((item) => {
               return item.shipCoordinates
            }))
         }
         shipCoordIdsPreMap.forEach((el) => {
            if (el.length !== 0) {
               el.forEach((item) => {
                  shipCordIdsResult = [...item]
               })
            }
         })

         if (action.rotate) {
            disabledArr = ['p1' + action.elX + (action.elY - 1), 'p1' + action.elX + (action.elY + (action.shipSize + 1)),];
            disableColumn = [alph[disableColumnIndex - 1], alph[disableColumnIndex + 1]];
            disableColumn.map((item) => {
               for (let i = action.elY - 1; i <= action.elY + action.shipSize; i++) {
                  disabledArr.push('p1' + item + i)
               }
            })
            console.log('consoling: disabledArr :::', disabledArr)

         } else if (!action.rotate) {
            disabledArr = [`p1`+(alph[(disableColumnIndex-1)]+action.elY), `p1`+(alph[disableColumnIndex+(action.shipSize)])+action.elY]
            disableColumn = [action?.elY-1, action?.elY+1]
            disableColumn.map((item)=>{
               alph.slice((disableColumnIndex-1),disableColumnIndex+(action.shipSize+1)).map((element) => {
                  disabledArr.push(`p1`+element+item)
               })
            })
            console.log('consoling: disabledArr :::', disabledArr )
         }

         state.player1.ownBoard.map((item)=>{
            return item.map ((elem)=> {
               if(disabledArr.includes(elem.id)){
                  console.log('consoling: noric barev:::' )
                  elem.isDisabled=true;
               }
            }) 
         })

         if (action.newShips.player === '1') {
            let myBoard;
            myBoard = state.player1.ownBoard.map((item) => {
               return item.map((element) => {
                  if (shipCordIdsResult.includes(element.id)) {
                     return {
                        ...element, isOccupied: true,
                     }
                  } return element
               })
            })
            return {
               ...state,
               player1: { ...state.player1, ships: action.newShips, ownBoard: myBoard },
               player2: { ...state.player2, opponentBoard: myBoard }
            }
         }

      }

      case ACTIONS.ENDSETTING: {
         if(action.player === 'player1'){
            return {
               ...state,
               player1: { ...state.player1, isSet: true},
            }
         }

         if(action.player === 'player2'){
            return {
               ...state,
               player2: { ...state.player2, isSet: true},
            }
         }
      }

      case ACTIONS.PASSTURN: {
         // console.log('PASSTURN')
      }

      case ACTIONS.SHOOT: {

         // if(action.element.owner ==='p2') {

         //    return {
         //       ...state, player1: {...state.player1, ownBoard: {...state.player1.ownBoard, 
         //       ownBoard: state.player1.ownBoard.map} }

         //    }
         // }  

      }

      case ACTIONS.KILL: {
         console.log('KILL')
      }
   }
}




export { ACTIONS, reducer, myDefaultState, alph, nums };