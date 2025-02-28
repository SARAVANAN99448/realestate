import React from 'react'
import Topplots2 from './Topplots2'

const Park = () => {
    return (
        <div className='pt-10 mt-5 '>
            <div className='park w-64 h-72 bg-green-500 flex items-center ml-15  '>
                <p className='pl-10 pt-15 text-2xl'> PARK</p>
            </div>
            {/* Road  */}
            <div className=" right-[23%] bottom-[45%] absolute font-bold ">
                <p>9.00 M WIDE ROAD</p>
            </div>
            {/* Road  */}
            <div className=" right-[33%] top-[27%] rotate-270 absolute font-bold ">
                <p>9.00 M WIDE ROAD</p>
            </div>

            <Topplots2 />
        </div>
    )
}

export default Park