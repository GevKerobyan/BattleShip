import React, { useEffect } from 'react'
import rotate from '../../assets/rotate.png'
import './SetUpPanelStyling.css'



function SetUpPanel({rotateFlag, setRotateFlag, finishSetup}) {
  
  return (
    <div className='setUpPanel'>
       <div className='setUpRotate' onClick={()=>setRotateFlag(!rotateFlag)}>
          <img src={rotate} className='rotateImg' />
       </div>
       <div className='setUpfinish' onClick={finishSetup}></div>
    </div>
  )
}

export default SetUpPanel