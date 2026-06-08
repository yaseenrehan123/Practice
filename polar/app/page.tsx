import Content from '@/features/Content'
import React from 'react'

const page = () => {

  return (
    <div className='w-screen h-screen bg-neutral-900'>
      <div className='flex items-center flex-col pt-6 gap-3'>
        <Content />
      </div>
    </div>
  )
}

export default page