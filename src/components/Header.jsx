import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import HeaderCard from './HeaderCard';
import { useEffect, useState } from 'react';




const Header = () => {
    const [relatedMovie,setRelatedMovie] = useState([])
    useEffect(()=>{
        getRelatedMovies()
    },[])
    const getRelatedMovies = async()=>{
       const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=98803a3a3bfc0348b0512b27a85f81f2&language=en-US");
       const data = await response.json();
       setRelatedMovie(data.results)
       console.log(data.results)
    }
  return (
    <section className='relative'>
           <Splide options={{
            type : "loop",
            arrows : false,
            autoplay : true,
            interval : 3000,
           }}>
                {
                    relatedMovie.map(movie=>(
                        <SplideSlide className='h-screen w-full relative' key={movie.id}>
                            <HeaderCard movie={movie} />
                        </SplideSlide>
                    ))
                }
           </Splide>
    </section>
  )
}

export default Header