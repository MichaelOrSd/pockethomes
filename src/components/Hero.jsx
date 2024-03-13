import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
      <img 
        className='top-0 left-0 w-full h-screen object-cover' 
        src="https://pocket-homes.s3.us-east-2.amazonaws.com/assets/HeroImage.webp" 
        alt="Tiny Home Village" 
      />
      <div className='bg-black/50 absolute top-0 left-0 w-full h-screen'/>
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-between'>
        {/* Adjust the div below for larger screens with responsive margin */}
        <div className='flex-grow flex flex-col justify-center md:ml-[-2%] md:mt-[-2%]'>
          <div className='max-w-[1200px] m-auto p-4 text-white'>
            <p className='text-lg'>Pocket Home Communities</p>
            <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Where Home Meets Harmony</h1>
            <p className='max-w-[600px] drop-shadow-2xl py-2 pb-4 text-xl'>
            Embrace sustainable, connected, and affordable living in our pocket home community. Together, let's build a future that cherishes our planet, fosters community, and offers everyone a place to call home.
            </p>
          </div>
        </div>
        <div className='flex justify-center m-2 text-gray-300'>
          <p>Disclaimer: This project is currently still in its conceptual stage and is not yet in construction.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
