import React, { useState } from 'react'

const Option = () => {
    const [on, setOn] = useState<boolean>(false);
    return (
        <div className={`flex items-center justify-center w-8 h-8  rounded-2xl
        hover:cursor-pointer ${on ? 'bg-blue-500 outline-[3.5px] outline-blue-800' : 'bg-white outline-1 outline-black'}
        transition-all duration-150`}
            onClick={() => setOn(prev => !prev)}>
            {on && (
                <div className='bg-white w-4 h-4 rounded-2xl'></div>
            )}
        </div>
    )
}

export default Option