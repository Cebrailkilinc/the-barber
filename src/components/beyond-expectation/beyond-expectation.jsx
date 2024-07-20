import React from 'react'
import {Scissors,ArrowRight} from "lucide-react"


const BeyondExpectation = () => {
    return (
        <div className='bg-[#292929] py-10' >
            <div className='max-w-[1280px] mx-auto' >
                <div className='text-white flex flex-col gap-8 items-center ' >
                    <h3 className='text-[20px]' >Service</h3>
                    <h1 className='text-[30px]' >Beyond <span className='text-[#bba88a]' >Expectation</span></h1>
                    <p className='text-[15px] text-center' >
                        Lorem ipsum dolor, sit amet
                        onsectetur adipisicing elit. Sit magnam voluptatibus
                        quas et, possimus at nulla.<br /> Incidunt voluptate natus nam.
                    </p>
                </div>
                <div className='flex items-center justify-between mt-10' >
                    <div className='flex flex-col gap-10 items-center justify-center p-10 bg-[#2c2c2c] rounded-lg'  >
                        <Scissors className='text-white' size={40} />
                        <h1 className='text-2xl text-white' >HAIRCUT STYLE</h1>
                        <p className='text-[#767676] text-center text-[15px] ' > Lorem ipsum dolor sit, amet consectetur <br/> adipisicing elit. Ad, ducimus.</p>
                        <button className='border-none flex items-center gap-1 text-[#c5a36e] hover:bg-[#c5a36e] hover:text-white px-3 py-2 rounded-full transition-colors duration-300'><span>Read More</span> <ArrowRight size={15} /></button >
                    </div>
                    <div className='flex flex-col gap-10 items-center justify-center p-10 bg-[#c5a36e] rounded-lg'  >
                        <Scissors size={40} />
                        <h1 className='text-2xl text-[#282626]' >SHAVING</h1>
                        <p className='text-[#767676] text-center text-[15px] ' > Lorem ipsum dolor sit, amet consectetur <br/> adipisicing elit. Ad, ducimus.</p>
                        <button className='border-none flex items-center gap-1 text-[#282626] hover:bg-[#2C2C2C] hover:text-white px-3 py-2 rounded-full transition-colors duration-300'><span>Read More</span> <ArrowRight size={15} /></button >
                    </div>
                    <div className='flex flex-col gap-10 items-center justify-center p-10 bg-[#2c2c2c] rounded-lg'  >
                        <Scissors className='text-white' size={40} />
                        <h1 className='text-2xl text-white' >TRIMMING</h1>
                        <p className='text-[#767676] text-center text-[15px] ' > Lorem ipsum dolor sit, amet consectetur <br/> adipisicing elit. Ad, ducimus.</p>
                        <button className='border-none flex items-center gap-1 text-[#c5a36e] hover:bg-[#c5a36e] hover:text-white px-3 py-2 rounded-full transition-colors duration-300'><span>Read More</span> <ArrowRight size={15} /></button >
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeyondExpectation
