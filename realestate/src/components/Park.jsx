import React from 'react'
import Topplots2 from './Top/Topplots2'

const Park = () => {
    return (
        <div className='pt-48 mt-10 '>
            <div className='park md:w-64 md:h-96 h-84 bg-green-500 flex items-center ml-5 md:ml-7  '>
                <p className='pl-10 pt-15 md:text-xl text-xl font-stretch-semi-expanded font-bold'> PARK</p>
            </div>
            {/* Road  */}
            <div className=" md:right-[25%] right-[-30%]  md:bottom-[15.5%] bottom-[13.5%] absolute font-bold ">
                <p className='md:text-[16px] text-[12px]'>9.00 M WIDE ROAD</p>
            </div>
            {/* Road  */}
            <div className=" right-[-2%] md:top-[62%] top-[64%]  md:right-[35%] rotate-270 absolute font-bold ">
                <p className='md:text-[16px] text-[12px]'>9.00 M WIDE ROAD</p>
            </div>

            <Topplots2 />
        </div>
    )
}

export default Park