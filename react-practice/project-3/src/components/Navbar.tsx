import React from 'react'
import { FaFire } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaBolt } from "react-icons/fa6";
import { FaPoo } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import Icon from './Icon'
import IconDivider from './IconDivider';

const Navbar = () => {
  return (
    <div className='flex items-center flex-col absolute top-0 left-0 h-full bg-neutral-900 min-w-20 gap-4
    pt-6'>
        <Icon icon ={<FaFire/>}/>
        <IconDivider/>
        <Icon icon ={<FaPlus/>}/>
        <Icon icon ={<FaBolt/>}/>
        <Icon icon ={<FaPoo/>}/>
        <IconDivider/>
        <Icon icon ={<FiSettings/>}/>
    </div>
  )
}

export default Navbar