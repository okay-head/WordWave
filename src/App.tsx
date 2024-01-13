import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import 'preline/preline'
import { IStaticMethods } from 'preline/preline'
import SignUp from './components/auth/SignUp'
import Navbar from './components/nav/Navbar'
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods
  }
}

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.HSStaticMethods.autoInit()
  }, [location.pathname])

  return (
    <div className='app'>
      <Navbar />
      <SignUp />
      <Toaster />
    </div>
  )
}
