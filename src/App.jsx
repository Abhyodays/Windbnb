import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import FilterDrawer from './components/FilterDrawer'

function App() {

  const [inputs,setInputs] = useState({
    locationInput:"",
    bedInput:""
  })
  const [showFilter, setShowFilter] = useState(false)

  function handleFilter(){
    setShowFilter(prevState => !prevState)
  }
  function modifyInputs(location, beds){
    setInputs({
      locationInput: location,
      bedInput: beds
    })
  }

  return (
    <div className="p-2.5 md:px-24 md:py-8 ff-body relative">
      <Header handleSubmit={modifyInputs} handleFilter={handleFilter}{...inputs}/>
      <h2 className='text-lg font-bold my-8'>Stays in {inputs.locationInput!=="" && `${inputs.locationInput}, `}Finland</h2>
      <MainContent {...inputs}/>
      {showFilter && <FilterDrawer handleFilter={handleFilter} handleSubmit={modifyInputs}{...inputs}/>}
    </div>
  )
}

export default App
