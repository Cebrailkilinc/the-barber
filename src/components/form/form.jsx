import React from 'react'

const Form = () => {
    return (
        <div className=' border border-gray-200 px-8  py-10 rounded-lg w-fit mt-24 bg-black bg-opacity-40 ' >
            <h1 className='text-white font-semibold text-xl ' >Make an appoitment</h1>
            <div className='flex flex-col gap-3 w-56 mt-5' >
                <input placeholder='Full name'
                    className='bg-transparent outline-none r
                                ounded-sm border-[1px] border-gray-300
                                focus:bg-white  text-[11px] px-2 py-[8px]
                                placeholder:text-[11px] placeholder:text-white text-white focus:text-black'
                />
                <input type='email' placeholder='Email'
                    className='bg-transparent outline-none r
                                ounded-sm border-[1px] border-gray-300
                                focus:bg-white text-[11px] px-2 py-[8px]
                                placeholder:text-[11px] placeholder:text-white text-white focus:text-black'
                />
                <input type='password' placeholder='Password'
                    className='bg-transparent outline-none r
                                ounded-sm border-[1px] border-gray-300
                                focus:bg-white text-[11px] px-2 py-[8px]
                                placeholder:text-[11px] placeholder:text-white text-white focus:text-black'
                />
                <div className='flex items-center justify-between gap-1' >
                    <button className='flex bg-transparent outline-none rounded-md
                                 border-[1px] border-gray-300
                                text-[10px] px-1 py-2 text-white
                         
                               ' >
                        2004-05-21 10.00PM
                    </button>
                    <button className='flex bg-[#f1ae6b] rounded-md
                hover:bg-white 
                text-[11px] px-2 py-2 
                transition duration-300 ease-in-out'>
                        Submit request
                    </button>

                </div>

            </div>


        </div>
    )
}

export default Form
