import React from 'react'
import stays from '../stays.json'
import Card from './Card'

const MainContent = ({locationInput, bedInput}) => {
  const cards = stays.filter((stay) =>{
    const {city,beds} = stay
    
    if(locationInput !== "" && bedInput !== ""){
      return city===locationInput && beds>=bedInput;
    }
    if(locationInput !== ""){
      return city===locationInput 
    }
    else if(bedInput !== ""){
      return beds>=bedInput
    }
    else{
      return stay
    }
  }).map((stay,index)=>{
    return <Card {...stay} key={index} />
  })
  return (
    <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
      {cards}
    </div>
  )
}

export default MainContent