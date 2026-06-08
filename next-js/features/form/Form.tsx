import React from 'react'
import { action } from '@/utils/actions'
const Form = () => {

    return (
        <form action={action} className='flex items-center flex-col gap-4'>
            <input
                name='text'
                type="text"
                className='bg-white text-black'
            />
            <button type='submit'>
                Button
            </button>
        </form>
    )
}

export default Form