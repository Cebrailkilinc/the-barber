"use client"
import React from 'react'
import dynamic from 'next/dynamic'
import Navbar from '../navbar/Navbar';
import Form from '../form/form';
import { MapPin, Phone } from "lucide-react"
import 'leaflet/dist/leaflet.css';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });

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
            <div className='bg-[#48403C]'>
                <div className='max-w-[1280px] mx-auto px-5 py-20 text-white grid grid-cols-3 gap-10'>
                    <div className='flex flex-col items-start justify-between pe-5'>
                        <h1 className='font-bold text-4xl'>SERVICE BEYOND EXPECTATION</h1>
                        <p className='text-[10px] pe-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatibus eum voluptas necessitatibus repellat ea, veniam totam fugiat saepe reiciendis?</p>
                        <button className='flex bg-[#f1ae6b] rounded-md hover:bg-white text-black text-[11px] px-2 py-2 transition duration-300 ease-in-out'>
                            Submit request
                        </button>
                    </div>
                    <div className='relative h-[400px] w-full'>
                        <MapContainer className='rounded-lg' center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                        </MapContainer>
                    </div>
                    <div className='flex flex-col justify-between items-center h-60 px-7'>
                        <div className='flex items-center gap-8 justify-between w-2/3'>
                            <span className='bg-white p-3 rounded-md'>
                                <MapPin color='#000000' />
                            </span>
                            <div className='flex flex-col gap-1'>
                                <h3>LOCATION</h3>
                                <p className='text-[10px]'>Lorem ipsum dolor sit amet.<br />dolor sit amet</p>
                            </div>
                        </div>
                        <div className='w-2/3 border-b-[1px] border-gray-500'></div>
                        <div className='flex items-center gap-8 justify-between w-2/3'>
                            <span className='bg-white p-3 rounded-md'>
                                <Phone color='#000000' />
                            </span>
                            <div className='flex flex-col gap-1'>
                                <h3>+123 4565</h3>
                                <p className='text-[10px]'>Lorem ipsum dolor sit amet.<br />dolor sit amet</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPageViewer;
