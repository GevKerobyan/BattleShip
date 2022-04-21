import shipDrag3 from '../../assets/shipDrag/3shipDrag.png'

const dragCursorStyling3 = {
  height: '40px',
  with:'120px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'none',
}

const Cursor4Img = {
  width: '100%',
  height: 'auto',
}

function Cursor3() {
  return (
    <div style={dragCursorStyling3}>
      <img src={shipDrag3} />
    </div>
  )
}

export default Cursor3