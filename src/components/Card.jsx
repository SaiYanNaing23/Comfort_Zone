import { PlayIcon } from "@heroicons/react/24/solid";

const Card = ({mv}) => {
  return (
    <div className='relative rounded-lg overflow-hidden card-container cursor-pointer'>
        <img src={`https://image.tmdb.org/t/p/original/${mv.poster_path
}`} alt={mv.title} className='w-full h-full object-cover' />
        <div className="dark-ov"></div>
        <PlayIcon className="play-ic" />
    </div>
  )
}

export default Card