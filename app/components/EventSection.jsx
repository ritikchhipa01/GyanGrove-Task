import React from 'react'
import Events from './Events'

const EventSection = ({ shows }) => {
    return (
        <>
            <h2 className=" ml-[5%] md:ml-[10%] text-black font-bold mt-10 mb-5 ">
                Upcoming Events
            </h2>
            <div className="  flex  px-3 flex-wrap gap-4 w-full justify-center ">
                {
                    shows &&
                    shows.map((shows) => {
                        return (
                            <Events event={shows} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default EventSection
