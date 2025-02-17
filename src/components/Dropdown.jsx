import React from 'react'

const Dropdown = ({setRegion}) => {
  return (
    <select onChange={(e) => setRegion(e.target.value)} name='regions' className='dark:bg-gray-700 dark:text-white font-medium p-2 rounded-md hover:cursor-pointer shadow-md bg-gray-100 border-b border-r border-gray-400 outline-none transition-all duration-300'>
      <option value="">Select Region</option>
      <option value="Africa">Africa</option>
      <option value="America">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  )
}

export default Dropdown