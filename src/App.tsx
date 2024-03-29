import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import 'preline/preline'
import { IStaticMethods } from 'preline/preline'
import SignUp from './components/auth/SignUp'
import Navbar from './components/nav/Navbar'
import SignIn from './components/auth/SignIn'
import { Route, Routes } from 'react-router-dom'
import Home from './components/feed/Home'
import NotFound from './NotFound'
import Users from './components/users/Users'
import Profile from './components/profile/Profile'
import CheckAuth from './components/auth/CheckAuth'
import CreateWave from './components/user/CreateWave'
import Logout from './components/auth/Logout'

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
      <Toaster />
      <Routes>
        <Route path='/' />
        <Route index element={<Home />} />
        <Route path='/auth'>
          <Route index element={<NotFound />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
        </Route>
        <Route path='/users' element={<Users />} />

        {/* --- Protected routes (Only accessible when signed in) --- */}
        <Route path='/:id' element={<CheckAuth />}>
          <Route index element={<NotFound />} />
          <Route path='profile' element={<Profile />} />
          <Route path='create' element={<CreateWave />} />
          <Route path='logout' element={<Logout />} />
        </Route>
        {/* --- Protected routes end--- */}

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}
