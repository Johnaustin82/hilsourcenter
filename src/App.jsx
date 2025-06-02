import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Homepage from './components/Homepage/Homepage'
import LoginSignupPage from './components/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <LoginSignupPage/>
      </div>

    </>
  )
}

export default App
