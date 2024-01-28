import React, { useEffect,useRef,useState } from 'react';
import GlobalApi from '../services/GlobalApi';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/original';
const screenWidth = window.screen.width;
function Slider() {

    const [ListMovies, setListMovies] = useState([]);
    const elementRef = useRef();

    // useEffect to fetch data from api key
    useEffect(() => {
        getTrending()
    },[])

    // getTrending t get the trending movies images
    const getTrending =()=>{
        GlobalApi.TrendingMovies.then(response=>{
            console.log(response.data.results);
            setListMovies(response.data.results);
        }).catch(error=>{
            console.log(error);
    })
    }

    // slide Right to left
    const slideRight =(element)=>{
        element.scrollLeft += screenWidth - 110;
        console.log(screenWidth);
    }

    // slide Left to Right
    const slideLeft =(element)=>{
        element.scrollLeft -= screenWidth - 110;
    }

  return (
    <div>
        <HiChevronLeft onClick={()=>slideLeft(elementRef.current)} className='hidden md:block text-white text-[30px] absolute mx-8 mt-[160px] cursor-pointer' />
        <HiChevronRight onClick={()=>slideRight(elementRef.current)} className='hidden md:block text-white text-[30px] mx-8 mt-[160px] cursor-pointer absolute right-0' />
        <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth' ref={elementRef}>
            {ListMovies.map((item,key)=>(
                <img src={BASE_URL_IMAGE+item.backdrop_path} 
                className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-lg hover:border-[4px]
                border-gray-400 transition-all duration-100 ease-in' />
                ))}
        </div>
    </div>
  )
}

export default Slider