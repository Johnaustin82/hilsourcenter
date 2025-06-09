import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage'
import LoginSignupPage from './components/Login'
import RfqSubmissionPage from './components/Homepage/SubmitRfq'; 


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/login' element={<LoginSignupPage/>}/>
          <Route path="/submit" element={<RfqSubmissionPage />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
