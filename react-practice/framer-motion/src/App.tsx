import React, { useState } from 'react'
import { easeInOut, motion, scale } from 'motion/react'
import { animate, AnimatePresence, useAnimationControls, useScroll } from 'framer-motion';
import Option from './components/Option';
const App = () => {
  const controls = useAnimationControls();
  const animateBox =()=>{
    controls.set("initial");
    controls.start("animate");
  }
  return (
    <div className='w-screen h-screen bg-neutral-900 text-white overflow-x-hidden'>
      <div className='flex items-center flex-col p-2 border-2 border-red-800 gap-6'>
          <button className='w-28 h-10 bg-blue-500 rounded-2xl hover:cursor-pointer hover:scale-98'
          onClick={animateBox}>
            Flip
          </button>
          <motion.div className='w-40 h-40 bg-amber-500'
          variants={{
            initial:{
              rotate:'0deg',
              scale:1,
              opacity:1
            },
            animate:{
              rotate:'360deg',
              scale:0,
              opacity:0,
              transition:{
                duration:1,
                type:'spring',
                bounce:0.2
              }
            }
          }}
          initial={"initial"}
          animate={controls}></motion.div>
      </div>
    </div>
  )
}

export default App