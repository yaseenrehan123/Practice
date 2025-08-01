import React, { useState } from 'react'
import Counter from './components/Counter'

const App = () => {
  return (
    <div className='m-0 p-0 box-border'>
      <div className='w-screen h-screen bg-neutral-900 text-white text-center'>
        <div className='flex items-center flex-col pt-4'>
          <Counter/>
        </div>
      </div>
    </div>

  )
}

export default App