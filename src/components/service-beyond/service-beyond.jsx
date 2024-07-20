"use client"
import React from 'react'
import dynamic from 'next/dynamic'
import { MapPin, Phone } from "lucide-react"
import 'leaflet/dist/leaflet.css';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });

const ServiceBeyond = () => {
  return (
    <div className='bg-[#48403C]'>
                <div className='max-w-[1280px] mx-auto px-5 py-20 text-white grid grid-cols-3 place-items-center gap-10'>
                    <div className='flex flex-col items-start justify-between gap-12 pe-5'>
                        <h1 className='font-bold text-4xl'>SERVICE BEYOND EXPECTATION</h1>
                        <p className='text-[10px] pe-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatibus eum voluptas necessitatibus repellat ea, veniam totam fugiat saepe reiciendis?</p>
                        <button className='flex bg-[#f1ae6b] rounded-md hover:bg-white text-black text-[11px] px-2 py-2 transition duration-300 ease-in-out'>
                            Submit request
                        </button>
                    </div>
                    <div className='relative h-[400px] w-full'>
                        {/* <MapContainer className='rounded-lg' center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                        </MapContainer> */}
                    </div>
                    <div className='flex flex-col justify-between items-center h-60 '>
                        <div className='flex items-center gap-8 justify-between '>
                            <span className='bg-white p-3 rounded-md'>
                                <MapPin color='#000000' />
                            </span>
                            <div className='flex flex-col gap-1'>
                                <h3>LOCATION</h3>
                                <p className='text-[10px]'>Lorem ipsum dolor sit amet.<br />dolor sit amet</p>
                            </div>
                        </div>
                        <div className=' border-b-[1px] w-full border-gray-500'></div>
                        <div className='flex items-center gap-8 justify-between '>
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
  )
}

export default ServiceBeyond
