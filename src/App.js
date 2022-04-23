import { useReducer, useState } from 'react';
import { ACTIONS, reducer, myDefaultState } from './state/myState';
import './App.css';
import PlayerPage1 from './components/PlayerPage/PlayerPage1';
import PlayerPage2 from './components/PlayerPage/PlayerPage2';
import PlayerSwitch from './components/PlayerSwitch/PlayerSwitch';


function App() {
  const [shipState, dispatch] = useReducer(reducer, myDefaultState)
  const [player, setPlayer] = useState(1)
  const [modalOpen, setModalOpen] = useState(false)
  const [newCursor, setNewCursor] = useState('')
  const [shipDrag, setShipDrag] = useState(false)
  return (
    <div className="App">

      <header>
        "Barev Sujux"
      </header>
      {modalOpen ? <PlayerSwitch
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        player={player}
        setPlayer={setPlayer}
      /> :
        (player === 1) ? <PlayerPage1
          newCursor={newCursor}
          shipDrag={shipDrag}
          setNewCursor={setNewCursor}
          setShipDrag={setShipDrag}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          player={player}
          setPlayer={setPlayer}
        /> : <PlayerPage2
          newCursor={newCursor}
          shipDrag={shipDrag}
          setNewCursor={setNewCursor}
          setShipDrag={setShipDrag}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          player={player}
          setPlayer={setPlayer}
        />}
    </div>
  );
}

export default App;
