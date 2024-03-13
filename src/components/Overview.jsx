import React from 'react'

const Overview = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        {/* Left side */}
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className='row-span-3 object-cover w-full h-full p-2' 
                src="https://pocket-homes.s3.us-east-2.amazonaws.com/assets/House.webp" 
                alt="Tiny Home Village" 
            /> 
            <img className='row-span-2 object-cover w-full h-full p-2' 
                src="https://pocket-homes.s3.us-east-2.amazonaws.com/assets/Community.webp" 
                alt="Tiny Home Village" 
                />
            <img className='row-span-2 object-cover w-full h-full p-2' 
                src="https://pocket-homes.s3.us-east-2.amazonaws.com/assets/Sustainability.webp"
                alt="Tiny Home Village" 
                />
            <img className='row-span-3 object-cover w-full h-full p-2' 
                src="https://pocket-homes.s3.us-east-2.amazonaws.com/assets/Afordability.webp" 
                alt="Tiny Home Village" 
            />
            <img className='row-span-3 object-cover w-full h-full p-2' 
                src="https://pocket-homes.s3.us-east-2.amazonaws.com/assets/Market.webp" 
                alt="Tiny Home Village" 
            />
        </div>
        {/* Right side */}
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-6xl font-bold'>Pocket Community Concept Art</h3>
            <p className='text-2xl py-6'>This project aims to support community living while prioritizing sustainability and affordability.</p>
            <p className='pb-6'>In this concept art, one can see the focus on alternative housing, community living, sustainable renewable energy, as well as a local marketplace and community yurts for services provided by community members and public members.</p>
        <div>
            <button className='border py-2 px-4 rounded-md hover:bg-teal-800 border-black bg-teal-600 text-white hover:shadow-xl'>Join Newsletter</button>
        </div>
        </div>
    </div>
  )
}

export default Overview