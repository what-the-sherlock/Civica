// import { useState } from 'react'
// import './App.css'
// import ImgSlider from './components/ImgSlider'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { NavBar } from './components/NavBar'
// import Home from './pages/Home'
// // import Learn from './pages/Learn'
// import { Footer } from './components/Footer'
// import AskQuestion from './pages/AskQuestion'
// import FamilyAndPersonalLaws from './pages/FamilyAndPersonalLaws'
// import ConstitutionalRights from './pages/ConstitutionalRights'
// import ContractLaws from './pages/ContractLaws'
// import PropertyEstateLaws from './pages/PropertyEstateLaws'
// import ConsumerRights from './pages/ConsumerRights'
// import EmploymentLaborLaws from './pages/EmploymentLaborLaws'
// import ScrollToTop from './components/ScrollToTop'

// function App() {
//   return (
//     <Router>
//       <ScrollToTop/>
//       <NavBar/>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         {/* <Route path='/learn' element={<Learn/>}/> */}
//         <Route path='/ask' element={<AskQuestion/>}/>
//         <Route path="/family-and-personal-laws" element={<FamilyAndPersonalLaws />} />
//         <Route path="/constitutional-rights" element={<ConstitutionalRights/>} />
//         <Route path="/contract-law" element={<ContractLaws/>} />
//         <Route path="/property-estate-laws" element={<PropertyEstateLaws/>} />
//         <Route path="/consumer-rights" element={<ConsumerRights/>} />
//         <Route path="/employment-labor-laws" element={<EmploymentLaborLaws/>} />
//       </Routes>
//       <Footer/>
//     </Router>
//   )
// }

// export default App
import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import Home from './pages/Home'
import { Footer } from './components/Footer'
import AskQuestion from './pages/AskQuestion'
import FamilyAndPersonalLaws from './pages/FamilyAndPersonalLaws'
import ConstitutionalRights from './pages/ConstitutionalRights'
import ContractLaws from './pages/ContractLaws'
import PropertyEstateLaws from './pages/PropertyEstateLaws'
import ConsumerRights from './pages/ConsumerRights'
import EmploymentLaborLaws from './pages/EmploymentLaborLaws'
import ScrollToTop from './components/ScrollToTop'
import logo from './assets/img/civica-logo.png' // Update this path to match your project

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#443627]">
        <img
          src={logo}
          alt="Loading..."
          className="w-32 h-32 animate-bounce transition duration-500 ease-in-out"
        />
      </div>
    )
  }

  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ask' element={<AskQuestion />} />
        <Route path="/family-and-personal-laws" element={<FamilyAndPersonalLaws />} />
        <Route path="/constitutional-rights" element={<ConstitutionalRights />} />
        <Route path="/contract-law" element={<ContractLaws />} />
        <Route path="/property-estate-laws" element={<PropertyEstateLaws />} />
        <Route path="/consumer-rights" element={<ConsumerRights />} />
        <Route path="/employment-labor-laws" element={<EmploymentLaborLaws />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
