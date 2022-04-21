import shipDrag4 from '../../assets/shipDrag/4shipDrag.png'

const dragCursorStyling4 = {
  height: '40px',
  with:'160px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // display: 'none',
}

const Cursor4Img = {
  width: '100%',
  height: 'auto',
}

function Cursor4() {
  return (
    <div style={dragCursorStyling4}>
      <img src={shipDrag4} />
    </div>
  )
}

export default Cursor4