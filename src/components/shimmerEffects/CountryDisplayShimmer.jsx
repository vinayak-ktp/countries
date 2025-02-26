import React from 'react'

const CountryDisplayShimmer = () => {
  return (
    <div className='grid grid-cols-4 gap-10 min-h-lvh p-10 pt-0 max-sm:px-8 max-sm:grid-cols-1 max-lg:grid-cols-3 max-md:grid-cols-2 max-w-7xl m-auto'>
        {
          Array.from({length:12}).map((_, idx) => 
            <div key={idx} className='w-full dark:bg-gray-700 rounded-md shadow-md overflow-hidden m-auto animate-pulse'>
              <div className='h-40 w-full bg-gray-300'></div>
              <div className='h-5 w-32 bg-gray-300 m-3 mt-5'></div>
              <div className='h-5 w-16 bg-gray-300 m-3'></div>
              <div className='h-5 w-24 bg-gray-300 m-3'></div>
              <div className='h-5 w-40 bg-gray-300 m-3 mb-4'></div>
            </div>
          )
        }
        
    </div>
  )
}

export default CountryDisplayShimmer