import { createUseStyles } from 'react-jss'

const sqareStyles = createUseStyles({

   square1: {
      boxSizing: 'border-box',
      width: '42px',
      height: '42px',
      border: ['1px solid black'],
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      '&:hover': {
         backgroundColor: 'rgba(0, 0, 0, 0.4)',
         boxShadow:  ['3px 2px 7px rgba(0, 0, 0, 0.6)'],
      },
      '&clicked': { backgroundColor: "rgba(0, 0, 0, 0.2)" }
   }




})

//  .square.clicked {
//    background-color: rgba(0, 0, 0, 0.2);
//  }

 
//  .square2 {
//    box-sizing: border-box;
//    width: 42px;
//    height: 42px;
//    border: 1px solid black;
//    background-color: rgba(0, 0, 0, 0.6);
//  }
 
//  .square2:hover {
//    background-color: rgba(0, 0, 0, 0.4);
//    box-shadow:  3px 2px 10px rgba(255,255, 255, 0.6);
//    }
 
//  .square:hover {
//    background-color: rgba(0, 0, 0, 0.4);
//    box-shadow:  3px 2px 7px rgba(0, 0, 0, 0.6);
//    }

// .myBoard {
//    background-color: rgba(0, 0, 0, 0.2);
//  }
 
//  .enemyBoard {
//    background-color: rgba(0, 0, 0, 0.6); 
//  }
 