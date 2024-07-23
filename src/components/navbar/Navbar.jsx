"use client"
import React, { useState } from 'react'
import { Menu,SquareX  } from 'lucide-react';

const Navbar = () => {

    const [active, setActive] = useState('Home');
    const [isOpenSideMenu, setIsOpenSideMenu] = useState(true);

    const menuItems = ['Home', 'Services', 'About Us', 'News', 'Shop'];
    return (
        <div className='flex items-center justify-between max-w-[1280px] mx-auto py-5 ' >
            <div className='text-white text-2xl block lg:hidden ' >
                <Menu onClick={() => setIsOpenSideMenu(!isOpenSideMenu)} />
            </div>
            <div className='text-white text-2xl text-center hidden sm:flex' >MODERN MANE</div>
            <div  >
                <ul className='lg:flex items-center gap-14 border border-gray-300 p-[2px] rounded-md pe-5 text-sm hidden '>
                    {menuItems.map((item) => (
                        <li
                            key={item}
                            className={`rounded-md px-3 py-[5px] transition duration-300 ease-in-out cursor-pointer ${active === item ? 'bg-white text-black' : 'text-white hover:text-gray-300 '
                                }`}
                            onClick={() => setActive(item)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>

            </div>
            <div>
                <button className='bg-white text-sm rounded-lg px-5 py-2 hover:bg-black hover:text-white transition duration-300 ease-in-out'>
                    Contact Us
                </button>

            </div>
            <div className={!isOpenSideMenu ? 'block ld:hidden fixed top-0 left-0 w-[60%] h-full bg-white duration-1000  ' : "fixed h-full w-[60%] top-0 left-[-100%] duration-1000  "}>
                <span className='absolute top-3 right-5' >
                    <SquareX onClick={()=>setIsOpenSideMenu(true)} />
                </span>
                <ul className='mt-10 uppercase text-center font-bold cursor-pointer  '>
                    <li className='p-4 hover:text-white  hover:bg-[#c5a26e] border-b '>Home</li>
                    <li className='p-4 hover:text-white  hover:bg-[#c5a26e] border-b '>Services</li>
                    <li className='p-4 hover:text-white  hover:bg-[#c5a26e] border-b '>About Us</li>
                    <li className='p-4 hover:text-white  hover:bg-[#c5a26e] border-b '>Shop</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
