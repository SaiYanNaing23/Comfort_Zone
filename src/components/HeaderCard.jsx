import React from 'react'
import {PlayCircleIcon} from "@heroicons/react/24/solid";

const HeaderCard = ({movie}) => {
  return (
    <div>
        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} className='w-full h-full object-cover'/>    
                <div className='dark-ov'></div>
                <div className="text-box">
                    <h1 className=' text-5xl font-bold uppercase mb-4'>{movie.title}</h1>
                    <p className=' text-2xl font-medium'>{movie.overview}</p>
                    <button className=' bg-white text-black py-2 px-3 rounded-md font-medium text-2xl mt-4 border-0'>
                        <PlayCircleIcon className=' w-7 h-7 inline-block mr-3 -mt-1' />
                        Watch Now</button>
                </div>
    </div>
  )
}

export default HeaderCard