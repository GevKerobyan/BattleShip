import { useReducer } from "react"

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
                  coordinates: {x: item, y: digit},
                  usPartOf: null,               /* ship ID */
                  isOccupied: false,            /* Is ship present */
                  isMissed: false,              /* Is hit but no ship */
                  isHit: false,                 /* Is hit with ship */
                  isDead: false,                /* Is part of dead ship */
                  isDisabled: false,            /* Is adjacent to another ship tile*/
               }
            })
         }),
      opponentBoard: [],
      ships: {
         complete: false,
         4: [],
         3: [],
         2: [],
         1: []
      },
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
                  coordinates: {x: item, y: digit},
                  usPartOf: null,               /* ship ID */
                  isOccupied: false,            /* Is ship present */
                  isMissed: false,              /* Is hit but no ship */
                  isHit: false,                 /* Is hit with ship */
                  isDead: false,                /* Is part of dead ship */
                  isDisabled: false,            /* Is adjacent to another ship tile*/
               }
            })
         }),
      opponentBoard: [/* player1.ownBoard */],
      ships: {
         complete: false,
         4: [{
            shipId: '',
            coordinates: ['qarakusikner'],
         }],
         3: [{
            shipId: '',
            coordinates: ['qarakusikner'],
         },
         {
            shipId: '',
            coordinates: ['qarakusikner'],
         }],
         2: [{
            shipId: '',
            coordinates: ['qarakusikner'],
         },
         {
            shipId: '',
            coordinates: ['qarakusikner'],
         },
         {
            shipId: '',
            coordinates: ['qarakusikner'],
         }],
         1: [{
            shipId: '',
            coordinates: ['qarakusikner'],
         },
         {
            shipId: '',
            coordinates: ['qarakusikner'],
         },
         {
            shipId: '',
            coordinates: ['qarakusikner'],
         },
         {
            shipId: '',
            coordinates: ['qarakusikner'],
         }]
      },
   }
}
myDefaultState.player1.opponentBoard = myDefaultState.player2.ownBoard;
myDefaultState.player2.opponentBoard = myDefaultState.player1.ownBoard;

const ACTIONS = {
   SETSHIP: 'SETSHIP',
   ENDSETTING: 'ENDSETTING',
   ROTATE: 'ROTATE',

   PASSTURN: 'PASSTURN',

   SHOOT: 'SHOOT',
   KILL: 'KILL',
}

function reducer(state, action) {

   switch (action.type) {

      case ACTIONS.SETSHIP: {
         if (action.newShips.player === '1')  {
            return {
               ...state, player1: {...state.player1, ships: action.newShips}
            }
         }
      }

      case ACTIONS.ENDSETTING: {
        
         // console.log(action.player, action.value, 'action')
      }

      case ACTIONS.ROTATE: {
         // console.log('ROTATE')
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