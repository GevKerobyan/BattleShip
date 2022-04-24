import React, { useEffect, useReducer, useRef, useState } from 'react'
import { ACTIONS, alph, myDefaultState, nums, reducer } from '../../state/myState';
import ship4 from '../../assets/ships/4-ship.png'
import ship3 from '../../assets/ships/3-ship.png'
import ship2 from '../../assets/ships/2-ship.png'
import ship1 from '../../assets/ships/1-ship.png'
import Square1 from '../Square/Square1';
import Square2 from '../Square/Square2';
import SetUpPanel from '../SetUpPanel/SetUpPanel';
import Cursor4 from '../../elements/Cursor/Cursor4';
import Cursor3 from '../../elements/Cursor/Cursor3';
import Cursor2 from '../../elements/Cursor/Cursor2';
import Cursor1 from '../../elements/Cursor/Cursor1';

function PlayerPage2({ 
   newCursor,
   shipDrag,
   setNewCursor,
   setShipDrag,
   modalOpen,
   setModalOpen,
   player,
   setPlayer
 }) {
   const [shipState, shipDispatch] = useReducer(reducer, myDefaultState)
   const [shipSize, setShipSize] = useState('')
   const [rotateFlag, setRotateFlag] = useState(false)
   const [tempCoords, setTempCoords] = useState({
      x: '',
      y: '',
   })
   const [tempShips, setTempShips] = useState({
      player: '2',
      complete: false,
      coords: {
         '4': [
            // {
            //    shipId: null,
            //    shipCoordinates: [],
            // }
         ],
         '3': [],
         '2': [],
         '1': []
      }
   })

   let allowed = true;
   let allowedLength = true;

   // ---------- SIDE COORDINATES ---------- \\
   const topAlph = [
      alph.map((item) => {
         return < div className='top-letter' key={Math.random() * 10}> {item}</div >
      })]
   const sideNumber = [
      nums.map((item) => {
         return < div className='side-number' key={Math.random() * 10}> {item}</div >
      })]

   // ---------- CLICK ON SHIP IMAGE DIV ---------- \\

   const selectShipSize1 = (e) => {
      if (!shipState?.player2.isSet) {
         if (tempShips.coords['1'].length < 4) {
            setShipSize(1)
         } else alert("you already have enough of those ships, please erase one if needed")
      } return
   }

   const selectShipSize2 = (e) => {
      if (!shipState.player2.isSet) {
         if (tempShips.coords['2'].length < 3) {
            setShipSize(2)
         } else alert("you already have enough of those ships, please erase one if needed")
      } return
   }

   const selectShipSize3 = (e) => {
      if (!shipState.player2.isSet) {
         if (tempShips.coords['3'].length < 2) {
            setShipSize(3)
         } else alert("you already have enough of those ships, please erase one if needed")
      } return
   }

   const selectShipSize4 = (e) => {
      if (!shipState.player2.isSet) {
         if (tempShips.coords['4'].length < 1) {
            setShipSize(4)
         } else alert("you already have enough of those ships, please erase one if needed")
      } return
   }

   useEffect(() => {
      console.log('consoling: shipState in useEffect :::', shipState)
      console.log('consoling: shipsFullCount :::', shipsFullCount )
   }, [shipState])

   // ---------- SET SHIPS ---------- \\

   const putShips = (el, shipSize) => {
      console.log('consoling: el :::', el)
      setTempCoords({
         x: el.coordinates.x,
         y: el.coordinates.y,
      })
      let myShipSize = '' + shipSize

      if (shipSize) {



         let newCoords;
         let tempRotate = false;
         if (rotateFlag) {
            let newAlphCoord = el.coordinates.x
            let newTempShipCoordNumb = [];
            for (let i = el.coordinates.y; i < el.coordinates.y + shipSize; i++) {
               newTempShipCoordNumb.push(i)
               newCoords = newTempShipCoordNumb.map((item) => {
                  return 'p2' + newAlphCoord + item
               })
            }


            if ((el.coordinates.y + shipSize) > 10) {
               allowedLength = false;
               tempRotate = true
               console.log('rotate')
               if ((alph.indexOf(el.coordinates.x) + shipSize) >= 10) {
                  allowedLength = false;
                  console.log('rotate 2')
               } else {
                  allowedLength = true;
               }
            }
         }

         if (!rotateFlag || !tempRotate) {
            console.log('consoling: rotateFlag :::', rotateFlag)
            if ((alph.indexOf(el.coordinates.x) + shipSize) > 10) {
               allowedLength = false;
               tempRotate = true
               setRotateFlag(!rotateFlag)
               console.log('consoling: rotateFlag inside :::', rotateFlag )
               if ((el.coordinates.y + shipSize) > 10) {
                  allowedLength = false;
                  setRotateFlag(!rotateFlag);
               } else {
                  allowedLength = true;
               }
            } 
            if (!tempRotate) {
               let coordIndexAlph = alph.indexOf(el.coordinates.x)
               let newTempShipCoordAlph = alph.slice(coordIndexAlph, coordIndexAlph + shipSize)
               newCoords = newTempShipCoordAlph.map((item) => {
                  return 'p2' + item + el.coordinates.y
               }) 
            } else {
               let newAlphCoord = el.coordinates.x
               let newTempShipCoordNumb = [];
               for (let i = el.coordinates.y; i < el.coordinates.y + shipSize; i++) {
                  newTempShipCoordNumb.push(i)
                  newCoords = newTempShipCoordNumb.map((item) => {
                     return 'p2' + newAlphCoord + item
                  })
               }  
            }
         }
         shipState.player2.ownBoard.map((item) => {
            return item.map((el) => {
               if (newCoords.includes(el.id)) {
                  if (el.isDisabled || el.isOccupied) {
                     return allowed = false
                  }
               }
            })
         })
         console.log('consoling: allowed :::', allowed)
         console.log('consoling: allowedLength :::', allowedLength)
         if (allowed && allowedLength) {

            if (tempShips.coords[myShipSize].length < (5 - myShipSize)) {

               setTempShips({
                  ...tempShips, coords: {
                     ...tempShips.coords, [myShipSize]: [...tempShips.coords[myShipSize], {
                        shipId: 'player2-' + myShipSize + '-' + (tempShips.coords[myShipSize].length + 1),
                        shipCoordinates: newCoords
                     }]
                  },

               });
            } else {

               let tempShipArr = tempShips.coords[myShipSize]
               tempShipArr.pop()
               setTempShips({
                  ...tempShips, coords: {
                     ...tempShips.coords, [myShipSize]: [...tempShipArr, {
                        shipId: 'player2-' + myShipSize + '-' + (tempShips.coords[myShipSize].length + 1),
                        shipCoordinates: newCoords
                     }
                     ]
                  },
               })
            }
         } else alert(`can not place here`)

      } else console.log('consoling: please select size :::');

   }

   useEffect(() => {
      console.log('consoling: tempCoords :::', tempCoords)
      console.log('consoling: rotateFlag useEffect :::', rotateFlag )
      shipDispatch({
         type: ACTIONS.SETSHIP,
         newShips: tempShips,
         rotate: rotateFlag,
         shipSize: shipSize,
         elX: tempCoords.x,
         elY: tempCoords.y,
         playerNum:'2',
      })
   }, [tempShips])

   // shipDrag //

   const startDraggingShip = (event) => {
      // let cursorDiv = document.querySelector('.game-page-wrapper');
      // console.log('consoling: cursorDiv :::', cursorDiv )
      // cursorDiv.addEventListener('mousemove', e => {
      //    console.log('consoling: typeOf e.pagex :::', typeof e.pagex)
      //    document.querySelector(`#cursor${event.target.id}`).setAttribute('style', 
      //    'top: calc(' + e.pageY + 'px - 120px); left:  calc(' + (e.pageX) + 'px - 1%);  opacity: 1; position: absolute;')
      // })
      // return setShipDrag(!shipDrag)
   }


   // FINISH SETUP \\
   let shipsFullCount = 0;
   // let shipsFull = false;

   const finishSetup = () => {

      for(let keys in shipState.player2.ships.coords) {
         console.log('consoling: shipState.player1.ships.coords :::', shipState.player2.ships.coords[keys] )
  
            if((5 - shipState.player2.ships.coords[keys].length) == keys) {
               console.log('mtav');
               shipsFullCount+=1
               console.log('consoling: shipsFullCount ners :::', shipsFullCount )

            }
         // })
      }
      // if (shipsFullCount === 4) {
      //    shipsFull = true;
      // }

      if(shipsFullCount === 4) {
         shipDispatch({type: ACTIONS.ENDSETTING, player: 'player2'})
         setModalOpen(true)
         setPlayer(1);
      }
      
      
   }

   return (
      <div className={`game-page-wrapper`} style={{ cursor: shipDrag ? 'none' : null }} >
         <Cursor1 />
         <Cursor2 rotateFlag={rotateFlag} />
         <Cursor3 rotateFlag={rotateFlag} />
         <Cursor4 rotateFlag={rotateFlag} />
         <div className='game-options-wrapper'>
            <h2>Player 2</h2>
            <div className='ship-selector' id='4' onClick={(e) => selectShipSize4(e)}>
               <img src={ship4} alt="" id='4' className='ship4img' onClick={(e) => startDraggingShip(e)} />
               <span id='4'>4 x</span><span id='4'>1</span>
            </div>
            <div className='ship-selector' id='3' onClick={(e) => selectShipSize3(e)}>
               <img src={ship3} alt="" id='3' className='ship4img' onClick={(e) => startDraggingShip(e)} />
               <span>3 x</span> <span>2</span>
            </div>
            <div className='ship-selector' id='2' onClick={(e) => selectShipSize2(e)}>
               <img src={ship2} alt="" id='2' className='ship4img' onClick={(e) => startDraggingShip(e)} />
               <span>2 x</span> <span>3</span>
            </div>
            <div className='ship-selector' id='1' onClick={(e) => selectShipSize1(e)} >
               <img src={ship1} alt="" id='1' className='ship4img' onClick={(e) => startDraggingShip(e)} />
               <span>1 x</span> <span>4</span>
            </div>
         </div>

         <div className='game-arena-wrapper'>
            <div className='game-board-own board'>
               <div className='coordinate-alphabet'>{topAlph}</div>
               <div className='coordinate-digits'>{sideNumber}</div>
               {shipState?.player2.ownBoard.map((item) => {
                  return item.map((element) => {
                     return <Square1
                        key={element.id}
                        element={element}
                        putShips={putShips}
                        shipSize={shipSize}
                     > </Square1>
                  })
               })}
            </div>
            <div className='game-board-opp board'>
               <div className='coordinate-alphabet'>{topAlph}</div>
               <div className='coordinate-digits'>{sideNumber}</div>
               {shipState?.player1.ownBoard.map((item) => {
                  return item.map((element) => {
                     return <Square2
                        key={element.id}
                        element={element}
                     />
                  })
               })}
            </div>
         </div>
         {shipState?.player2.isSet ?
            <div className='game-enemy-fleet'></div> :
            <SetUpPanel rotateFlag={rotateFlag} setRotateFlag={setRotateFlag} finishSetup={finishSetup} />
         }
      </div>)
}

export default PlayerPage2