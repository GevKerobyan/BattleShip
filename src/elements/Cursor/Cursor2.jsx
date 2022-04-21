import shipDrag2 from '../../assets/shipDrag/2shipDrag.png'

const dragCursorStyling2 = {
  height: '40px',
  with:'80px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'none',
}

const Cursor2Img = {
  width: '100%',
  height: 'auto',
}

function Cursor2() {
  return (
    <div style={dragCursorStyling2}>
      <img src={shipDrag2} />
    </div>
  )
}

export default Cursor2