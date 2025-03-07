import React from 'react'
import Topplots2 from './Top/Topplots2'

const Park = () => {
    return (
        <div className='pt-10 mt-5 '>
            <div className='park md:w-64 md:h-72 h-60 bg-green-500 flex items-center ml-10 md:ml-15  '>
                <p className='pl-10 pt-15 md:text-2xl text-xl'> PARK</p>
            </div>
            {/* Road  */}
            <div className=" md:right-[23%] right-[-38%]  md:bottom-[26%] bottom-[42%] absolute font-bold ">
                <p className='md:text-[16px] text-[12px]'>9.00 M WIDE ROAD</p>
            </div>
            {/* Road  */}
            <div className=" right-[-11%] md:top-[68%] top-[35%]  md:right-[33.5%] rotate-270 absolute font-bold ">
                <p className='md:text-[16px] text-[12px]'>9.00 M WIDE ROAD</p>
            </div>

            <Topplots2 />
        </div>
    )
}

export default Park