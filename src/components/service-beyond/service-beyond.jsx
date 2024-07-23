"use client"
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { MapPin, Phone } from 'lucide-react';
import 'leaflet/dist/leaflet.css';


// Dynamically import MapContainer and TileLayer without SSR
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });

const ServiceBeyond = () => {


    return (
        <div className='bg-[#48403C]'>
            <div className='max-w-[1280px] mx-auto py-10 px-10 text-white grid-cols-1 grid md:grid-cols-3 place-items-center gap-2 md:gap-10'>
                <div className='flex flex-col items-start justify-between gap-5 md:gap-12 pe-5'>
                    <h1 className='font-bold text-4xl'>SERVICE BEYOND EXPECTATION</h1>
                    <p className='text-[10px] pe-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatibus eum voluptas necessitatibus repellat ea, veniam totam fugiat saepe reiciendis?</p>
                    <button className='flex bg-[#f1ae6b] rounded-md hover:bg-white text-black text-[11px] px-2 py-2 transition duration-300 ease-in-out'>
                        Submit request
                    </button>
                </div>
                <div id='map' className='relative h-[300px] md:h-[400px] w-full mt-5'>
               
                </div>
                <div>
                    <div className='flex items-center gap-5 mb-5' >
                        <div className='p-4 rounded-md bg-white w-fit' >
                            <MapPin size={35} className='text-black' />
                        </div>
                        <div className='h-auto flex flex-col justify-between gap-2' >
                            <h1 className='text-xl' >LOCATION</h1>
                            <p className='text-sm' >Lorem ipsum dolor sit amet ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className='border-b ' ></div>
                    <div className='flex items-center gap-5 mt-5' >
                        <div className='p-4 rounded-md bg-white w-fit' >
                            <MapPin size={35} className='text-black' />
                        </div>
                        <div className='h-auto flex flex-col justify-between gap-2' >
                            <h1 className='text-xl' >LOCATION</h1>
                            <p className='text-sm' >Lorem ipsum dolor sit amet ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceBeyond;
