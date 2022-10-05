import React from 'react'
import SearchIcon from '../assets/searchIcon.png'

const SearchButton = () => {
  return (
    <div className='flex items-center h-10 w-28 bg-[#EB5757] rounded-2xl justify-center'>
      <img className='h-4 pr-2' src={SearchIcon} />
      <span className='text-sm text-white font-semibold'>Search</span>
    </div>
  )
}

export default SearchButton