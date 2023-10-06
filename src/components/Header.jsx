import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const Header = () => {
  return (
    <section className='relative'>
           <Splide options={{
            type : "loop",
            arrows : false,
            autoplay : true,
            interval : 4000,
           }}>
            <SplideSlide className='h-screen w-full relative'>
            <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/1ecde018e863e2aaee31f00a23378c35.jpe" alt="Naruto" className='w-full h-full object-cover'/>    
                <div className='dark-ov'></div>
                <div className="text-box">
                    <h1 className=' text-5xl font-bold uppercase mb-4'>One Piece</h1>
                    <p className=' text-2xl font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, id expedita alias, ipsam neque perferendis illo molestias autem, omnis nulla perspiciatis nemo consequatur consectetur repellendus distinctio odit debitis minus voluptatibus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, eos debitis. Dolorem deleniti exercitationem inventore id fuga laborum aspernatur illum architecto provident dicta voluptas animi, in consequuntur accusantium suscipit? Porro!</p>
                    <button className=' bg-white text-black py-2 px-3 rounded-md font-medium text-2xl mt-4 border-0'>Watch Now</button>
                </div>
            </SplideSlide>
            <SplideSlide className='h-screen w-full relative'>
            <img src="https://wallpapers.com/images/hd/vinland-saga-pictures-dikxzidsazb3dqzm.jpg" alt="Naruto" className='w-full h-full object-cover'/>    
                <div className='dark-ov'></div>
                <div className="text-box">
                    <h1 className=' text-5xl font-bold uppercase mb-4'>One Piece</h1>
                    <p className=' text-2xl font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, id expedita alias, ipsam neque perferendis illo molestias autem, omnis nulla perspiciatis nemo consequatur consectetur repellendus distinctio odit debitis minus voluptatibus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, eos debitis. Dolorem deleniti exercitationem inventore id fuga laborum aspernatur illum architecto provident dicta voluptas animi, in consequuntur accusantium suscipit? Porro!</p>
                    <button className=' bg-white text-black py-2 px-3 rounded-md font-medium text-2xl mt-4 border-0'>Watch Now</button>
                </div>
            </SplideSlide>
            <SplideSlide className='h-screen w-full relative'>
            <img src="https://i.ytimg.com/vi/xoCUSgO6mGQ/maxresdefault.jpg" alt="Naruto" className='w-full h-full object-cover'/>    
                <div className='dark-ov'></div>
                <div className="text-box">
                    <h1 className=' text-5xl font-bold uppercase mb-4'>One Piece</h1>
                    <p className=' text-2xl font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, id expedita alias, ipsam neque perferendis illo molestias autem, omnis nulla perspiciatis nemo consequatur consectetur repellendus distinctio odit debitis minus voluptatibus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, eos debitis. Dolorem deleniti exercitationem inventore id fuga laborum aspernatur illum architecto provident dicta voluptas animi, in consequuntur accusantium suscipit? Porro!</p>
                    <button className=' bg-white text-black py-2 px-3 rounded-md font-medium text-2xl mt-4 border-0'>Watch Now</button>
                </div>
            </SplideSlide>
            <SplideSlide className='h-screen w-full relative'>
            <img src="https://i.ytimg.com/vi/4zNyK9rk-sg/maxresdefault.jpg" alt="Naruto" className='w-full h-full object-cover'/>    
                <div className='dark-ov'></div>
                <div className="text-box">
                    <h1 className=' text-5xl font-bold uppercase mb-4'>One Piece</h1>
                    <p className=' text-2xl font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, id expedita alias, ipsam neque perferendis illo molestias autem, omnis nulla perspiciatis nemo consequatur consectetur repellendus distinctio odit debitis minus voluptatibus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, eos debitis. Dolorem deleniti exercitationem inventore id fuga laborum aspernatur illum architecto provident dicta voluptas animi, in consequuntur accusantium suscipit? Porro!</p>
                    <button className=' bg-white text-black py-2 px-3 rounded-md font-medium text-2xl mt-4 border-0'>Watch Now</button>
                </div>
            </SplideSlide>
           </Splide>
    </section>
  )
}

export default Header