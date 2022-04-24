import shipDrag4 from '../../assets/shipDrag/4shipDrag.png'


function Cursor4({rotateFlag, children}) {
  const dragCursorStyling4 = {
    transform: `translate(${rotateFlag ? '90deg' : '0'})`,
    position: 'absolute',
    height: '40px',
    with: '160px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: '0',
    zIndex: '1000',
    cursor: 'none',
  }

  const Cursor4Img = {
    width: '100%',
    height: 'auto',
  }

  return (
    <div style={dragCursorStyling4} id='cursor4'>
      <img src={shipDrag4} style={Cursor4Img} />
    </div>
  )
}

export default Cursor4