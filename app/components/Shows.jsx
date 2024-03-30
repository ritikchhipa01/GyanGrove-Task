import Image from 'next/image'
import React, { useState } from 'react'

const Shows = ({ event }) => {
    // const [imgUrl, setImgUrl] = useState('');
    // const url = ;
    // console.log(event.imgUrl.split(`/`)[5]);
    const img = `https://drive.google.com/thumbnail?id=${event.imgUrl.split(`/`)[5]}`
    const date = new Date(event.date).toDateString("DD-MM-YYYY");

    return (
        <div className={`  scale-110 w-[220px] h-[300px] bg-cover `} style={{ backgroundImage: `url(${img})` }}
        >
            {/* <img className='  w-full scale-105   rounded-md' src={`https://drive.google.com/thumbnail?id=${event.imgUrl.split(`/`)[5]}`} alt="" /> */}
            <div className=' w-full text-white flex  px-5 justify-between text-xs  absolute bottom-5 '>
                <div className='  text-[11px]'>
                    <p >Make Agree</p>
                    <div>{event.cityName}</div>
                </div>
                <div className='text-[9px] text-right'>
                    <p className=' '>{date}</p>
                    <p className=' '>{event.weather} | {event.distanceKm.split('.')[0]} km</p>
                </div>
            </div>
        </div>
    )
}

export default Shows
