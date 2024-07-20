import React from 'react'
import { Calendar, Facebook, Twitter, Phone, Mail, MapPin, Clock } from 'lucide-react'
const Footer = () => {
    return (
        <div className='bg-[#1F1F1F] py-20' >
            <div className='max-w-[1440px] mx-auto flex items-start justify-between gap-10' >
                <div className='text-white flex flex-col gap-8'  >
                    <h1>BERBER SHOP</h1>
                    <p className='max-w-60 text-[14px]' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio quam perspiciatis ipsa.</p>
                    <div className='flex items-center gap-3' >
                        <button className='text-black bg-white rounded-full  hover:bg-[#c4a26d] p-2 '>
                            <Facebook />
                        </button>
                        <button className='text-black bg-white rounded-full  hover:bg-[#c4a26d] p-2 '>
                            <Twitter />
                        </button>
                        <button className='text-black bg-white rounded-full  hover:bg-[#c4a26d] p-2 '>
                            <Phone />
                        </button>
                        <button className='text-black bg-white rounded-full  hover:bg-[#c4a26d] p-2 '>
                            <Mail />
                        </button>
                    </div>
                </div>
                <div>
                    <ul className='flex flex-col gap-5 text-white text-[14px]' >
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                    </ul>
                </div>
                <div className='text-white flex flex-col items-start gap-10' >
                    <h1>Lorem, ipsum.</h1>
                    <div className='flex items-center gap-3  '>
                        <img className='w-14 h-14' src='https://picsum.photos/200/300' />
                        <div  >
                            <p className=' text-[14px]'>Lorem ipsum dolor sit <br /> amet dolor sit amet.</p>
                            <div className='flex items-center gap-3 text-[10px] text-[#c4a26d] mt-2' >
                                <Calendar size={15} />
                                <h1>23 Sep 2024</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-3  '>
                        <img className='w-14 h-14' src='https://picsum.photos/200/300' />
                        <div>
                            <p className=' text-[14px]' >Lorem ipsum dolor <br /> sit amet dolor sit amet.</p>
                            <div className='flex items-center gap-3 text-[10px] text-[#c4a26d] mt-2' >
                                <Calendar size={15} />
                                <h1>23 Sep 2024</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-white text-[14px]' >
                    <h1>Contact Us</h1>
                    <ul className='flex flex-col gap-5 mt-5'>
                        <li className='flex items-start gap-2' >
                            <MapPin color='#c4a26d' />
                            <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing  elit. Rerum, magni.</p>
                        </li>
                        <li className='flex items-start gap-2' >
                            <Phone color='#c4a26d' />
                            <p>+123 936 789</p>
                        </li>
                        <li className='flex items-start gap-2' >
                            <Clock color='#c4a26d' />
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                        </li>
                        <li className='flex items-start gap-2' >
                            <Mail color='#c4a26d' />
                            <p>Lorem@dolor.gmail.com</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
