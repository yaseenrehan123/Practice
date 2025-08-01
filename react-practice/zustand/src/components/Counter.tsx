import React from 'react'
import { useCounterStore } from '../counterStore'

const Counter = () => {
  const count = useCounterStore((state)=>state.count);
  const incrementCount = useCounterStore((state)=>state.incrementCount);
  const decrementCount = useCounterStore((state)=>state.decrementCount);
  return (
    <div className='flex items-center justify-center gap-5'>
      <button className='w-20 h-20 bg-cyan-600 rounded-2xl outline-1 outline-black flex items-center justify-center
        hover:cursor-pointer hover:scale-98 hover:bg-cyan-500 active:scale-97 transition-all duration-150'
        onClick={decrementCount}>
        <span className='text-5xl'>-</span>
      </button>
      <h1 className='text-5xl'>
        {count}
      </h1>
      <button className='w-20 h-20 bg-cyan-600 rounded-2xl outline-1 outline-black flex items-center justify-center
        hover:cursor-pointer hover:scale-98 hover:bg-cyan-500 active:scale-96 transition-all duration-150'
        onClick={incrementCount}>
        <span className='text-5xl'>+</span>
      </button>
    </div>
  )
}

export default Counter