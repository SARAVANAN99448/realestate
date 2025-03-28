import React from 'react'
import Topplots2 from './Top/Topplots2'

const Park = () => {
    return (
        <div className='pt-52 md:mt-18 mt-7 '>
            <div className='park md:w-64 w-52 md:h-96 h-96 bg-green-500 flex items-center ml-5 md:ml-7  '>
                <p className='pl-10 pt-15 md:text-xl text-xl font-stretch-semi-expanded font-bold'> PARK</p>
            </div>
            {/* Road  */}
            <div className=" md:right-[27%] right-[-23%]  md:bottom-[14%] bottom-[12%] absolute font-bold ">
                <p className='md:text-[16px] text-[12px]'>WIDE ROAD</p>
            </div>

            {/* Road  */}
            <div className=" right-[1%] md:top-[67%] top-[68.8%]  md:right-[37.2%] rotate-270 absolute font-bold ">
                <p className='md:text-[16px] text-[12px]'>WIDE ROAD</p>
            </div>

            {/* Line */}
            
            <div className="absolute w-96 h-0 border-t-4 border-black border-dashed md:rotate-[54deg] rotate-[60deg] md:right-[15%] right-[-71%] md:top-[53%] top-[53%] ">
                
            </div>
            <h1 className='absolute hidden md:block rotate-[58deg] md:top-[50%] top-[50%] md:left-[50%] left-[100%] font-bold  right-[10%]'>Main road</h1>
            

            
            <Topplots2 />
        </div>
    )
}

export default Park
