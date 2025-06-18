import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage'
import LoginSignupPage from './components/Login'
import RfqSubmissionPage from './components/Homepage/SubmitRfq'; 
import BuyerDashboard from './components/Homepage/BuyerDashboard';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/login' element={<LoginSignupPage/>}/>
          <Route path="/submit" element={<RfqSubmissionPage />} />
          <Route path='/buyer' element={<BuyerDashboard/>} />
        </Routes>
      </Router>

    </>
  )
}

export default App
