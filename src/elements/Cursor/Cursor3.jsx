import shipDrag3 from '../../assets/shipDrag/3shipDrag.png'



function Cursor3(rotateFlag) {
  const dragCursorStyling3 = {
    transform: `translate(${rotateFlag ? '90deg' : '0'})`,
    position: 'absolute',
    height: '40px',
    with:'120px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: '0',
    zIndex: '1000',
    cursor: 'none',
  }
  
  const Cursor3Img = {
    width: '100%',
    height: 'auto',
  }
  return (
    <div style={dragCursorStyling3} id='cursor3'>
      <img src={shipDrag3} style={Cursor3Img} />
    </div>
  )
}

export default Cursor3