import React from 'react'

const HeaderCard = ({movie}) => {
  return (
    <div>
        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="Naruto" className='w-full h-full object-cover'/>    
                <div className='dark-ov'></div>
                <div className="text-box">
                    <h1 className=' text-5xl font-bold uppercase mb-4'>{movie.title}</h1>
                    <p className=' text-2xl font-medium'>{movie.overview}</p>
                    <button className=' bg-white text-black py-2 px-3 rounded-md font-medium text-2xl mt-4 border-0'>Watch Now</button>
                </div>
    </div>
  )
}

export default HeaderCard