import shipDrag2 from '../../assets/shipDrag/2shipDrag.png'



function Cursor2(rotateFlag) {

  const dragCursorStyling2 = {
    transform: `translate(${rotateFlag ? '90deg' : '0'})`,
    position: 'absolute',
    height: '40px',
    with: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: '0',
    zIndex: '1000',
    cursor: 'none',
  }

  const Cursor2Img = {
    width: '100%',
    height: 'auto',
  }

  return (
    <div style={dragCursorStyling2} id='cursor2'>
      <img src={shipDrag2} style={Cursor2Img} />
    </div>
  )
}

export default Cursor2