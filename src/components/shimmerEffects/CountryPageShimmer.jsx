import React from 'react'

const CountryPageShimmer = () => {
  return (
    <div className='p-10'>
        <div className='h-10 bg-gray-300 w-20 rounded-md'></div>
        <div className='flex justify-center gap-4 items-center mt-10'>
            <div className='w-[35%] h-64 rounded-lg bg-gray-300'></div>
            <div className='p-8'>
                <div className='h-12 bg-gray-300 w-56 mb-8'></div>
                <div className='h-5 bg-gray-300 w-48 mb-3'></div>
                <div className='h-5 bg-gray-300 w-36 mb-3'></div>
                <div className='h-5 bg-gray-300 w-40 mb-3'></div>
                <div className='h-5 bg-gray-300 w-32 mb-3'></div>
                <div className='h-5 bg-gray-300 w-40 mb-3'></div>
                <div className='h-5 bg-gray-300 w-80'></div>
            </div>
        </div>
    </div>
  )
}

export default CountryPageShimmer