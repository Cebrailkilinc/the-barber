import React from 'react'
import { Scissors } from "lucide-react"

const AboutUs = () => {
    return (
        <div className='bg-[#1F1F1F] py-20'>
            <div className='grid grid-cols-2 gap-4 max-w-[1280px] mx-auto text-white'>
                <div className='col-span-1  p-4 '>
                    <h1 className='text-5xl' >About Us</h1>
                    <p className='text-[10px] mt-10 leading-6 pe-10' >
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Esse veniam quibusdam quod pariatur error, blanditiis neque aliquam eos vel itaque,
                        ullam earum voluptatibus delectus aut laudantium sit
                        at ex quis magni consectetur ratione excepturi. Pariatur,
                        nemo et consequuntur sequi laborum cum quas excepturi eaque nam
                        fugit repellat suscipit, placeat modi!
                    </p>
                    <button className=' mt-10 flex bg-[#f1ae6b] rounded-md hover:bg-white text-black text-[11px] px-2 py-2 transition duration-300 ease-in-out'>
                        Learn More
                    </button>
                </div>
                <div className='col-span-1 p-4 text-white relative' >
                    <div className='absolute bottom-0 left-20 flex flex-col gap-5 items-center'>
                        <div className='w-52 flex items-center justify-center  gap-3 bg-[#CEA561]  px-3 py-2 rounded-full z-20' >
                            <Scissors />
                            <div>
                                <h6 className='text-[9px] ' >100+ Styles</h6>
                                <h6 className='text-[10px] font-semibold ' >Experienced Bebarman</h6>
                            </div>
                        </div>
                        <img className='w-72 h-44 object-cover rounded-md z-20' src='/sac1.jpg' />
                    </div>
                    <div className='absolute right-10 top-0 flex flex-col gap-5 items-center'>
                        <img className='w-72 h-44 object-cover rounded-md z-10' src='/sac1.jpg ' />
                        <div className='w-52 flex items-center justify-center gap-3 bg-[#CEA561]  px-3 py-2 rounded-full z-30' >
                            <Scissors />
                            <div>
                                <h6 className='text-[9px] ' >100+ Styles</h6>
                                <h6 className='text-[10px] font-semibold ' >Experienced </h6>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutUs
