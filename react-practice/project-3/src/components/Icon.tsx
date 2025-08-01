import React from 'react'
import type { IconProps } from '../types';
const Icon = ({icon}:IconProps) => {
  return (
    <div className='bg-neutral-800 w-14 h-14 rounded-[50px] flex justify-center items-center hover:cursor-pointer 
    transition-all duration-300 hover:rounded-2xl group hover:bg-emerald-500'>
        <span className='text-emerald-500 text-3xl group-hover:text-white transition-colors duration-300'>
        {icon}
      </span>
    </div>
  )
}

export default Icon