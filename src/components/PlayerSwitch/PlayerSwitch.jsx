import { switchPlayerModalPage } from "./PlayerSwitchStyle"
import modalBG1 from '../../assets/modalBG/modalBG2.gif'
import ReactDOM  from "react-dom"



function PlayerSwitch({
   modalOpen,
   setModalOpen,
   player,
   setPlayer
}) {
   const switchPageStyling = switchPlayerModalPage()

   const closeModal = () => {
      setModalOpen(false)
   }

   return ReactDOM.createPortal(
      <>
         <div className={switchPageStyling.modalWrapper} onClick={closeModal}>
            <img src={modalBG1} className={switchPageStyling.bgimg} />
            <h1 className={switchPageStyling.modalWrapperH1}>Please Switch Players</h1>
            <h3 className={switchPageStyling.modalWrapperH3}>Press anywhere to continue</h3>
         </div>
      </>,
    document.getElementById('modal')
   )
}

export default PlayerSwitch