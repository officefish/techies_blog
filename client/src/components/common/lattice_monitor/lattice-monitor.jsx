import React from 'react'
import particleText from './particle-text'
import animation from '../../../assets/animation'

import {useRef, useEffect, useState, useContext} from 'react'
import {CategoryContext} from '../../../context'

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
      animation.initGlobals()
      const renderOptions = animation.createRenderingContext(element, window.innerWidth, 400)
      particleText.setBuffer(renderOptions.buffer)
      particleText.setCtx(renderOptions.ctx)
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
      <div className="lattice_container h-[400px]">
            <div ref={ref} id="box" onClick={boxOnCLick}>
            <div className="lattice"></div>
      </div>
    </div>
  )
}

export default LatticeMonitor