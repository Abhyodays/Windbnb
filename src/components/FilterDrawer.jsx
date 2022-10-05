import React, { useState } from 'react'
import CloseIcon from '../assets/closeIcon.png'
import SuggestItem from './SuggestItem'
import SearchButton from './SearchButton'

const FilterDrawer = (props) => {
  const [inputs, setInputs] = useState({
    locationInput: props.locationInput,
    bedInput: props.bedInput
  })
  function handleChange(event) {
    setInputs(prevInputs => (
      {
        ...prevInputs,
        [event.target.name]: event.target.value.charAt(0).toUpperCase() + event.target.value.substr(1).toLowerCase()
      }
    ))
  }
  function handleLocation(city) {
    setInputs(prevInputs => (
      {
        ...prevInputs,
        locationInput: city
      }
    ))
  }
  function handleClick(){
    props.handleSubmit(inputs.locationInput, inputs.bedInput)
    props.handleFilter()
  }
  return (
    <div className='w-full p-2 bg-white bg-full top-0 left-0 absolute text-gray-700'>
      <div className='flex h-12 justify-between items-center'>
        <h4 className='text-xs font-bold'>Edit your search</h4>
        <img className='h-4' src={CloseIcon} onClick={props.handleFilter} />
      </div>
      <div className='flex flex-col rounded-xl shadow-xl mx-2 p-2 outline-none md:flex-row justify-between'>
        <div className='ml-4 w-full'>
          <p className='text-[9px] font-bold'>LOCATION</p>
          <input className='w-5/6 pl-1 text-sm text-gray-500' type='text' placeholder='Location' name='locationInput' onChange={handleChange} value={inputs.locationInput} />
        </div>
        <div className='ml-4 w-full'>
          <p className='text-[9px] font-bold'>GUESTS</p>
          <input className='w-5/6 pl-1 text-sm text-gray-500' type='number' placeholder='Add Guests' name='bedInput' onChange={handleChange} value={inputs.bedInput} />
        </div>
        <div className='hidden md:block'>
          <span onClick={handleClick}><SearchButton /></span>
        </div>

      </div>

      {/* Suggestion Items */}
      <div className='flex flex-col gap-9 mx-12 my-9'>
        <div onClick={() => handleLocation('Helsinki')}><SuggestItem city='Helsinki' /></div>
        <div onClick={() => handleLocation('Vaasa')}><SuggestItem city='Vaasa' /></div>
        <div onClick={() => handleLocation('Oulu')}><SuggestItem city='Oulu' /></div>
        <div onClick={() => handleLocation('Turku')}><SuggestItem city='Turku' /></div>
      </div>
      <div className='flex justify-center md:hidden'><span onClick={handleClick}><SearchButton /></span></div>
    </div>
  )
}

export default FilterDrawer