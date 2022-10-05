import React from 'react'
import LocationIcon from '../assets/locationIcon.png'

const SuggestItem = (props) => {
  return (
    <div className='flex items-center '>
    <span><img className='h-5' src={LocationIcon} /></span>
    <span className='text-sm'>{props.city}, Finland</span>
    </div>
  )
}

export default SuggestItem