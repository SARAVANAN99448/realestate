import React from 'react'
import Topplots2 from './Top/Topplots2'

const Park = () => {
    return (
        <div className='pt-52 md:mt-18 mt-7 relative '>
            <div className='park md:w-64 w-52 md:h-96 h-96 bg-green-500 flex items-center ml-5 md:ml-7  '>
                <p className='pl-10 pt-15 md:text-xl text-xl font-stretch-semi-expanded font-bold'> PARK</p>
            </div>
            {/* Road  */}
            <div className=" md:right-[50%] right-[50%]  md:bottom-[15.5%] bottom-[12%] absolute font-bold ">
                <p className='md:text-[16px] text-[12px]'>30 ft ROAD</p>
            </div>

            {/* Road  */}
            <div className=" right-[46%] md:top-[43%] top-[52%]  md:right-[46%] w-full rotate-270 absolute font-bold ">
                <p className='md:text-[16px] text-[12px]'>30 ft ROAD</p>
            </div>

            {/* Line */}

            <div className="absolute 
                md:w-[420px]
                w-[470px]
                h-8
                bg-black  
                border-dashed 
                md:rotate-[54deg] 
                rotate-[60deg] 
                md:right-[0.5%] 
                right-[-34.5%] 
                md:top-[45%] 
                top-[48%] 
                flex 
                items-center 
                justify-center 
                rounded-md">
                    
                    <p className='text-white font-extrabold absolute top-1 left-[-30%]' >← Hirekolale</p>
                <p className="text-white  font-extrabold text-sm md:text-base tracking-wide bg-black px-2">
                    MAIN ROAD
                </p>
                {/* <p className='text-white font-semibold absolute top-1 right-[-10%]' >chikkamagaluru →</p> */}
            </div>

            {/* <h1 className='absolute hidden md:block rotate-[58deg] md:top-[50%] top-[50%] md:left-[7%] left-[100%] font-bold  right-[10%]'>Main road</h1> */}



            <Topplots2 />
        </div>
    )
}

export default Park
