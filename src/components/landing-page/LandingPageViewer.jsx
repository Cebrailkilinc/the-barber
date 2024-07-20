"use client"
import React from 'react'
import dynamic from 'next/dynamic'
import Navbar from '../navbar/Navbar';
import Form from '../form/form';


import ServiceBeyond from '../service-beyond/service-beyond';
import AboutUs from '../about-us/about-us';
import BeyondExpectation from '../beyond-expectation/beyond-expectation';
import Feedback from '../feedback/feedback';
import PriceMenu from '../price-menu/price-menu';
import Footer from '../footer/Footer';



const LandingPageViewer = () => {
    const position = [51.505, -0.09];
    const mapToken = "pk.eyJ1IjoiYWJkdWxsYWh1Z3VyIiwiYSI6ImNqcHRnaDgxbDA1dWo0NXF3NDIzenFtcGIifQ.64t6cmzJ79MTvJzQNjShMA";

    return (
        <div>
            <div className="bg-my_bg_image h-full bg-cover bg-center pb-28">
                <div className='max-w-[1280px] mx-auto px-5'>
                    <Navbar />
                    <div className='flex items-center justify-center sm:justify-start'>
                        <Form />
                    </div>
                    <div className='flex items-end justify-between gap-20 mt-20'>
                        <p className='w-1/4 text-[10px] text-white'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatem omnis minima enim facilis illo veniam labore accusamus optio, consequuntur quidem, soluta maiores, mollitia nostrum provident dicta vero
                        </p>
                        <h1 className='text-6xl font-bold text-end text-white'>
                            WHERE TRADITION <br /> MEETS MODERN STYLE
                        </h1>
                    </div>
                </div>
            </div>
            <ServiceBeyond/>
            <AboutUs/>
            <BeyondExpectation/>
            <Feedback/>
            <PriceMenu/>
            <Footer/>
        </div>
    );
}

export default LandingPageViewer;
