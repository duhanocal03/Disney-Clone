import  { useEffect, useState, useRef } from 'react'
import GlobalApi from '../../Services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2"

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;


function Slider() {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();

    const getTrendingMovies = () => {

        GlobalApi.getTrendingVideos.then(response => {

            console.log(response);
            setMovieList(response.data.results);

        })        
    }


    useEffect(() => {
        getTrendingMovies();
    }, [])

    const sliderRight = (element) => { 
        element.scrollLeft += screenWidth-115
    }

    const sliderLeft = (element) => { 
        element.scrollLeft -= screenWidth - 115
    }

    return (
        <>
        <div>
            <HiChevronLeft className="hidden xl:block text-white text-[40px] absolute left-0 top-1/3 cursor-pointer bg-black/10" onClick={() => sliderLeft(elementRef.current)} />
            <HiChevronRight className="hidden xl:block text-white text-[40px] absolute right-0 top-1/3 cursor-pointer mx-10 bg-black/10" onClick={() => sliderRight(elementRef.current)} />
            
        <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth' ref={elementRef}>

            {movieList.map((item) => (

                <img
                    key={item.id}
                    src={IMAGE_BASE_URL + item.backdrop_path}
                    className="min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in " />

            ))}

        </div>
            </div>
            
            </>
    )

}

    export default Slider;