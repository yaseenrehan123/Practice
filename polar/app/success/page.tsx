import React from 'react'
import SuccessPageContent from './SuccessPageContent'

const page = () => {
    return (
        <div className='w-screen h-screen bg-neutral-900'>
            <div className='flex items-center flex-col pt-6 gap-3'>
                <SuccessPageContent />
            </div>
        </div>
    )
}

export default page