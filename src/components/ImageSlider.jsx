import React from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'

const ImageSlider = () => {

    const slides = [
        {
            url: 'https://unsplash.com/photos/brown-wooden-table-and-chairs-BpT50qq5ySw',
            Title: 'House'
        },
        {
            url: 'https://unsplash.com/photos/a-couple-of-people-kneeling-down-to-plant-a-tree-qi4FA98Fg8w',
            Title: 'Community'
        },
        {
            url: 'https://unsplash.com/photos/green-plant-x8ZStukS2PM',
            Title: 'Sustainability'
        },
        {
            url: 'https://unsplash.com/photos/happy-young-and-old-farmers-or-gardeners-working-outdoors-at-a-community-farm-Hg1IUJem070',
            Title: 'Affordability'
        },
    ];
  return (
  <div className='max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative'>
        <div 
            className='w-full h-full rounded-2xl bg-center bg-cover duration-500' 
            style={{ backgroundImage: `url(${slides[0].url})` }}
        ></div>
        {/* Left Arrow */}
        <div>
            <BsChevronCompactLeft />
        </div>
        {/* Right Arrow */}
        <div>
            <BsChevronCompactRight />
        </div>
    </div>
  );
};

export default ImageSlider