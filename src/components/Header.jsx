import React from 'react'
import { useState } from 'react'
import Logo from '../assets/logo.svg'
import SearchIcon from '../assets/searchIcon.svg'

function Header(props) {
  const [inputs,setInputs] = useState({
    locationInput: props.locationInput,
    bedInput: props.bedInput
  })
  function handleChange(event){
    setInputs(prevInputs =>(
      {
        ...prevInputs,
        [event.target.name] : event.target.value.charAt(0).toUpperCase()+event.target.value.substr(1).toLowerCase()
      }
    ))
  }

  return (
    <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
      <div className='flex items-center h-14'>
        <img src={Logo} />
      </div>
      <div className='flex justify-center mt-10 md:mt-0' onClick={props.handleFilter}>
        <div className='flex justify-center items-center h-14 shadow-md rounded-2xl'>
          <input className='pl-4 w-28 h-14 ff-mulish focus:outline-0' type='text' placeholder='Location' name='locationInput' onChange={handleChange} value={inputs.locationInput}/> 
          <input className='pl-2 w-24 h-14 border-x-1 border-light ff-mulish focus:outline-0' type='number' placeholder='Add guests' name='bedInput' onChange={handleChange}  value={inputs.bedInput}/>
          <img className='h-5 pr-4 pl-3' src={SearchIcon} onClick={()=>props.handleSubmit(inputs.locationInput,inputs.bedInput)}/>
        </div>

      </div>
      
    </div>
  )
}

export default Header