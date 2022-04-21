import React, { useEffect, useReducer, useState } from 'react'
import { ACTIONS, alph, myDefaultState, nums, reducer } from '../../state/myState';
import ship4 from '../../assets/ships/4-ship.png'
import ship3 from '../../assets/ships/3-ship.png'
import ship2 from '../../assets/ships/2-ship.png'
import ship1 from '../../assets/ships/1-ship.png'
import Square1 from '../Square/Square1';
import Square2 from '../Square/Square2';
import SetUpPanel from '../SetUpPanel/SetUpPanel';
// import Cursor4 from '../../elements/Cursor/Cursor4';
// import Cursor3 from '../../elements/Cursor/Cursor3';
// import Cursor2 from '../../elements/Cursor/Cursor2';
// import Cursor1 from '../../elements/Cursor/Cursor1';

function PlayerPage1({ newCursor, shipDrag, setNewCursor, setShipDrag }) {
   const [shipState, shipDispatch] = useReducer(reducer, myDefaultState)
   const [shipSize, setShipSize] = useState('')
   const [rotateFlag, setRotateFlag] = useState(false)
   const [tempShips, setTempShips] = useState({
      player: '1',
      complete: false,
      '4': [
         // {
         //    shipId: null,
         //    shipCoordinates: [],
         // }
      ],
      '3': [],
      '2': [],
      '1': []
   })


   useEffect(()=> {

   })

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
      if (!shipState?.player1.isSet) {
         if (tempShips['1'].length < 4) {
            setShipSize(1)
         } else alert("you already have enough of those ships, please erase one if needed")
      } return
   }

   const selectShipSize2 = (e) => {
      if (!shipState.player1.isSet) {
         if (tempShips['2'].length < 3) {
            setShipSize(2)
         } else alert("you already have enough of those ships, please erase one if needed")
      } return
   }

   const selectShipSize3 = (e) => {
      if (!shipState.player1.isSet) {
         if (tempShips['3'].length < 2) {
            setShipSize(3)
         } else alert("you already have enough of those ships, please erase one if needed")
      } return
   }

   const selectShipSize4 = (e) => {
      if (!shipState.player1.isSet) {
         if (tempShips['4'].length < 1) {
            setShipSize(4)
         } else alert("you already have enough of those ships, please erase one if needed")
      } return
   }

   useEffect(() => {
      console.log('consoling: shipState in useEffect :::', shipState)
   }, [shipState])

   useEffect(() => {
      console.log('consoling: tempShips in useEffect :::', tempShips)
   }, [tempShips])

   // ---------- SET SHIPS ---------- \\

   const putShips = (el, shipSize) => {
      console.log(el)
      let myShipSize = '' + shipSize

      if (shipSize) {
         let newCoords;
         if (rotateFlag) {
            let newAlphCoord = el.coordinates.x
            let newTempShipCoordNumb = [];
            for (let i = el.coordinates.y; i < el.coordinates.y + shipSize; i++) {
               newTempShipCoordNumb.push(i)
               newCoords = newTempShipCoordNumb.map((item) => {
                  return 'p1' + newAlphCoord + item
               })
            }
         } else if (!rotateFlag) {

            let coordIndexAlph = alph.indexOf(el.coordinates.x)
            let newTempShipCoordAlph = alph.slice(coordIndexAlph, coordIndexAlph + shipSize)
            newCoords = newCoords = newTempShipCoordAlph.map((item) => {
               return 'p1' + item + el.coordinates.y
            })
         }
         if (tempShips[myShipSize].length < (5-myShipSize)) {
            setTempShips({
               ...tempShips, [myShipSize]: [...tempShips[myShipSize], {
                  shipId: 'player1-' + myShipSize + '-' + (tempShips[myShipSize].length + 1),
                  shipCoordinates: newCoords
               }],

            });
         } else {
            let tempShipArr = tempShips[myShipSize]
            tempShipArr.pop()
            setTempShips({
               ...tempShips, [myShipSize]: [...tempShipArr, {
                  shipId: 'player1-' + myShipSize + '-' + (tempShips[myShipSize].length + 1),
                  shipCoordinates: newCoords
               }
               ],
            })
         }
      } else console.log('consoling: please select size :::');
      
   }

   useEffect(()=> {
      shipDispatch({type: ACTIONS.SETSHIP, newShips: tempShips})
   },[tempShips])

   // shipDrag //

   const startDraggingShip = () => {
      // document.addEventListener('mousemove', e => {
      //    document.querySelector('#cursor1').setAttribute('style', 'top: ' + e.pageY + 'px; left: ' + e.pageX + 'px; opacity: 1;')
      // })
      return setShipDrag(!shipDrag)
   }


   // FINISH SETUP \\

   const finishSetup = () => {
      shipDispatch({ type: ACTIONS.ENDSETTING, value: tempShips, player: 1 })
   }

   return (
      <div className={`game-page-wrapper ${shipDrag ? 'drag' + shipSize : ''}`}>
         {/* <Cursor1 shipDrag={shipDrag}/>
         <Cursor2 />
         <Cursor3 />
         <Cursor4 /> */}
         <div className='game-options-wrapper'>
            <h2>Select Ship</h2>
            <div className='ship-selector' id='4' onClick={(e) => selectShipSize4(e)}>
               <img src={ship4} alt="" id='4' className='ship4img' onClick={startDraggingShip} />
               {/* onClick={() => console.log('img id 4')} */}
               <span id='4'>4 x</span><span id='4'>1</span>
            </div>
            <div className='ship-selector' id='3' onClick={(e) => selectShipSize3(e)}>
               <img src={ship3} alt="" id='3' className='ship4img' onClick={startDraggingShip} />
               <span>3 x</span> <span>2</span>
            </div>
            <div className='ship-selector' id='2' onClick={(e) => selectShipSize2(e)}>
               <img src={ship2} alt="" id='2' className='ship4img' onClick={startDraggingShip} />
               <span>2 x</span> <span>3</span>
            </div>
            <div className='ship-selector' id='1' onClick={(e) => selectShipSize1(e)} >
               <img src={ship1} alt="" id='1' className='ship4img' onClick={startDraggingShip} />
               <span>1 x</span> <span>4</span>
            </div>
         </div>
         <div className='game-arena-wrapper'>
            <div className='game-board-own board'>
               <div className='coordinate-alphabet'>{topAlph}</div>
               <div className='coordinate-digits'>{sideNumber}</div>
               {shipState?.player1.ownBoard.map((item) => {
                  return item.map((element) => {
                     return <Square1
                        key={element.id}
                        element={element}
                        putShips={putShips}
                        shipSize={shipSize}
                     ></Square1>
                  })
               })}
            </div>
            <div className='game-board-opp board'>
               <div className='coordinate-alphabet'>{topAlph}</div>
               <div className='coordinate-digits'>{sideNumber}</div>
               {shipState?.player1.opponentBoard.map((item) => {
                  return item.map((element) => {
                     return <Square2
                        key={element.id}
                        element={element}
                     ></Square2>
                  })
               })}
            </div>
         </div>
         {shipState?.player1.isSet ?
            <div className='game-enemy-fleet'></div> :
            <SetUpPanel rotateFlag={rotateFlag} setRotateFlag={setRotateFlag} finishSetup={finishSetup} />
         }

      </div>)
}

export default PlayerPage1