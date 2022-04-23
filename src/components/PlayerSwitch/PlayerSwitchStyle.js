import {createUseStyles} from 'react-jss'

const switchPlayerModalPage = createUseStyles({

   modalWrapper: {
      display: 'flex',
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      position: 'absolute',
      top: '0',
      left: '0',
      bottom: '0',
      right: '0',
      background: 'rgba(0,0,0,0.9)',
      color: 'silver',
      padding: '100px',
   },

   modalWrapperH1: {
      // margin: '50px',
      zIndex:'2000',
   },
   modalWrapperH3: {
      zIndex:'2000',
   },

   bgimg: {
      position: 'absolute',
      top: '50px',
      left: '100px',
      bottom: '100px',
      right: '100px',
      width: 'calc(100vw - 200px)',
      height: 'calc(100vh - 100px)',
      zIndex:'1500',
      borderRadius: '25px'
   }
})

export {switchPlayerModalPage};