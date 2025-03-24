import React from 'react'
import Topplots2 from './Top/Topplots2'

const Park = () => {
    return (
        <div className='pt-52 mt-14 '>
            <div className='park md:w-64 w-52 md:h-96 h-88 bg-green-500 flex items-center ml-5 md:ml-7  '>
                <p className='pl-10 pt-15 md:text-xl text-xl font-stretch-semi-expanded font-bold'> PARK</p>
            </div>
            {/* Road  */}
            <div className=" md:right-[27%] right-[-23%]  md:bottom-[15%] bottom-[12%] absolute font-bold ">
                <p className='md:text-[16px] text-[12px]'>WIDE ROAD</p>
            </div>

            {/* Road  */}
            <div className=" right-[1%] md:top-[67%] top-[68.8%]  md:right-[36.5%] rotate-270 absolute font-bold ">
                <p className='md:text-[16px] text-[12px]'>WIDE ROAD</p>
            </div>

            <Topplots2 />
        </div>
    )
}

export default Park