import { useState } from 'react'
import './App.css'
import ImgSlider from './components/ImgSlider'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import Home from './pages/Home'
// import Learn from './pages/Learn'
import { Footer } from './components/Footer'
import AskQuestion from './pages/AskQuestion'
import FamilyAndPersonalLaws from './pages/FamilyAndPersonalLaws'
import ConstitutionalRights from './pages/ConstitutionalRights'
import ContractLaws from './pages/ContractLaws'
import PropertyEstateLaws from './pages/PropertyEstateLaws'
import ConsumerRights from './pages/ConsumerRights'
import EmploymentLaborLaws from './pages/EmploymentLaborLaws'

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/learn' element={<Learn/>}/> */}
        <Route path='/ask' element={<AskQuestion/>}/>
        <Route path="/family-and-personal-laws" element={<FamilyAndPersonalLaws />} />
        <Route path="/constitutional-rights" element={<ConstitutionalRights/>} />
        <Route path="/contract-law" element={<ContractLaws/>} />
        <Route path="/property-estate-laws" element={<PropertyEstateLaws/>} />
        <Route path="/consumer-rights" element={<ConsumerRights/>} />
        <Route path="/employment-labor-laws" element={<EmploymentLaborLaws/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
