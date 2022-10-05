import React from 'react'
import StarIcon from '../assets/starIcon.png'
import SuperHost from './SuperHost'

const Card = ({city,country,superHost,title,rating,maxGuests,type,beds,photo}) => {
  return (
    <div className='max-w-sm'>
      <img className='rounded-3xl h-64 w-96 object-cover' src={photo}/>
      <div className='flex h-4 items-center justify-between mt-3 text-xs flex-nowrap'>
        <div>{!superHost && <SuperHost/>}<span className='text-gray-600'>{type}, {beds || 0} beds</span></div>
        <div className='whitespace-nowrap'>
        <img className='h-4 inline-block mr-0.5' src={StarIcon}/>
        <span>{rating}</span>
        </div>
      </div>
      <h3 className='text-sm text-gray-800 font-semibold mt-2'>{title}</h3>
    </div>
  )
}

export default Card

