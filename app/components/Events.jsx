import Image from 'next/image'
import React, { useState } from 'react'

const Events = ({ event }) => {
    // const [imgUrl, setImgUrl] = useState('');
    // const url = ;
    // console.log(event.imgUrl.split(`/`)[5]);
    const date = new Date(event.date).toDateString("DD-MM-YYYY");


    return (
        <div className=' bg-white py-3 px-1 rounded-lg  relative  border border-[#B0BABF]'>
            <div className='  relative'>
                <img className='  w-[400px]  object-fill  rounded-lg object-top ' src={`https://drive.google.com/thumbnail?id=${event.imgUrl.split(`/`)[5]}&sz=w1000`} width={400} alt="" />
                <p className=' text-white  absolute bottom-5  bg-black/70  rounded-b-lg px-6 mx-5  w-[90%] py-2  '>{date}</p>
            </div>
            <div className=' px-3 '>
                <p className=' font-bold text-sm'>{event.eventName}</p>
                <div className=' flex w-full justify-between text-xs'>
                    <p>{event.cityName}</p>
                    <p>{event.weather}  | {event.distanceKm.split('.')[0]} km</p>
                </div>
            </div>

        </div>
    )
}
export default Events
