import { useEffect, useRef } from 'react'
import shipDrag1 from '../../assets/shipDrag/1shipDrag.png'



// 'top: calc(' + e.pageY + 'px - 120px);
// left:  calc(' + (e.pageX) + 'px - 15px); {' + (e.pageX > 795 ) ? 'opacity: 0' : 'opacity: 0}; position: absolute;'

function Cursor1({ shipDrag, children }) {

  const dragCursorStyling1 = {
    position: 'absolute',
    left: '',
    height: '40px',
    with: '40px',
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


  if (dragCursorStyling1.left > '795' && shipDrag) {
    dragCursorStyling1.opacity = '0';
    Cursor1Img.opacity = '0'
  }

  return (
    <div style={dragCursorStyling1} id='cursor1'>
      <img src={shipDrag1} style={Cursor1Img} />
    </div>
  )
}

export default Cursor1