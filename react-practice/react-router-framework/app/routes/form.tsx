import React from 'react'
import type { Route } from '../+types/root'

const form = () => {
    return (
        <div className='w-screen h-screen bg-neutral-900 flex flex-col gap-3 pt-2 items-center pl-2 pr-2'>
            <form className='flex items-center flex-col gap-4' method='POST'>
                <input type="text" className='min-h-8 min-w-20 max-w-2xl w-full bg-neutral-800 border-black border-2 text-center text-white' placeholder='Name' name='name' />
                <input type="email" className='min-h-8 min-w-20 max-w-2xl w-full bg-neutral-800 border-black border-2 text-center text-white' placeholder='Email' name='email'/>
                <button className='w-40 h-16 bg-neutral-800 border-2 border-black rounded-2xl hover:cursor-pointer hover:scale-95 transition-all
        duration-150' type='submit'>Submit</button>
            </form>

        </div>
    )
}

export async function action({request}:Route.ActionArgs){
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    console.log("Name:",name,"Email:",email);
}

export default form