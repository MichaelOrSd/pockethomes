import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
      <img 
        className='top-0 left-0 w-full h-screen object-cover' 
        src="https://pocket-homes.s3.us-east-2.amazonaws.com/assets/HeroImage.webp" 
        alt="Tiny Home Village" 
      />
      <div className='bg-black/50 absolute top-0 left-0 w-full h-screen'/>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1200px] m-auto absolute p-4'>
            <p className='pb-0 text-lg'>Pocket Home Communities</p>
            <h1 className='pb-0 font-bold text-5xl md:-7xl drop-shadow-2xl'>Where Home Meets Harmony</h1>
            <p className='max-w-[600px] drop-shadow-2xl py-2 pb-4 text-xl'>
            Embrace sustainable, connected, and affordable living in our pocket home community. Together, let's build a future that cherishes our planet, fosters community, and offers everyone a place to call home.
            </p>
            <button className='bg-white text-black'>Sign Up Now</button>
        </div>
      </div>
    </div>
  )
}

export default Hero