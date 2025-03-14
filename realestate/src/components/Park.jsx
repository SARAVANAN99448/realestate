import React from 'react'
import Topplots2 from './Top/Topplots2'

const Park = () => {
    return (
        <div className='pt-10 mt-5 '>
            <div className='park md:w-64 md:h-72 h-60 bg-green-500 flex items-center ml-10 md:ml-15  '>
                <p className='pl-10 pt-15 md:text-2xl text-xl font-stretch-semi-expanded'> PARK</p>
            </div>
            {/* Road  */}
            <div className=" md:right-[25%] right-[-38%]  md:bottom-[21%] bottom-[23%] absolute font-bold ">
                <p className='md:text-[16px] text-[12px]'>9.00 M WIDE ROAD</p>
            </div>
            {/* Road  */}
            <div className=" right-[-11%] md:top-[35%] top-[40%]  md:right-[34.5%] rotate-270 absolute font-bold ">
                <p className='md:text-[16px] text-[12px]'>9.00 M WIDE ROAD</p>
            </div>

            <Topplots2 />
        </div>
    )
}

export default Park