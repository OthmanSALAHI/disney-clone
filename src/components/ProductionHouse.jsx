import React from 'react'

// images
import disney from '../assets/Images/disney.png';
import marvel from '../assets/Images/marvel.png';
import pixar from '../assets/Images/pixar.png';
import starwars from '../assets/Images/starwar.png';
import national from '../assets/Images/nationalG.png';

//videos
import disneyVideo from '../assets/Videos/disney.mp4';
import marvelVideo from '../assets/Videos/marvel.mp4';
import pixarVideo from '../assets/Videos/pixar.mp4';
import starwarsVideo from '../assets/Videos/star-wars.mp4';
import nationalVideo from '../assets/Videos/national-geographic.mp4';

function ProductionHouse() {
    const ProductionHouse = [
        {name : 'Disney', image: disney, video: disneyVideo},
        {name : 'Marvel', image: marvel, video: marvelVideo},
        {name : 'Pixar', image: pixar, video: pixarVideo},
        {name : 'Star Wars', image: starwars, video: starwarsVideo},
        {name : 'National Geographic', image: national, video: nationalVideo},
    ];
  return (
    <div className='flex gap-2 md:gap-5 px-5 md:px-16'>
        {ProductionHouse.map((item, key) => (
            <div className='border-[2px] border-gray-600 rounded-lg 
            hover:scale-110 transition-all duration-100 ease-in-out 
            cursor-pointer shadow-xl shadow-black'>
                <video src={item.video} autoPlay loop playsInline 
                className='absolute top-0 rounded-md z-[0] opacity-0 hover:opacity-50'/>
                <img src={item.image} className='w-full z[1]' />
            </div>
        ))}
    </div>
  )
}

export default ProductionHouse
