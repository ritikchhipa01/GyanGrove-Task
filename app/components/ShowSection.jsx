import React from 'react'
import Shows from './Shows'

const ShowSection = ({events}) => {
  return (
    <div className=" ml-[10%] -mt-28 p-4 overflow-x-scroll no-scrollbar ">
        <h2 className=" mb-5 text-white">Recommanded Shows</h2>
        <div className="flex relative gap-x-10  min-w-max">
          {
            events &&
            events.map((event) => {
              return (
                <Shows event={event} />
              )
            })
          }
        </div>
      </div>
  )
}

export default ShowSection
