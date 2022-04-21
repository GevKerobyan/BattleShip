import { useReducer, useState } from 'react';
import { ACTIONS, reducer, myDefaultState } from './state/myState';
import './App.css';
import PlayerPage1 from './components/PlayerPage/PlayerPage1';
// import Cursor4 from './elements/Cursor/Cursor4';
// import Cursor3 from './elements/Cursor/Cursor3';
// import Cursor2 from './elements/Cursor/Cursor2';
// import Cursor1 from './elements/Cursor/Cursor1';

function App() {
  const [shipState, dispatch] = useReducer(reducer, myDefaultState)

  const [newCursor, setNewCursor] = useState('')
  const [shipDrag, setShipDrag] = useState(false)
  return (
    <div className="App">
      
      <header>
        "Barev Sujux"
      </header>
      <PlayerPage1
        newCursor={newCursor}
        shipDrag={shipDrag}
        setNewCursor={setNewCursor}
        setShipDrag={setShipDrag}
      />
    </div>
  );
}

export default App;
