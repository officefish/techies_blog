import React from 'react'
import particleText from './particle-text'
import utilities from './utilities'

import {useRef, useEffect, useState, useContext} from 'react'
import {CategoryContext} from '../../../context'

const CANVAS_HEIGHT = 350

const LatticeMonitor = () => {

  const ref = useRef(null);

  const [currentCategory, setCurrentCategory] = useContext(CategoryContext)
  let initialized = false

  const boxOnCLick = () => {
      particleText.setup()
  }

  useEffect(() => {
    const element = ref.current;
  
    if (!initialized) {
      utilities.initGlobals()
      const isFullWidth = true
      const renderOptions = utilities.createRenderingContext(
          element, window.innerWidth, CANVAS_HEIGHT, isFullWidth)
      particleText.setBuffer(renderOptions.buffer)
      particleText.setCtx(renderOptions.ctx)

      particleText.setFullWidth(isFullWidth)
      particleText.setHeight(CANVAS_HEIGHT)
      
      particleText.start()
      initialized = true
    } 
    return _ => {
      //particleText.setup()
    }
  }, [])

  useEffect(() =>{
     particleText.setMessage(currentCategory)
   },[currentCategory]);

  return (
      <div className={`lattice_container`}>
            <div className='w-full overflow-hidden' ref={ref} id="box" onClick={boxOnCLick}>
            <div className="lattice"></div>
      </div>
    </div>
  )
}

export default LatticeMonitor