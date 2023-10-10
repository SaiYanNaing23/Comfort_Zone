import { useEffect, useState } from 'react';
import Card from './Card';

const PopularMovies = () => {
  const [popularMovie,setPopularMovie] = useState([])
  useEffect(()=>{
    getPopularMovie()
  },[]);
  const getPopularMovie = async()=>{
    const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=98803a3a3bfc0348b0512b27a85f81f2&language=en-US")
    const data = await res.json();
    setPopularMovie(data.results)
  }
  return (
    <section className='px-3 py-10 mt-18'>    
        <h1 className='text-white text-4xl text-center'>Popular Movies</h1>
        <div className='grid grid-cols-8 gap-5  mt-20'>
          {
            popularMovie.map(mv=>{
              return(
                <Card mv={mv} key={mv.id} />
              )
            })
          }
        </div>
    </section>
  )
}

export default PopularMovies;