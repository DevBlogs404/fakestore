import React from 'react'
import Navigation from '../components/Navigation';
import Banner from '../images/banner.png'

const HomePage = () => {
  return (
      <>
      <Navigation />
      <div className="container mx-auto p-8 grid grid-cols-1 gap-10  md:grid-cols-2 items-center justify-center">
          <div className=''>
            <h3 className='text-xl font-bold'>BEST ONLINE STORE OF THE YEAR</h3>
            <h1 className='text-6xl font-bold '>We don't do Fashion, We are Fashion</h1>
          </div>
          <div className=''>
            <img src={Banner} alt='banner' />
          </div>
      </div>
      </>
      
      
  )
}

export default HomePage