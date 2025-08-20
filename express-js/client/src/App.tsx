import React from 'react'
import Form from './components/Form'

const App = () => {
  return (
    <div className='m-0 p-0 box-border'>
      <div className='w-screen h-screen bg-neutral-900 text-center'>
        <div className='flex items-center flex-col gap-2 pt-10'>
          <Form/>
        </div>
      </div>
    </div>
  )
}

export default App