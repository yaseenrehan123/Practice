import React from 'react'
import type { Route } from './+types/formPage';

const formPage = () => {
    return (
        <div className='bg-gray-950 w-screen h-screen overflow-x-hidden flex items-center flex-col gap-1 p-2'>
            <form method='POST' action={'./'} className='flex items-center flex-col gap-3 text-white text-center'>
                <input type="text" name='input' placeholder='Name'
                    className='h-8 w-50 bg-neutral-900 border-4 border-black text-center' />
                <input type="email" name='email' placeholder='Email'
                    className='h-8 w-50 bg-neutral-900 border-4 border-black text-center' />
                <textarea placeholder='Message' name='message'
                 className='min-h-60 w-60 border-2 border-black bg-neutral-900 rounded-2xl resize-none text-center'></textarea>
                 <button 
                 className='bg-neutral-900 border-2 border-black hover:cursor-pointer hover:scale-95 transition-all duration-150
                 w-52 h-20 rounded-2xl'
                 type='submit'>
                    Submit
                 </button>
            </form>
        </div>
    )
}

export async function action({request}:Route.ActionArgs){
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
}

export default formPage