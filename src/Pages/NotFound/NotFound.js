import React from 'react';
import { XIcon } from '@heroicons/react/solid'

const NotFound = () => {
    return (
        <div className="flex items-center justify-center ">
        <div>
        <h1 className='text-6xl text-amber-500 text-center font-semibold flex justify-center'>Page Not Found 
          <span ><XIcon style={{width:'70px'}} className='w-8 text-amber-500  '></XIcon></span> </h1>
         <h1 className="text-6xl font-bold text-center"> <span className="text-red-700">E</span><span className="text-orange-400">rr</span ><span  className="text-red-700">or</span></h1>
         <div className='flex justify-center'>
         <img  src="https://imgs.search.brave.com/jLLT4J9siXzYHiV8NzhDx8cxA49HVMxu2-2d5r7pxQQ/rs:fit:330:240:1/g:ce/aHR0cDovL2ltZzA4/LmRldmlhbnRhcnQu/bmV0Lzk2NDAvaS8y/MDEyLzIwMS8xLzAv/ZXJyb3JfNDA0X19m/aWxlX25vdF9mb3Vu/ZF9fYnlfbW9ydGlt/ZXJtY21pcmVzdGlu/a3MtZDU4MGUxay5w/bmc" alt="" />
         </div>
        </div>
     </div>
    );
};

export default NotFound;