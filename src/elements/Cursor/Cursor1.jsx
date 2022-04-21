import { useEffect, useRef } from 'react'
import shipDrag1 from '../../assets/shipDrag/1shipDrag.png'

const dragCursorStyling1 = {
  position: 'absolute',
  height: '40px',
  with:'40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: '0',
  zIndex: '1000',
  cursor: 'none',
}

const Cursor1Img = {
  width: '100%',
  height: 'auto',
}

function Cursor1({shipDrag}) {
//   const cursorRef = useRef(null)
//   useEffect(()=> {
// document.addEventListener('mousemove', (e)=> {
//   const {clientX, clientY} = e;
//   const mouseY = clientY - cursorRef.current.clientWidth/2;
//   const mouseX = clientX - cursorRef.current.clientWidth/2;
//   cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
// })
//   },[shipDrag]) 
  return (
    <div style={dragCursorStyling1} id='cursor1'>
      <img src={shipDrag1} />
    </div>
  )
}

export default Cursor1